using Microsoft.Extensions.Diagnostics.HealthChecks;
using Npgsql;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddProblemDetails();
builder.Services.AddOpenApi();
builder.Services.AddHealthChecks()
    .AddCheck<PostgresHealthCheck>("postgres", tags: ["ready"], timeout: TimeSpan.FromSeconds(5));

var app = builder.Build();
app.UseExceptionHandler();
if (app.Environment.IsDevelopment()) app.MapOpenApi();
app.MapGet("/api/v1/health/live", (HttpContext context) =>
    WriteHealthResponse(context, new HealthResponse("healthy", [])))
    .WithName("GetLiveness").WithTags("Health")
    .WithSummary("Verifica se o processo da API está ativo.")
    .Produces<HealthResponse>();
app.MapGet("/api/v1/health/ready", async (HttpContext context, HealthCheckService healthChecks) =>
{
    var report = await healthChecks.CheckHealthAsync(check => check.Tags.Contains("ready"), context.RequestAborted);
    var response = new HealthResponse(report.Status.ToString().ToLowerInvariant(),
        report.Entries.ToDictionary(entry => entry.Key, entry => entry.Value.Status.ToString().ToLowerInvariant()));
    return WriteHealthResponse(context, response);
}).WithName("GetReadiness").WithTags("Health")
    .WithSummary("Verifica se a API consegue consultar o PostgreSQL.")
    .Produces<HealthResponse>().Produces<HealthResponse>(StatusCodes.Status503ServiceUnavailable);
app.Run();

static IResult WriteHealthResponse(HttpContext context, HealthResponse response)
{
    context.Response.Headers.CacheControl = "no-store";
    return Results.Json(response, statusCode: response.Status == "healthy" ? 200 : 503);
}

public sealed record HealthResponse(string Status, Dictionary<string, string> Checks);

public sealed class PostgresHealthCheck(IConfiguration configuration) : IHealthCheck
{
    public async Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context, CancellationToken cancellationToken = default)
    {
        var connectionString = configuration.GetConnectionString("Postgres");
        if (string.IsNullOrWhiteSpace(connectionString))
            return HealthCheckResult.Unhealthy("Database is not configured.");

        try
        {
            await using var connection = new NpgsqlConnection(connectionString);
            await connection.OpenAsync(cancellationToken);
            await using var command = new NpgsqlCommand("SELECT 1", connection) { CommandTimeout = 3 };
            await command.ExecuteScalarAsync(cancellationToken);
            return HealthCheckResult.Healthy();
        }
        catch (Exception exception) when (exception is NpgsqlException or OperationCanceledException)
        {
            return HealthCheckResult.Unhealthy("Database is unavailable.");
        }
    }
}
