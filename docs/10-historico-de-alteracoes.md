# Histórico de alterações do protótipo

## Objetivo

Registrar a evolução do protótipo navegável do APP Música, mantendo rastreabilidade das decisões de produto, UX/IX e funcionalidades simuladas.

> O projeto permanece em fase de validação. As funcionalidades descritas como pagamento, cadastro, contato e ações de gestão são simulações e não realizam operações reais.

## 1. Estrutura inicial do produto

O protótipo foi concebido como uma experiência digital de educação musical com duas perspectivas principais:

- **Usuário / Aluno** — próxima aula, agenda, materiais, plano e evolução.
- **Professor / ADM** — alunos, agenda, acompanhamento, aulas, materiais e indicadores.

A estratégia adotada foi validar a experiência antes de investir em backend, autenticação, banco de dados ou integrações.

## 2. Simplificação da navegação

A experiência foi reorganizada para concentrar o produto em duas entradas principais:

- Área do aluno;
- Área do professor / ADM.

Essa decisão reduziu a complexidade inicial e estabeleceu uma arquitetura de navegação mais fácil de testar.

## 3. Agenda

Foi implementada uma agenda navegável com três visualizações:

- **Semanal** — visualização principal;
- **Diário** — abre automaticamente no dia atual;
- **Mensal** — visão geral do período.

Também foram incluídos:

- navegação anterior/próximo;
- botão **Hoje**;
- destaque visual do dia atual;
- destaque da próxima aula do dia;
- prioridade para aula em andamento;
- mensagem quando não existem mais aulas no dia;
- botão **Abrir aula**;
- abertura do contexto da aula ao clicar em um evento;
- filtros por instrumento e status;
- comportamento responsivo.

## 4. Aula

A tela de aula passou a concentrar o contexto necessário para o registro:

- aluno;
- instrumento;
- horário;
- objetivo;
- habilidades trabalhadas;
- conteúdo planejado;
- registro do professor;
- materiais;
- ações de salvar registro e marcar aula como realizada.

As ações produzem feedback visual e são identificadas como simulações.

## 5. Evolução

Foi criada a visão de evolução do aluno priorizando o **instrumento principal**.

Para a experiência fictícia de Marina, o instrumento principal é o **Violão**.

A evolução passou a apresentar:

- visão por habilidades;
- filtro **Últimas 3 aulas**, ativado por padrão;
- filtro para todas as habilidades;
- percentual de desenvolvimento;
- nível da habilidade;
- quantidade de aulas recentes relacionadas;
- último trabalho realizado;
- próximos objetivos;
- histórico das aulas.

Habilidades simuladas:

- Troca de acordes;
- Ritmo;
- Repertório;
- Técnica;
- Leitura musical;
- Percepção musical.

## 6. Conexão Aula → Evolução

Foi estabelecida uma relação conceitual entre o registro da aula e a evolução:

**Agenda → Aula → Registrar/Concluir aula → Habilidades → Evolução → Últimas 3 aulas → Histórico**

Ao registrar ou concluir uma aula, o protótipo apresenta feedback indicando que as habilidades e o histórico foram atualizados.

O histórico também permite abrir novamente o contexto da aula.

## 7. Início

A navegação da página inicial foi tornada funcional.

A página apresenta:

- proposta de valor;
- escolha de instrumento;
- entrada para aluno;
- entrada para professor;
- demonstração da experiência;
- recursos principais;
- indicadores resumidos.

A escolha de um instrumento direciona o usuário para a experiência do aluno e apresenta confirmação visual da seleção.

## 8. Sobre

O menu **Sobre** passou a participar da navegação pública do protótipo, utilizando a própria experiência institucional/conceitual do produto sem introduzir dados pessoais reais.

## 9. Planos

Foi adicionada uma experiência comercial simulada com três planos:

| Plano | Valor mensal | Posicionamento |
|---|---:|---|
| Essencial | R$ 89/mês | Entrada |
| Completo | R$ 149/mês | Mais escolhido |
| Intensivo | R$ 229/mês | Experiência ampliada |

O usuário pode selecionar um plano e avançar para uma etapa de pagamento simulada.

### Formas de pagamento simuladas

- PIX;
- cartão;
- carteiras digitais.

O fluxo apresenta confirmação visual, mas não processa cobrança real, não coleta dados financeiros reais e não possui integração com gateway de pagamento.

## 10. Contato

Foi criada uma área de contato com dados totalmente fictícios/sanitizados para demonstração:

- telefone;
- e-mail;
- localização;
- formulário de contato;
- redes sociais.

As interações de envio são simuladas.

## 11. Privacidade do protótipo

O projeto público deve continuar utilizando somente dados fictícios ou sanitizados.

Não devem ser incluídos no site ou no repositório:

- nomes reais de colaboradores;
- contatos pessoais reais;
- dados financeiros reais;
- credenciais;
- informações reais de alunos;
- dados de pagamento.

## 12. Estado atual

O protótipo atualmente representa uma jornada mais completa:

**Início → instrumento → Área do aluno → Agenda → Aula → Evolução**

E também uma jornada comercial simulada:

**Início → Planos → Escolha do plano → Pagamento → Confirmação**

E uma jornada de contato:

**Início → Contato → Formulário → Confirmação**

Além disso, permanece disponível a experiência do professor / ADM.

## 13. Critério de produto

A próxima evolução deve priorizar validação da experiência existente antes de adicionar infraestrutura real.

A ordem recomendada continua sendo:

1. validar navegação;
2. validar clareza das telas;
3. validar jornada comercial;
4. validar jornada aluno;
5. validar jornada professor;
6. identificar pontos de fricção;
7. somente depois transformar funcionalidades simuladas em funcionalidades reais.

## 14. Registro de commits relevantes

- `4cf5a68679e4be90edca49d151388854edca0b17` — refatoração para usuário/aluno e professor/ADM.
- `5f472a9a62c34f4125186c57226cc94278be47ac` — agenda semanal, diária, mensal e acesso direto à aula.
- `59f1b7ebcf01cc347938c4eb446289bf2d2f2d9e` — conexão entre aula e evolução por habilidades.
- `06026b063d54068c06798c5ec75a03df320d027d` — navegação funcional de início, planos e contato.

## 15. Próxima etapa recomendada

Executar uma rodada estruturada de teste em desktop cobrindo:

**Início → Sobre → Planos → seleção de plano → pagamento simulado → Contato → Área do aluno → Agenda → Aula → Evolução**

O objetivo é encontrar problemas de UX/IX e inconsistências antes de ampliar o protótipo com novas funcionalidades.
