# Auditoria UX/IX — Protótipo APP Música

## Objetivo

Registrar a próxima etapa de validação do protótipo e as melhorias aplicadas após a revisão da jornada principal.

## Jornada auditada

**Início → Sobre → Planos → escolha do plano → pagamento simulado → Contato → Área do aluno → Agenda → Aula → Evolução → Professor/ADM**

## Critérios

### 1. Clareza

Cada área apresenta um título, contexto e ação principal. A Área do aluno destaca a próxima aula e o próximo passo.

### 2. Continuidade

A navegação conecta as principais etapas sem exigir backend: aluno → agenda → aula → evolução. Planos e contato permanecem acessíveis pela navegação principal.

### 3. Contexto

O protótipo mantém o aluno fictício Marina, seu instrumento principal (Violão) e a aula de referência (14:00) como contexto consistente.

### 4. Feedback

Ações simuladas apresentam mensagens perceptíveis: início de tarefa, registro/conclusão de aula, pagamento, contato e seleção de instrumento.

### 5. Hierarquia visual

A interface prioriza próxima aula, ação principal, habilidades e histórico. Na Área do aluno, uma nova tarefa visual foi posicionada abaixo dos objetivos e materiais recentes.

### 6. Carga cognitiva

A experiência evita excesso de controles. A evolução abre por instrumento principal e mantém o filtro **Últimas 3 aulas** como visão inicial.

### 7. Consistência

Cores, cartões, botões, estados e linguagem visual seguem o mesmo sistema em área pública, aluno e professor/ADM.

## Melhoria aplicada nesta etapa

Foi adicionada uma **tarefa visual de hoje** na Área do aluno:

- Tema: **Troca de acordes · G → C**.
- Ritmo de referência: **60 BPM**.
- Habilidades: troca de acordes, ritmo e repertório.
- Material visual com diagramas dos acordes e sequência de prática.
- Botão **Começar tarefa** com feedback simulado.
- Layout responsivo para desktop e telas menores.

Arquivo do material:

`assets/aula-violao-troca-acordes.svg`

## Princípio de validação

O material audiovisual/visual deve ser tratado inicialmente como recurso de validação de experiência. Não foram adicionados backend, autenticação, armazenamento real, gateway de pagamento ou gestão real de arquivos.

## Próximo passo recomendado

Realizar teste manual da jornada completa, observando especialmente:

1. Se o aluno percebe a tarefa como o próximo passo natural após abrir a Área do aluno.
2. Se entende o objetivo da prática sem explicação externa.
3. Se o material visual ajuda a executar a troca G → C.
4. Se o feedback de início da tarefa é suficiente.
5. Se a ligação entre tarefa, Aula e Evolução continua compreensível.

Depois dessa validação, pode-se decidir se vale produzir um **vídeo real de demonstração** e ampliar a biblioteca de materiais.

## Commits relacionados

- `0788408edb5c082b7e7479a8c1eb9017c1444249` — inserir tarefa visual na Área do aluno.
- `42d2195270d6d3b2a5255e59d839a155b2f5bbef` — adicionar material visual da aula de violão.
