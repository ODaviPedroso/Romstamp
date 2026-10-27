"use client";
import { useState } from "react";
import Link from "next/link";
type State = "idle" | "checking" | "healthy" | "unhealthy";
export default function Home() {
  const [api, setApi] = useState<State>("idle");
  const [database, setDatabase] = useState<State>("idle");
  const [checking, setChecking] = useState(false);
  async function verify() {
    setChecking(true); setApi("checking"); setDatabase("checking");
    async function probe(path: string): Promise<State> {
      try {
        const response = await fetch(`/api/v1/health/${path}`, { cache: "no-store", signal: AbortSignal.timeout(8000) });
        const result = await response.json();
        return response.ok && result.status === "healthy" ? "healthy" : "unhealthy";
      } catch { return "unhealthy"; }
    }
    const [live, ready] = await Promise.all([probe("live"), probe("ready")]);
    setApi(live); setDatabase(ready); setChecking(false);
  }
  const labels = { idle: "Ainda não verificado", checking: "Verificando…", healthy: "Disponível", unhealthy: "Indisponível" };
  return <>
    <header><Link className="brand" href="/"><span className="seal">R</span>ROMSTAMP</Link><span className="stage">EM DESENVOLVIMENTO</span></header>
    <main>
      <section><p className="eyebrow">CADA DESAFIO, UMA HISTÓRIA</p><h1>Seus feitos.<br/><span>Reconhecidos.</span></h1><p className="description">Uma comunidade para superar desafios, compartilhar provas e conquistar carimbos que contam a sua trajetória nos jogos.</p><div className="tags"><span>No-hit</span><span>Platina / 100%</span><span>Speedrun</span><span>Desafios com restrições</span></div></section>
      <section className="panel" aria-labelledby="environment-title"><p className="eyebrow">FUNDAÇÃO DO PROJETO</p><h2 id="environment-title">Ambiente de desenvolvimento</h2><p>A primeira etapa conecta a interface, a API e o banco. As funções da comunidade serão construídas nas próximas entregas.</p>
        <dl aria-live="polite" aria-busy={checking}><div><dt>Interface Next.js</dt><dd data-state="healthy">Disponível</dd></div><div><dt>API .NET 10</dt><dd data-state={api}>{labels[api]}</dd></div><div><dt>Conexão com PostgreSQL</dt><dd data-state={database}>{labels[database]}</dd></div></dl>
        <button onClick={verify} disabled={checking}>{checking ? "Verificando serviços…" : "Verificar conexão"}</button>
        {(api === "unhealthy" || database === "unhealthy") && <p className="notice" role="status">Verifique se a API e o PostgreSQL estão iniciados e se a conexão com o banco foi configurada. Consulte o README do projeto.</p>}
      </section>
    </main><footer>ROMSTAMP <span>Feitos que merecem um carimbo.</span></footer>
  </>;
}
