# Do MVP para a implementação real

## 1. Estado validado

O MVP comercial foi validado com teste automatizado de navegador no pipeline do GitHub Pages.

Fluxo coberto:

`Trilha → Trial 7 dias → Área do aluno → Agendamento → Reserva → Professor → Disponibilidade → Plano → Pagamento demonstrativo → Assinatura → Área do aluno`

Também foram validados:

- Violão, Ukulele e Linguagem Musical;
- Rítmica e Solfejo em abas;
- aula individual de 45 minutos;
- disponibilidade independente por professor;
- reserva vinculada ao professor;
- estado reservado preservado;
- assinatura demonstrativa;
- responsividade básica das páginas principais.

## 2. O que continua simulado

O MVP ainda não deve ser tratado como sistema de produção.

- autenticação real;
- banco de dados;
- controle real de sessão;
- cobrança e gateway;
- PIX real;
- integração real de calendário;
- Google Meet automático;
- armazenamento privado de materiais;
- envio transacional de e-mails/WhatsApp;
- controle de permissões;
- proteção de dados em produção.

## 3. Arquitetura recomendada para a próxima fase

### Núcleo

- frontend responsivo;
- backend/API;
- banco PostgreSQL;
- autenticação;
- armazenamento de arquivos;
- camada de pagamentos;
- agenda e notificações.

### Entidades mínimas

`users`

- id
- role: student | teacher | admin
- name
- email
- status
- created_at

`teacher_profiles`

- id
- user_id
- bio
- active

`tracks`

- id
- name: Violão | Ukulele | Linguagem Musical
- active

`track_modules`

- id
- track_id
- type: Rítmica | Solfejo | conteúdo do instrumento
- title
- order

`availability_slots`

- id
- teacher_id
- starts_at
- ends_at
- status: available | reserved | blocked

`bookings`

- id
- student_id
- teacher_id
- slot_id
- status: reserved | completed | cancelled
- created_at

`subscriptions`

- id
- student_id
- plan_id
- status
- starts_at
- ends_at

`plans`

- id
- name
- duration_months
- price
- live_lessons_per_month
- live_duration_minutes

`lessons`

- id
- booking_id
- title
- notes
- status
- completed_at

`skills`

- id
- track_id
- name

`lesson_skills`

- lesson_id
- skill_id
- level
- observation

`progress`

- id
- student_id
- skill_id
- level
- updated_at

`materials`

- id
- track_id
- title
- type
- url
- visibility

## 4. Regras de negócio prioritárias

### Trial

- duração de 7 dias corridos;
- data de início registrada no servidor;
- trilha escolhida vinculada ao aluno;
- progresso mantido durante o trial;
- conversão possível antes do término;
- encerramento automático ao final do período.

### Agendamento

- somente horários disponíveis podem ser reservados;
- uma reserva bloqueia o slot para os demais alunos;
- o slot fica vinculado a um professor;
- professor não pode apagar horário já reservado;
- cancelamento deve liberar o slot conforme regra comercial;
- duração inicial da aula: 45 minutos.

### Assinatura

- plano de 3 meses;
- 1 aula individual de 45 minutos por mês;
- acesso a vídeos e materiais durante a vigência;
- evolução vinculada às aulas e habilidades;
- status: pending | active | paused | cancelled | expired.

## 5. Ordem de implementação

### Fase A — Fundação técnica

1. escolher backend e banco;
2. criar ambiente de desenvolvimento;
3. modelar banco;
4. configurar autenticação;
5. definir papéis e permissões;
6. criar API mínima.

### Fase B — Usuário/Aluno

1. cadastro/login;
2. seleção de trilha;
3. trial real;
4. conteúdo e materiais;
5. progresso;
6. área do aluno.

### Fase C — Professor

1. perfil;
2. trilhas oferecidas;
3. disponibilidade;
4. agenda;
5. alunos;
6. registro da aula;
7. evolução.

### Fase D — Agendamento

1. calendário por professor;
2. criação de slots;
3. reserva transacional;
4. cancelamento/remarcação;
5. confirmação;
6. notificações.

### Fase E — Comercial

1. planos reais;
2. checkout;
3. pagamento;
4. assinatura;
5. controle de vigência;
6. acesso condicionado ao plano.

### Fase F — Conteúdo e operação

1. biblioteca de vídeos;
2. materiais;
3. trilhas por instrumento;
4. Rítmica;
5. Solfejo;
6. acompanhamento por habilidades.

## 6. Critério para iniciar desenvolvimento real

O MVP está suficientemente fechado para iniciar a implementação técnica sem continuar adicionando funcionalidades aleatórias.

A partir deste ponto, novas funcionalidades devem responder a uma necessidade de negócio, pedagógica ou operacional identificada nos testes.

## 7. Próxima decisão técnica

Antes de escrever o backend definitivo, escolher a stack de produção. A escolha deve considerar:

- custo inicial;
- facilidade de manutenção;
- autenticação;
- PostgreSQL;
- storage;
- segurança;
- pagamentos;
- capacidade de crescer para múltiplos professores;
- facilidade de evolução para PWA/app.

O protótipo continua como referência de UX e fluxo durante a implementação.
