# Romstamp — Especificação de produto e arquitetura

Versão: 0.1 • 26/10/2026 • Estado: proposta inicial para revisão.

Este documento transforma a ideia inicial e os mockups de `desing/` em uma base de desenvolvimento. Requisitos informados pelo idealizador e propostas deste documento são diferenciados abaixo. Nenhuma decisão proposta deve ser entendida como já aprovada.

## 1. Visão do produto

Romstamp é uma rede social com recursos de fórum para jogadores compartilharem e comprovarem desafios de videogames. Seu diferencial é reconhecer diferentes formas de habilidade e dedicação, além de velocidade: completar jogos, platinar, vencer sem dano, jogar com restrições, alcançar pontuações e superar desafios criados pela comunidade.

O reconhecimento principal é o **carimbo Romstamp**: um registro público de que uma execução foi revisada e aprovada segundo regras específicas. A aprovação é uma avaliação humana das evidências disponíveis, não uma garantia técnica de ausência de fraude.

Fluxo principal: descobrir um desafio → entender suas regras → executar e gravar → enviar a prova → receber avaliação → conquistar um carimbo → compartilhar o feito e conversar com a comunidade.

### Confirmado pela ideia inicial

- Rede social/fórum centrada em desafios gamers.
- Múltiplos tipos de desafios, dos mais acessíveis aos extremos.
- Validação por moderadores que pertencem à comunidade.
- Prova em vídeo sem cortes; links do YouTube são a opção inicial considerada.
- Stack inicial: .NET 10, Next.js com TypeScript e PostgreSQL. Interpretação adotada para o termo “Next.ts”.
- Mockups existentes são referências iniciais de interface, não requisitos funcionais completos.

### Premissas propostas

- Aplicação web responsiva, em português brasileiro no lançamento.
- Beta com catálogo pequeno, curado e moderadores convidados.
- Vídeos hospedados no YouTube; sem upload de vídeo para o Romstamp no MVP.
- Navegação pública; conta necessária para participar.
- A comunidade pode propor desafios; moderadores autorizados publicam as regras.
- Sem pontos globais ou moedas no MVP: o reconhecimento começa por carimbos e contagem de feitos únicos.

## 2. Objetivos e avaliação do produto

1. Permitir que alguém encontre um desafio com regras claras e envie uma prova.
2. Permitir uma revisão rastreável, com justificativa e possibilidade de recurso.
3. Dar visibilidade aos feitos homologados no perfil e no feed.
4. Sustentar discussão e ajuda entre jogadores sem confundir popularidade com validade.

Métricas iniciais: pessoas que passam de visita a envio; tempo até a primeira decisão; tamanho e idade da fila por jogo; percentual de envios que pedem complementação; recursos e decisões revertidas; jogadores que retornam após o primeiro carimbo. Essas métricas precisam ser medidas antes de estabelecer metas de crescimento.

## 3. Vocabulário e conceitos

| Conceito | Definição |
| --- | --- |
| Jogo | Título do catálogo, com plataformas e edições relevantes. |
| Desafio | Objetivo reutilizável de um jogo: por exemplo, derrotar um chefe sem tomar dano. |
| Versão de regras | Texto e critérios imutáveis que determinam exatamente o que precisa ser cumprido. |
| Submissão | Tentativa de um jogador, vinculada a uma versão das regras e às suas evidências. |
| Revisão | Parecer de um moderador autorizado para o jogo, com critérios e justificativa. |
| Feito homologado | Registro concedido a partir de uma submissão aprovada. |
| Carimbo | Representação visual e identificador público do feito homologado. |
| Cofre | Coleção pública dos feitos do jogador; não representa posse de jogos ou ativos negociáveis. |
| Aplauso | Reação social; não equivale a voto de homologação. |
| Debate | Tópico de fórum associado a um jogo ou desafio, com respostas. |

Exemplo: “Elden Ring” é o jogo; “Derrotar Malenia sem dano” é o desafio; “Regras v1, PC, sem mods e sem invocações” é o regulamento; o vídeo do jogador integra uma submissão; a aprovação gera o feito e seu carimbo.

## 4. Escopo do MVP

| Área | Entrega inicial | Evolução posterior |
| --- | --- | --- |
| Conta | Cadastro, confirmação de e-mail, login, recuperação e perfil | Login com provedores, personalização avançada |
| Catálogo | Jogos cadastrados pela administração e desafios publicados | Importação de catálogo e curadoria distribuída |
| Desafios | Proposição, revisão editorial, regras versionadas e filtros | Eventos, desafios cooperativos e categorias compostas |
| Provas | Links YouTube e intervalos de vídeo, descrição e contexto | Outros provedores e evidências complementares automatizadas |
| Homologação | Fila por jogo, parecer, complementação, recurso e auditoria | Múltiplos revisores e políticas por nível de risco |
| Reconhecimento | Carimbo público, cofre e contagem de feitos únicos ativos | Rankings por categoria e pontuação calibrada |
| Social | Seguir, aplaudir, comentar feitos e criar debates com respostas | Feed personalizado, mensagens e grupos |
| Moderação | Denúncias, ocultação, suspensão e revisão de concessões | Ferramentas avançadas contra abuso |
| Notificações | Central interna de decisões, respostas e interações | Preferências e notificações externas |

Fora do MVP: pagamentos, assinatura PRO, Glory Coins, NFTs, mercado de carimbos, aplicativo nativo, streaming próprio, leitura de controle, anti-cheat automático, certificação de hardware, chat em tempo real e ranking global de dificuldade.

## 5. Atores e permissões

| Ação | Visitante | Jogador autenticado | Moderador do jogo | Administrador |
| --- | --- | --- | --- | --- |
| Consultar conteúdo público | Sim | Sim | Sim | Sim |
| Enviar prova, propor desafio, publicar e interagir | Não | Sim | Sim | Sim |
| Revisar submissão de outra pessoa | Não | Não | No seu jogo | Com permissão e sem conflito |
| Publicar regras de desafios | Não | Não | No seu jogo | Sim |
| Ocultar conteúdo denunciado | Não | Não | No seu escopo | Sim |
| Nomear moderadores e suspender contas | Não | Não | Não | Sim |
| Julgar recurso e revogação | Não | Não | Se designado e independente | Se independente |

Permissões administrativas não eliminam impedimentos de revisão. Ninguém pode julgar sua própria submissão ou seu próprio recurso. A atribuição de moderador é por jogo e pode ser removida; decisões anteriores permanecem auditadas. No beta, administradores selecionam moderadores por convite e experiência demonstrável; número de aplausos não concede poder de aprovação.

## 6. Desafios e regulamento

Cada desafio exige: jogo, título, descrição do objetivo, categoria, plataformas/edições aceitas, dificuldade editorial, regras, critérios de falha, política de evidências e exemplos do que é permitido ou proibido.

Categorias iniciais: conclusão, platina/100%, sem dano, sem morrer, restrição de equipamento/nível, pontuação, tempo e outros. “Sem glitches” é uma regra ou atributo, não obrigatoriamente uma categoria exclusiva. Um desafio tem categoria principal e pode ter tags.

O regulamento deve definir início e fim da execução; dificuldade do jogo; patches; hardware/emulação; mods; glitches; uso de saves; pausas; desconexões; DLCs; NG+; medição de tempo/pontos; condições visuais necessárias à prova. No-hit e no-damage precisam de definições explícitas: bloquear um golpe ou sofrer dano ambiental pode ter tratamentos diferentes.

Publicar uma nova versão não altera submissões anteriores. Alterações meramente editoriais também ficam registradas. Mudanças que alterem o objetivo materialmente geram um novo desafio, relacionado ao anterior. Desafios aposentados continuam consultáveis e deixam de aceitar novos envios. Propostas semelhantes são relacionadas a um desafio existente para evitar duplicação.

### Platina e desafios de longa duração

Uma platina pode exigir muitas sessões. Exigir uma única gravação contínua para todo tipo de desafio tornaria parte do catálogo impraticável. Proposta: cada regulamento declara uma modalidade de prova:

- **Execução contínua:** um vídeo sem cortes cobrindo integralmente o intervalo exigido.
- **Múltiplas sessões:** lista ordenada de vídeos contínuos, com checkpoints e cobertura exigida pelo regulamento.

No MVP, um print ou vídeo apenas do troféu final não comprova sozinho todos os requisitos. Para reduzir trabalho de revisão, lançar primeiro desafios de execução contínua e publicar desafios de platina somente quando houver política de prova viável. Essa escolha precisa de validação do idealizador.

## 7. Envio e ciclo de homologação

### Dados do envio

Desafio e versão; jogador; plataforma; edição/patch; data da execução; links de prova e sua ordem; início e fim de cada trecho; descrição; resultado mensurável quando aplicável; declaração de cumprimento das regras. Não há campo genérico que prometa comprovar automaticamente dano, equipamento ou tempo.

Aceitar URLs YouTube normalizadas por identificador de vídeo, com validação de formato. Vídeos públicos ou não listados precisam estar acessíveis ao revisor; vídeos privados não são provas válidas. A publicação informa que o link da evidência ficará visível na página do feito.

### Estados

`Rascunho → Enviada → Em revisão → Aprovada | Rejeitada | Aguardando complemento`.

`Aguardando complemento → Enviada` após uma nova revisão do envio. Antes da decisão, o autor pode cancelar. Rejeição pode receber recurso; aprovação pode receber contestação. Recursos e contestações possuem seus próprios registros e não apagam decisões anteriores.

1. Jogador escolhe desafio publicado, consulta as regras e monta o envio.
2. Sistema valida campos e impede outra submissão ativa do mesmo jogador para o mesmo desafio.
3. Ao enviar, registra um snapshot dos dados e da versão das regras.
4. Moderador autorizado assume o item; uma reserva expira após prazo configurável, permitindo reatribuição. Expiração não equivale a rejeição.
5. Moderador assiste à evidência e preenche uma lista dos critérios exigidos, com observações e timestamps relevantes.
6. Decide aprovar, rejeitar com motivo ou solicitar complemento com instruções objetivas.
7. Aprovação cria o feito, o carimbo e um evento de feed na mesma transação; a notificação é processada de forma durável.
8. Jogador recebe notificação e pode consultar o parecer público resumido.

Proposta para o beta: um moderador independente por submissão. Caso não exista revisor elegível, o item permanece na fila; não há aprovação automática por prazo ou por aplausos. Não se promete prazo de homologação antes de conhecer a capacidade da comunidade.

### Regras de integridade

- Regras e evidências usadas na decisão ficam identificadas permanentemente no histórico.
- Alterar prova após o envio exige complementação registrada e reinicia a avaliação. O revisor decide sobre uma revisão exata do envio.
- Concorrência otimista impede duas decisões simultâneas e decisão sobre dados desatualizados.
- Reenvio após rejeição cria nova submissão ligada à anterior.
- Um jogador tem no máximo um feito ativo por desafio no MVP. Melhorias podem substituir a submissão de referência, mantendo o histórico e sem gerar outro carimbo ou evento duplicado.
- Compartilhar o mesmo vídeo entre jogadores ou desafios gera sinal para revisão, não acusação automática de fraude.
- Logs registram autor, ação, instante e motivo; e-mails e notas de segurança não são públicos.

### Recurso, contestação e vídeo indisponível

Proposta: um recurso por decisão de rejeição, em até 14 dias. O jogador apresenta justificativa; outro moderador elegível ou administrador independente decide manter a rejeição ou devolver para nova revisão. Se não houver pessoa independente, aguarda-se uma designação.

Denúncias de feitos aprovados abrem contestação. Um feito pode ser suspenso preventivamente por motivo registrado e revogado após revisão independente; suspensos e revogados deixam as contagens públicas de feitos ativos. A página mantém o histórico e informa claramente a situação. Restauração exige decisão auditada.

Vídeo indisponível não prova fraude. A denúncia de indisponibilidade inicia uma verificação humana; confirmada a ausência da prova, o feito fica suspenso e o autor é notificado para restaurar o acesso. Proposta: após 30 dias sem restauração, revisão independente decide a revogação por falta de evidência. Uma nova URL exige nova avaliação. Verificação periódica automática pode ser adicionada depois.

## 8. Camada social e confiança

- Feed de Glória: feitos homologados ativos, inicialmente por ordem de aprovação; filtro por jogo, categoria e pessoas seguidas. Apenas conquistas aprovadas entram nessa lista.
- Debates: tópicos de texto associados a jogo ou desafio; respostas em uma camada. Discussão permanece separada da decisão formal de homologação.
- Aplausos: uma reação por pessoa e conteúdo, reversível. Não alteram o resultado da revisão.
- Comentários: permitidos em feitos e debates, com edição identificada, denúncia e remoção lógica.
- Perfil: nome público, identificador único, avatar, biografia, jogos de interesse, carimbos, feitos e publicações.
- Cofre: vitrine dos feitos ativos com filtros; páginas de feitos suspensos/revogados continuam acessíveis pelo histórico.
- Seguir e deixar de seguir são ações idempotentes. Bloqueio impede novas interações diretas e remove relações de seguimento; conteúdo público pode continuar visível sem login.
- Denúncias possuem motivo, alvo e estado; decisões de ocultação e suspensão exigem justificativa.

Evitar recompensa por quantidade bruta de revisões: isso incentiva aprovação apressada. Uma futura reputação de moderador deve considerar qualidade e reversões, com critérios públicos.

## 9. Telas e referência visual

Referências examinadas: os cinco `code.html` em `desing/`, o documento `precision_console_matte/DESIGN.md` e os prints de feed de glória e perfil com carimbos.

| Referência | Aproveitamento | Ajuste necessário |
| --- | --- | --- |
| `feed_de_gl_ria_console_moderno` | Cards de provas, filtros e destaque | Separar feed aprovado e fila privada de revisão; remover percentuais de votação como homologação |
| `feed_social_debates_console_moderno` | Discussão e descoberta social | Definir estados vazios, regras de publicação e denúncias |
| `desafios_conquistas_console_moderno` | Catálogo visual e categorias | Incluir versão de regras, requisitos e CTA de envio |
| `perfil_de_usu_rio_console_moderno` | Histórico, vitrine e navegação | Remover métricas fictícias e funções fora do MVP |
| `romstamp_perfil_com_selos_carimbos_homologados` | Caderneta de carimbos e identidade Romstamp | Priorizar esse conceito visual e explicar o significado de cada carimbo |

O mock usa nomes Romstamp e Glory Reign, métricas ilustrativas, links `#` e recursos imaginados de hardware. Padronizar a marca para Romstamp. “Oficial” significa aprovado pela comunidade Romstamp, sem sugerir vínculo com desenvolvedoras de jogos. Remover promessas de telemetria, auditoria USB e latência medida sem implementação real.

Direção proposta: fundo fosco escuro, superfícies em camadas, vermelho nas ações primárias, laranja para destaques e carimbos, Sora em títulos e Hanken Grotesk no corpo. O DESIGN.md tem divergências entre metadados e exemplos de cores, raios e grid; consolidar tokens antes de implementar os componentes. Não copiar o HTML gerado como arquitetura de produção.

### Mapa inicial de navegação

| Rota web | Conteúdo |
| --- | --- |
| `/` | Feed de Glória |
| `/jogos` e `/jogos/[slug]` | Catálogo e página do jogo |
| `/desafios` e `/desafios/[slug]` | Busca, regras e feitos do desafio |
| `/desafios/[slug]/enviar` | Formulário de prova |
| `/submissoes/[id]` e `/minhas-submissoes` | Acompanhamento; acesso conforme autoria ou permissão de revisão |
| `/feitos/[id]` | Prova homologada, carimbo, parecer e comentários |
| `/jogadores/[handle]` | Perfil e cofre |
| `/debates` e `/debates/[id]` | Fórum |
| `/notificacoes` e `/configuracoes` | Área pessoal |
| `/moderacao` | Fila, revisão, recursos e denúncias conforme escopo |
| `/admin` | Catálogo, usuários e permissões |

Autenticação e recuperação possuem telas próprias. Cada tela deve prever carregamento, erro, vazio, indisponibilidade de vídeo, sessão expirada e acesso negado. Mobile precisa permitir enviar e acompanhar provas; revisão deve continuar utilizável em tela pequena, mesmo que desktop seja mais confortável.

## 10. Arquitetura proposta

**Monólito modular no backend, frontend independente e um PostgreSQL.** O objetivo inicial é manter regras e transações simples, com limites de domínio claros.

```text
Navegador
   │ HTTPS, mesmo domínio
Proxy de entrada
   ├── páginas → Next.js / TypeScript / App Router
   └── /api/v1 → ASP.NET Core 10
                    ├── Identity e autorização
                    ├── módulos de negócio
                    ├── EF Core + Npgsql → PostgreSQL
                    └── worker/outbox → notificações e e-mail
Vídeo → reprodução no YouTube, carregada sob interação
Imagens → armazenamento de objetos compatível com S3
```

- Backend: .NET 10, ASP.NET Core Web API, EF Core e provedor Npgsql compatíveis; OpenAPI como contrato. Fixar versões exatas ao preparar o ambiente e verificar compatibilidade das dependências.
- Frontend: Next.js com TypeScript e App Router. Renderização de páginas públicas no servidor; componentes de cliente para formulários e interações. Tipos do cliente derivados do OpenAPI.
- Banco: PostgreSQL em versão suportada fixada na infraestrutura; migrações versionadas, relações e restrições para integridade. Busca inicial com recursos textuais do próprio banco.
- Autenticação: ASP.NET Core Identity e sessão em cookie HttpOnly, Secure e SameSite; backend é a autoridade da identidade. Proteção CSRF em mutações e verificação de origem. Evitar tokens de sessão em localStorage.
- Next.js não acessa o banco diretamente nem duplica regras de homologação. Chamadas no servidor encaminham sessão somente ao backend confiável. Respostas privadas não entram em cache compartilhado.
- Worker inicialmente no mesmo deploy da API, com outbox persistente, tentativas limitadas e tratamento de falhas; pode ser separado depois.
- Desenvolvimento: Docker Compose para PostgreSQL e serviço local de e-mail, configurações de exemplo e segredos fora do repositório.
- Redis, microsserviços e motor externo de busca ficam condicionados a necessidade medida.

Módulos: Identidade; Catálogo; Desafios; Submissões e Revisão; Feitos e Carimbos; Social; Moderação; Notificações. Separar domínio, casos de uso e infraestrutura sem exigir um projeto para cada entidade.

Estrutura sugerida, ainda não criada:

```text
apps/web/
src/Romstamp.Api/
src/Romstamp.Application/
src/Romstamp.Domain/
src/Romstamp.Infrastructure/
tests/
infra/
docs/
desing/                 # preservar referências existentes
```

## 11. Modelo de dados inicial

| Entidade | Dados centrais e relações |
| --- | --- |
| User / Profile | Identidade privada separada de handle, nome, bio e avatar públicos |
| Game / Platform / GamePlatform | Catálogo e combinações suportadas |
| ModeratorAssignment | Usuário, jogo, permissões, vigência e responsável pela nomeação |
| Challenge | Jogo, categoria, título, slug, dificuldade editorial e estado |
| ChallengeRuleVersion | Desafio, número, regras e política de prova imutáveis, autor e publicação |
| ChallengeProposal | Autor, proposta, estado editorial, parecer e desafio resultante |
| Submission | Autor, desafio, versão de regras, estado, contexto, resultado e versão de concorrência |
| SubmissionRevision / Evidence | Snapshot do envio, URLs normalizadas, ordem e intervalos |
| Review | Revisor, revisão avaliada, critérios, decisão e parecer |
| Achievement / Stamp | Jogador, desafio, submissão aprovada, código público e estado de validade |
| Appeal / Contestation | Decisão ou feito questionado, motivo, responsável e resolução |
| Follow / Block | Relações direcionais entre usuários |
| Topic / Comment / Applause | Conteúdo social, autoria e relações com o alvo |
| Report / ModerationAction | Alvo denunciado, motivo, decisão e medidas tomadas |
| Notification / OutboxMessage | Destinatário, evento, leitura e processamento durável |
| AuditEvent | Ator, entidade, ação, instante e motivo; sem credenciais ou tokens |

IDs internos UUID; datas em UTC; exibição conforme fuso do usuário. Tempos em milissegundos inteiros, pontuações com tipo numérico definido pelo desafio. Não usar texto formatado como valor de classificação.

Restrições essenciais: handle e código de carimbo únicos; versão de regra única por desafio/número; combinação única de aplauso e seguimento; impedir seguir a si mesmo; índice único parcial de submissão ativa por jogador/desafio e de feito ativo por jogador/desafio. Relacionar comentários e denúncias por FKs válidas, evitando alvos polimórficos sem integridade.

Índices iniciais: fila por jogo/estado/data; feeds por estado/data/ID; feitos por jogador/desafio; notificações por destinatário/leitura/data. Listagens usam paginação por cursor com desempate pelo ID. Conteúdo e provas têm limites de tamanho configurados e validados no servidor.

## 12. Contrato inicial da API

Prefixo `/api/v1`. Esta é uma proposta de recursos; schemas completos e exemplos serão definidos em OpenAPI na implementação.

| Recurso | Operações principais |
| --- | --- |
| `/auth` | Cadastro, confirmação, login/logout e recuperação |
| `/me` | Perfil privado, preferências e submissões do usuário |
| `/games` | Consulta pública; escrita administrativa |
| `/challenges` | Consulta, proposição, publicação e novas versões de regras |
| `/submissions` | Criar rascunho, editar, enviar, cancelar e complementar |
| `/moderation/submissions` | Consultar fila autorizada, assumir e registrar parecer |
| `/submissions/{id}/appeals` | Abrir recurso e consultar andamento autorizado |
| `/achievements` | Consulta pública, aplausos, comentários e contestações |
| `/profiles/{handle}` | Perfil público, feitos e ação de seguir |
| `/topics` | Debates e respostas |
| `/reports` | Registrar denúncia; consulta restrita à moderação |
| `/notifications` | Listar e marcar como lida |
| `/admin/moderator-assignments` | Gerenciar moderação por jogo |

Erros padronizados em Problem Details com código estável, validações por campo e ID de correlação. Estados HTTP distinguem validação, autenticação, autorização, ausência, conflito e limite de requisições. Ações críticas aceitam chave de idempotência persistida; reuso com outro payload retorna conflito. Toda autorização por proprietário, escopo de jogo e estado ocorre na API.

## 13. Qualidade, operação e segurança

- Cobrir o fluxo descobrir → enviar → revisar → receber carimbo com testes de ponta a ponta.
- Testar transições inválidas, autoaprovação, revisão fora do jogo, recurso pelo mesmo revisor, concorrência, duplicação e revogação com perda de contagem.
- Testes de integração usam PostgreSQL real; mocks não substituem verificação de restrições e transações.
- Logs estruturados com correlação e sem dados sensíveis; métricas de falhas, latência, fila e processamento da outbox.
- Alvo proposto: p95 inferior a 500 ms nas leituras comuns da API, excluindo serviços externos, em teste com 50 usuários simultâneos e base representativa. Validar o alvo no ambiente de beta.
- HTTPS, senhas tratadas pelo Identity, rate limits em login/envios/interações e autorização em todos os objetos privados. Exigir MFA para contas administrativas antes de disponibilizar o beta público.
- Conteúdo textual sem HTML arbitrário; sanitizar a renderização e usar política de conteúdo. Não buscar URLs arbitrárias no servidor. Integrações de vídeo usam host permitido, timeouts e proteção contra SSRF.
- Avatares: formatos raster permitidos, limite de tamanho, validação e recodificação; sem upload de SVG/HTML fornecido pelo usuário.
- Interface operável por teclado, foco visível, rótulos, contraste verificado e status comunicados além de cores; respeitar preferência de movimento reduzido.
- Coletar apenas dados necessários, separar informações privadas e públicas e preparar exportação e solicitação de exclusão. Política final de retenção, idade mínima e termos precisam ser definidos antes do lançamento público.
- Backup automatizado diário, retenção inicial proposta de 30 dias e teste de restauração antes do beta. Alvos iniciais: RPO 24 horas e RTO 8 horas, sujeitos à infraestrutura escolhida.
- CI: build e análise estática do backend/frontend, testes de domínio/integração e smoke tests principais. Migrações revisadas e executadas como etapa controlada, sem depender de inicialização simultânea de réplicas.

## 14. Backlog e critérios de aceite

| Etapa | Entregas | Critério de conclusão |
| --- | --- | --- |
| 0 — Fundação | Repositório, ambiente, CI, tokens visuais, contrato e decisões iniciais | Aplicações sobem localmente, banco recebe migração e CI executa |
| 1 — Identidade e catálogo | Conta, perfil, jogos, propostas e regras | Jogador consulta regulamento publicado; usuário sem permissão não publica regras |
| 2 — Núcleo de confiança | Envio, evidências, fila, revisão, carimbo e histórico | Dois usuários percorrem envio e revisão; autoaprovação e dupla concessão são impedidas |
| 3 — Rede e fórum | Feed, cofre, seguir, aplausos, comentários e debates | Feito aprovado aparece uma vez no feed e perfil; reações não alteram homologação |
| 4 — Governança e beta | Recursos, denúncias, revogação, bloqueio, MFA administrativo e operação | Recurso independente funciona; revogação remove contagem; restauração de backup é demonstrada |

Prioridade de desenvolvimento: completar o fluxo de confiança antes de ampliar a rede social. O MVP público inclui as cinco etapas; etapas intermediárias podem ser demonstradas com acesso restrito.

### Cenários mínimos de aceite

1. Dado um desafio publicado, visitante lê regras; ao enviar prova é direcionado à autenticação e mantém o contexto do desafio.
2. Uma URL inválida impede envio e informa o campo; submissão válida aparece apenas na fila do jogo correto.
3. Jogador não acessa submissão privada de outro jogador por adivinhar seu ID.
4. Moderador fora do escopo ou autor da prova recebe acesso negado ao tentar decidir.
5. Alteração de regulamento após envio mantém a submissão ligada à versão original.
6. Solicitação de complemento informa pendências e preserva evidências e pareceres anteriores.
7. Duas tentativas simultâneas de aprovação geram um único feito, carimbo e evento social.
8. Rejeição informa motivo e permite recurso dentro da política proposta.
9. Suspensão ou revogação é visível no feito e remove sua contribuição às contagens ativas.
10. Vídeo removido exibe indisponibilidade e permite encaminhar contestação, sem acusação automática de fraude.
11. Aplausos repetidos não inflam contagens e podem ser retirados.
12. Um usuário consegue percorrer o formulário de prova e consultar seu estado no celular e por teclado.

## 15. Decisões abertas e riscos

As propostas acima permitem planejar o trabalho; estes pontos merecem validação antes de implementar as respectivas funcionalidades:

| Decisão | Proposta inicial | Consequência |
| --- | --- | --- |
| Quem cria desafios? | Qualquer jogador propõe; moderador publica | Evita catálogo sem regras verificáveis |
| Quantos revisores? | Um independente no beta, com recurso independente | Menor fila, mas exige curadoria e auditoria |
| Platina no lançamento? | Somente com regulamento de múltiplas sessões viável | Evita exigir vídeos impraticáveis ou provas insuficientes |
| Regras de prova | Específicas por desafio; YouTube inicialmente | Depende de acesso contínuo ao provedor externo |
| Rankings | Sem ranking global no MVP | Não compara arbitrariamente desafios de naturezas diferentes |
| Emuladores, mods e versões | Declarados por regulamento | Evita equivalência implícita entre condições distintas |
| Jogos iniciais | Pequeno conjunto escolhido com revisores disponíveis | Capacidade de moderação limita expansão |
| Público inicial e idade mínima | Definir antes do beta público | Afeta onboarding, conteúdo e políticas |
| Hospedagem e orçamento | Containers, banco gerenciado e objetos; fornecedor a definir | Determina custo e capacidade operacional |
| Prazos de recurso e indisponibilidade | 14 e 30 dias, respectivamente | Precisam aparecer nos termos e na interface |

Riscos centrais: vídeos longos tornam a moderação cara; pouca gente revisando gera abandono; conluio reduz credibilidade; vídeo externo pode desaparecer; muitos desafios semelhantes fragmentam a comunidade. Respostas iniciais: lançamento curado, lista de critérios objetiva, escopo por jogo, independência de recursos, histórico auditável e nenhuma recompensa baseada somente em volume de aprovação.

### Seleção inicial de jogos — decisão do idealizador

Seleção registrada em 26/10/2026: Elden Ring, Sekiro, Grand Theft Auto V, Call of Duty (o título mais recente já lançado na data de definição do catálogo), Dark Souls, Dark Souls II e Dark Souls III. A expressão “série Souls” foi delimitada pelo idealizador aos três Dark Souls.

A seleção define os jogos pretendidos, mas ainda depende de moderadores disponíveis e regulamentos para ativar desafios. Edições, remasters, DLCs e patches aceitos serão definidos por desafio; não são automaticamente equivalentes. As demais propostas da seção 15 continuam pendentes de validação.

## 16. Referências técnicas

Fontes oficiais consultadas para orientar a arquitetura; versões exatas devem ser fixadas ao criar os projetos:

- [ASP.NET Core 10 — documentação](https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-10.0)
- [Next.js — App Router](https://nextjs.org/docs/app/getting-started)
- [PostgreSQL — busca textual](https://www.postgresql.org/docs/current/functions-textsearch.html)

Próximo marco proposto: validar as decisões de produto da seção 15 e executar a etapa 0, seguida de uma demonstração do fluxo completo de submissão e homologação.
