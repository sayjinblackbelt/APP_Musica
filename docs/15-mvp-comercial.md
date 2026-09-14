# MVP Comercial — APP Música

## Objetivo

Validar, com custo inicial zero, uma plataforma online de ensino musical que possa atender diferentes professores e alunos.

## Núcleo inicial

- Violão
- Ukulele
- Linguagem Musical
  - Rítmica
  - Solfejo

## Modelo comercial

Plano de 3 meses, com:

- aulas em vídeo;
- materiais de apoio;
- trilha de aprendizagem;
- 1 aula individual ao vivo por mês;
- cada encontro ao vivo com 45 minutos;
- acompanhamento da evolução.

A referência econômica do professor pode ser uma hora/aula, mas o produto comercial é o plano de 3 meses.

## Duas experiências

### Aluno

1. Descobre o curso.
2. Escolhe instrumento/disciplina.
3. Conhece o plano.
4. Entra na área do aluno.
5. Acessa vídeos e materiais.
6. Consulta a agenda.
7. Escolhe um horário disponibilizado por um professor.
8. Confirma o agendamento.
9. Participa da aula ao vivo de 45 minutos.
10. Consulta registro e evolução.

### Professor

1. Cria perfil.
2. Define instrumentos/disciplinas oferecidos.
3. Define sua disponibilidade semanal.
4. Visualiza horários ocupados e livres.
5. Recebe agendamentos.
6. Consulta alunos.
7. Realiza a aula.
8. Registra conteúdo, habilidades e observações.
9. Disponibiliza materiais.
10. Acompanha a evolução dos alunos.

## Disponibilidade e agendamento

A disponibilidade pertence ao professor. Um horário livre pode ser selecionado pelo aluno; depois da reserva, passa a ocupado.

Estados do horário:

`Disponível → Reservado → Aula realizada`

O MVP começa com dados simulados e interface funcional no navegador. A integração com Google Calendar/Meet pode ser adicionada depois.

## Stack de validação

- GitHub Pages
- HTML/CSS/JavaScript
- Google Forms
- Google Sheets
- Google Calendar
- Google Meet
- Google Drive
- YouTube não listado
- Apps Script
- WhatsApp para atendimento humano

Não há necessidade de backend, servidor próprio, gateway de pagamento ou aplicativo nativo para validar o conceito.

## Critério de avanço

Cada etapa deve ser testada antes da próxima. O objetivo é preservar o que já funciona e reduzir risco técnico e financeiro.

## Roadmap

1. Arquitetura comercial.
2. Área do aluno.
3. Área do professor.
4. Conexão disponibilidade/agendamento.
5. Conteúdo e trilhas.
6. Modelo comercial.
7. Integrações gratuitas.
8. Teste com usuários reais.

## Estado do MVP

O protótipo anterior permanece como base de UX. A evolução comercial deve separar visualmente as experiências de aluno e professor e, depois, implementar o fluxo de disponibilidade/agendamento entre elas.
