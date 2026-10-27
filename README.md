# Romstamp

Rede social e fórum para compartilhar desafios de videogames, enviar provas e receber reconhecimento por feitos homologados pela comunidade.

Fundação inicial: API .NET 10, frontend Next.js com TypeScript e configuração de PostgreSQL 18. Cadastro, desafios e homologação ainda serão implementados.

## Executar localmente

Pré-requisitos: SDK .NET 10.0.400, Node.js 22.19+ e Docker com Compose (ou PostgreSQL 18 instalado separadamente).

### 1. Banco

Na raiz, copie `.env.example` para `.env`, defina uma senha local e execute:

```powershell
Copy-Item .env.example .env
# Edite POSTGRES_PASSWORD no .env antes de iniciar.
docker compose up -d
docker compose ps
```

O banco `romstamp`, usuário `romstamp`, é exposto apenas em `127.0.0.1:5432`. O volume persiste os dados. `docker compose down` encerra o serviço preservando o volume. Alterar a senha no `.env` não altera a senha de um volume já inicializado.

### 2. API

Em outro terminal na raiz, configure a mesma senha escolhida no `.env`:

```powershell
$env:ConnectionStrings__Postgres = 'Host=localhost;Port=5432;Database=romstamp;Username=romstamp;Password=SUA_SENHA_LOCAL;Timeout=3'
dotnet run --project src/Romstamp.Api --launch-profile http
```

O `.env` da raiz é lido pelo Compose; o .NET recebe a conexão pela variável acima. Não versione senhas. A API inicia em `http://localhost:5191`:

- `/api/v1/health/live`: HTTP 200 se o processo está ativo, independentemente do banco.
- `/api/v1/health/ready`: HTTP 200 se consegue executar `SELECT 1` no PostgreSQL; HTTP 503 se não estiver configurado ou acessível.

As respostas são JSON, não expõem credenciais e não devem ser armazenadas em cache. Os endpoints são verificação operacional, não representam funcionalidades de negócio. O banco ainda não possui tabelas de domínio ou migrações.

### 3. Frontend

```powershell
cd apps/web
npm ci
npm run dev
```

Abra `http://localhost:3000` e clique em **Verificar conexão**. O Next.js encaminha `/api/v1/*` à API pelo próprio servidor, sem precisar habilitar CORS. Para mudar o destino, copie `apps/web/.env.example` para `apps/web/.env.local`, ajuste `API_BASE_URL` e reinicie o Next.js. Essa variável deve apontar somente para o backend confiável; em produção, defina-a também ao construir o frontend.

## Verificações

```powershell
dotnet build
cd apps/web
npm run lint
npm run build
```

Para o smoke test, com API, frontend e banco iniciados:

```powershell
Invoke-RestMethod http://localhost:5191/api/v1/health/live
Invoke-RestMethod http://localhost:5191/api/v1/health/ready
Invoke-RestMethod http://localhost:3000/api/v1/health/ready
```

Sem banco, a API deve continuar viva e a prontidão deve retornar 503. No navegador, o diagnóstico deve indicar indisponibilidade em vez de simular sucesso. Docker não estava disponível no ambiente durante a primeira implementação; a conexão positiva com PostgreSQL precisa ser validada em um ambiente com o banco em execução.

- [Especificação de produto e arquitetura](docs/ESPECIFICACAO.md)
- [Gestão, marcos e backlog inicial](docs/GESTAO.md)
- [Referências de interface](desing/)

A especificação registra o MVP, as regras propostas, a arquitetura, o modelo de dados, os critérios de aceite e as decisões ainda abertas. Os mockups representam ideias visuais e não implicam que todos os recursos ilustrados farão parte do lançamento.
