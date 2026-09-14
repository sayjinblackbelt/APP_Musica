# Gestão da Plataforma — MVP

## Objetivo

Consolidar a visão administrativa da plataforma de ensino musical, mantendo o MVP sem backend e sem custos.

## Núcleos

- Professores
- Alunos
- Trilhas
- Agenda
- Trial e assinaturas
- Indicadores

## Modelo demonstrativo

### Professores

Cada professor possui um identificador, nome demonstrativo, instrumentos/trilhas oferecidos e disponibilidade própria.

### Alunos

Cada aluno possui trilha principal, estado do trial/assinatura, professor vinculado e próxima aula.

### Trilhas

- Violão
- Ukulele
- Linguagem Musical — Rítmica
- Linguagem Musical — Solfejo

### Agenda

Fluxo de horário:

`Disponível → Reservado → Aula realizada`

O horário reservado fica associado ao professor e ao aluno.

## Indicadores do MVP

- Professores ativos
- Alunos ativos
- Trials ativos
- Assinaturas demonstrativas
- Aulas agendadas
- Taxa de conversão demonstrativa
- Distribuição por trilha

## Regra de arquitetura

O MVP usa dados fictícios/localStorage apenas para validar experiência. A futura versão poderá substituir a camada local por autenticação, banco de dados e regras de acesso sem redesenhar as jornadas principais.

## Critério de conclusão

A gestão é considerada pronta quando o administrador consegue visualizar professores, alunos, trilhas, agenda e indicadores em uma única experiência, e quando as reservas respeitam o professor e o horário escolhidos.
