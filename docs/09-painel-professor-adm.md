# Painel Professor / ADM — Especificação inicial

## Objetivo

Definir a experiência do Professor / ADM antes de transformar o protótipo em funcionalidades reais.

O painel deve ajudar o educador a responder rapidamente:

1. Quem precisa da minha atenção?
2. O que acontece hoje e nos próximos dias?
3. Qual é a situação de cada aluno?
4. O que preciso preparar ou registrar?

## Jornada principal

**Dashboard → Alunos → Agenda → Aula → Evolução → Materiais**

## 1. Dashboard

Visão rápida do estado atual da operação.

### Informações prioritárias

- aulas de hoje;
- próximas aulas;
- alunos que precisam de acompanhamento;
- pendências recentes;
- indicadores simples da turma.

### Princípio

O Dashboard não deve tentar mostrar tudo. Deve funcionar como ponto de orientação para as próximas decisões do educador.

## 2. Alunos

Lista de alunos com acesso rápido ao contexto individual.

### Informações iniciais

- nome fictício;
- instrumento/curso;
- status;
- próxima aula;
- último acompanhamento;
- indicação de atenção quando aplicável.

### Ação principal

Abrir o perfil/contexto do aluno.

## 3. Agenda

Visualização das aulas e compromissos relacionados aos alunos.

### Necessidades

- identificar horários ocupados e disponíveis;
- visualizar aluno e serviço/aula;
- acessar rapidamente os detalhes da aula;
- evitar excesso de informação visual.

## 4. Aula

Espaço de apoio para a preparação e o registro da aula.

### Estrutura inicial

- aluno;
- objetivo da aula;
- conteúdo planejado;
- observações;
- atividades/material utilizado;
- próximos passos.

O registro deve ser simples o suficiente para não competir com a atividade pedagógica.

## 5. Evolução

Acompanhamento longitudinal do aluno.

### Possíveis informações

- histórico de aulas;
- objetivos;
- conteúdos trabalhados;
- observações do educador;
- progresso percebido;
- próximos objetivos.

Evitar transformar a primeira versão em um sistema complexo de avaliação. O objetivo inicial é validar o acompanhamento pedagógico.

## 6. Materiais

Organização dos conteúdos utilizados nas aulas.

### Estrutura inicial

- materiais recentes;
- materiais por curso/instrumento;
- materiais compartilhados com alunos;
- referência para a próxima aula.

## Prioridade para o protótipo

A primeira versão do Ciclo B deve validar somente:

**Dashboard → Alunos → detalhe do aluno → Agenda → Aula**

Evolução e Materiais podem aparecer como áreas complementares, sem exigir implementação profunda nesta etapa.

## Critérios UX

- O educador deve saber o que precisa fazer ao abrir o painel.
- Informações importantes devem aparecer antes de detalhes secundários.
- O contexto do aluno deve permanecer visível ao navegar para ações relacionadas.
- O registro de aula deve exigir poucos passos.
- A interface deve reduzir carga cognitiva e repetição.

## Critérios IX

- Toda ação deve produzir feedback perceptível.
- Alterações de dados devem indicar claramente sucesso ou erro.
- Estados vazios devem explicar o que fazer em seguida.
- Ações simuladas devem ser identificadas como tal.
- Nenhuma funcionalidade operacional real deve ser presumida apenas porque existe uma tela no protótipo.

## Regra de produto

Antes de desenvolver banco de dados, autenticação, automações ou integrações, validar se o painel ajuda efetivamente o Professor / ADM a organizar sua rotina e acompanhar seus alunos.
