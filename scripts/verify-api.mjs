import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";

const base = process.env.API_BASE_URL ?? "http://127.0.0.1:5191";
const offline = process.env.OFFLINE_API_BASE_URL;
for (let attempt = 0; ; attempt++) {
  try {
    const response = await fetch(`${base}/api/v1/health/live`);
    if (response.ok) break;
  } catch { /* A API pode ainda estar iniciando. */ }
  if (attempt >= 29) throw new Error("API não iniciou em 30 tentativas.");
  await new Promise(resolve => setTimeout(resolve, 1000));
}

async function verify(url, expectedStatus, expectedHealth, database) {
  const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
  assert.equal(response.status, expectedStatus, url);
  assert.equal(response.headers.get("cache-control"), "no-store");
  const body = await response.json();
  assert.equal(body.status, expectedHealth);
  if (database) assert.equal(body.checks.postgres, expectedHealth);
}

await verify(`${base}/api/v1/health/live`, 200, "healthy", false);
await verify(`${base}/api/v1/health/ready`, 200, "healthy", true);
if (offline) {
  await verify(`${offline}/api/v1/health/live`, 200, "healthy", false);
  await verify(`${offline}/api/v1/health/ready`, 503, "unhealthy", true);
}
const documentResponse = await fetch(`${base}/openapi/v1.json`);
assert.equal(documentResponse.status, 200);
const document = await documentResponse.json();
assert.ok(document.paths["/api/v1/health/live"].get.responses["200"]);
assert.ok(document.paths["/api/v1/health/ready"].get.responses["503"]);
assert.ok(document.components.schemas.HealthResponse);
delete document.servers; // Endereço do ambiente não faz parte do contrato versionado.
await mkdir(new URL("../docs/api/", import.meta.url), { recursive: true });
await writeFile(new URL("../docs/api/openapi.json", import.meta.url), JSON.stringify(document, null, 2) + "\n");
console.log("Saúde e contrato OpenAPI verificados; documento exportado.");
