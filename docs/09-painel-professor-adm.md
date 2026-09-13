# Painel Professor / ADM — Especificação inicial

## Objetivo

Definir e validar a experiência do Professor / ADM antes de transformar o protótipo em funcionalidades reais.

O painel deve ajudar o educador a responder rapidamente:

1. Quem precisa da minha atenção?
2. O que acontece hoje e nos próximos dias?
3. Qual é a situação de cada aluno?
4. O que preciso preparar ou registrar?

## Jornada principal do protótipo

**Dashboard → Alunos → Perfil do aluno**

Próximos módulos previstos:

**Agenda → Aula → Evolução → Materiais**

## 1. Dashboard — implementado

A primeira tela do Professor / ADM funciona como ponto de orientação para decisões.

### Informações prioritárias

- alunos ativos;
- aulas da semana;
- aulas realizadas;
- taxa de presença;
- próximas aulas do dia;
- distribuição de alunos por instrumento;
- lista resumida de alunos.

### Interações implementadas

- acesso à agenda simulada;
- filtro de alunos por instrumento;
- abertura do perfil individual;
- acesso a ações de materiais e indicadores com feedback.

### Princípio

O Dashboard não tenta mostrar tudo. Ele apresenta primeiro o que ajuda o educador a decidir o que fazer em seguida.

## 2. Alunos — implementado no Dashboard

Lista de alunos com acesso rápido ao contexto individual.

### Informações iniciais

- nome fictício;
- instrumento;
- nível/trilha;
- status;
- próxima aula;
- indicação de atenção quando aplicável.

### Ação principal

Clique no aluno para abrir o perfil individual.

## 3. Perfil do aluno — implementado

O perfil concentra o contexto necessário para acompanhamento sem exigir navegação por várias telas.

### Informações

- identificação;
- instrumento e nível;
- status de acompanhamento;
- progresso da trilha;
- objetivos;
- próximas ações;
- histórico recente;
- observações do professor.

### Interações

- registrar contato;
- registrar nova observação;
- retornar ao Dashboard.

Todas as ações são simuladas e produzem feedback visível.

## 4. Agenda — próximo módulo

Visualização das aulas e compromissos relacionados aos alunos.

### Necessidades

- identificar horários ocupados e disponíveis;
- visualizar aluno e aula;
- acessar rapidamente detalhes da aula;
- evitar excesso de informação visual.

## 5. Aula — próximo módulo

Espaço de apoio para preparação e registro da aula.

### Estrutura inicial

- aluno;
- objetivo da aula;
- conteúdo planejado;
- observações;
- atividades/material utilizado;
- próximos passos.

O registro deve ser simples o suficiente para não competir com a atividade pedagógica.

## 6. Evolução — módulo posterior

Acompanhamento longitudinal do aluno.

### Possíveis informações

- histórico de aulas;
- objetivos;
- conteúdos trabalhados;
- observações do educador;
- progresso percebido;
- próximos objetivos.

Evitar transformar a primeira versão em um sistema complexo de avaliação.

## 7. Materiais — módulo posterior

Organização dos conteúdos utilizados nas aulas.

### Estrutura inicial

- materiais recentes;
- materiais por instrumento;
- materiais compartilhados;
- referência para a próxima aula.

## Critérios UX

- O educador deve saber o que precisa fazer ao abrir o painel.
- Informações importantes devem aparecer antes de detalhes secundários.
- O contexto do aluno deve permanecer claro ao navegar para ações relacionadas.
- O registro de aula deve exigir poucos passos.
- A interface deve reduzir carga cognitiva e repetição.

## Critérios IX

- Toda ação deve produzir feedback perceptível.
- Alterações simuladas devem indicar claramente o resultado.
- Estados vazios devem explicar o que fazer em seguida.
- Ações simuladas devem ser identificadas como tal.
- Nenhuma funcionalidade operacional real deve ser presumida apenas porque existe uma tela no protótipo.

## Regra de produto

Antes de desenvolver banco de dados, autenticação, automações ou integrações, validar se o painel ajuda efetivamente o Professor / ADM a organizar sua rotina e acompanhar seus alunos.
