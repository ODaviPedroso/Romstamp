# Gestão do Romstamp

Estado: documentação, mockups e modelos publicados na branch `main`. Cadastro das issues e configuração do quadro pendentes de acesso de escrita às ferramentas de gestão do GitHub.

Repositório: [ODaviPedroso/Romstamp](https://github.com/ODaviPedroso/Romstamp). Visibilidade pública autorizada pelo idealizador. A pasta local acompanha `origin/main`.

## Fluxo

Quadro proposto: Backlog → Pronto para desenvolver → Em desenvolvimento → Em revisão → Concluído.

- Backlog: ideia ou tarefa ainda não refinada.
- Pronto: objetivo, escopo, critérios e dependências definidos; decisões necessárias resolvidas.
- Em desenvolvimento: implementação em uma branch vinculada à issue.
- Em revisão: pull request com resultado e evidências de validação.
- Concluído: critérios cumpridos e alterações integradas à main.

Limite inicial: uma tarefa de implementação em andamento por desenvolvedor. Prioridade P0 significa bloqueio do marco; P1 entrega necessária; P2 melhoria. Sem prazos artificiais antes de aferir capacidade.

Branches: `feat/<numero>-<descricao>`, `fix/<numero>-<descricao>` e `docs/<numero>-<descricao>`. Main deve permanecer utilizável; PRs pequenos ligados às issues. Ativar checks obrigatórios quando a CI existir. Em desenvolvimento individual, não exigir aprovação de um segundo mantenedor inexistente.

Labels propostas: `tipo:funcionalidade`, `tipo:tecnico`, `tipo:documentacao`, `tipo:bug`, `tipo:decisao`, `prioridade:P0`, `prioridade:P1`, `prioridade:P2`, `area:backend`, `area:frontend`, `area:infra`, `area:produto`.

## Marcos e backlog inicial

Cada linha deve virar uma issue no GitHub; estes títulos ainda não representam issues publicadas. A integração retornou `403 Resource not accessible by integration` ao tentar cadastrá-las. Nenhuma issue foi criada nessa tentativa.

| ID local | Marco | Tarefa | Aceite principal | Dependência |
| --- | --- | --- | --- | --- |
| G01 | 0 — Fundação | Validar decisões do beta | Registrar autoria/publicação de desafios, número de revisores, jogos iniciais e política de platinas | — |
| G02 | 0 — Fundação | Criar solução .NET 10 e API | Build passa; endpoint de saúde responde; configurações não expõem segredos | — |
| G03 | 0 — Fundação | Criar aplicação Next.js com TypeScript | Build passa; shell responsivo apresenta navegação inicial | — |
| G04 | 0 — Fundação | Preparar PostgreSQL e ambiente local | Compose sobe banco; API conecta; instruções reproduzíveis no README | G02 |
| G05 | 0 — Fundação | Configurar CI e contrato OpenAPI | PR executa builds e verificações existentes; API publica contrato utilizável pelo frontend | G02, G03, G04 |
| G06 | 0 — Fundação | Consolidar tokens e componentes básicos | Cores, fontes, foco, botões, campos e cards consistentes; diferenças dos mockups documentadas | G03 |
| G07 | 1 — Identidade e catálogo | Implementar conta e sessão | Cadastro, confirmação, login/logout e recuperação funcionam; mutações protegidas contra CSRF | G04 |
| G08 | 1 — Identidade e catálogo | Implementar perfil público | Handle único, edição pelo proprietário e separação dos dados privados | G07 |
| G09 | 1 — Identidade e catálogo | Implementar catálogo e moderação por jogo | Consulta pública; escrita administrativa; atribuição por jogo controlada | G01, G07 |
| G10 | 1 — Identidade e catálogo | Implementar propostas e regras versionadas | Jogador propõe; autorizado publica; versão publicada permanece imutável | G09 |
| G11 | 2 — Núcleo de confiança | Implementar envio de prova | Valida URLs, contexto e versão; impede submissão ativa duplicada e acesso privado indevido | G10 |
| G12 | 2 — Núcleo de confiança | Implementar fila, parecer e complementação | Escopo por jogo, impedimento de autoaprovação e proteção contra decisão concorrente | G11 |
| G13 | 2 — Núcleo de confiança | Conceder carimbo e notificar decisão | Uma aprovação gera um feito e um evento durável; repetição não duplica concessão | G12 |
| G14 | 3 — Rede e fórum | Implementar feed e cofre | Apenas feitos ativos aparecem; paginação estável e filtros por jogo/categoria | G13 |
| G15 | 3 — Rede e fórum | Implementar seguir, aplausos e comentários | Operações autorizadas, reversíveis e sem contagens duplicadas | G08, G14 |
| G16 | 3 — Rede e fórum | Implementar debates e respostas | Criar e consultar tópicos por jogo/desafio; autoria e limites validados | G10, G15 |
| G17 | 4 — Governança e beta | Implementar recursos, contestação e revogação | Revisor independente decide; histórico preservado e contagens atualizadas | G12, G13 |
| G18 | 4 — Governança e beta | Implementar denúncias, bloqueio e suspensão | Ações respeitam escopo e registram justificativa | G15, G16 |
| G19 | 4 — Governança e beta | Preparar segurança e operação do beta | MFA administrativo, limites, logs, backup restaurado e fluxo completo verificado | G17, G18 |

O marco 0 termina com frontend e API executando, PostgreSQL conectado, contrato disponível e CI passando. O marco 2 deve permitir demonstrar o ciclo completo entre jogador e moderador antes de ampliar as interações sociais.

## Configuração pendente no GitHub

- [x] Publicar especificação, referências visuais e modelos de issues/PRs.
- [x] Vincular a pasta local ao remoto e acompanhar `main`.
- [ ] Disponibilizar acesso de escrita em issues na integração GitHub.
- [ ] Criar as 19 issues acima e relacionar suas dependências pelos números reais.
- [ ] Criar os cinco milestones correspondentes às etapas 0 a 4.
- [ ] Criar o Project com as cinco colunas propostas e vincular as issues.
- [ ] Criar e aplicar as labels propostas.
- [ ] Configurar checks obrigatórios após existir CI funcional.

As ferramentas da integração disponíveis nesta configuração não oferecem criação de Projects, milestones ou labels. Essas ações exigem a interface do GitHub ou outro cliente autenticado com as permissões adequadas. Não há CI ou código de aplicação implementado neste momento.

## Rotina de acompanhamento

No início de cada entrega, selecionar a próxima issue desbloqueada. Ao terminar, registrar resultado, validação e limitações no PR. Novas regras de produto atualizam a especificação; decisões técnicas relevantes ficam documentadas em `docs/decisoes/` quando surgirem. Revisar prioridades ao concluir cada marco.
