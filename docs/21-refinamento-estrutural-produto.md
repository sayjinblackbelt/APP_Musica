# Refinamento estrutural do produto — v1

## Objetivo

Transformar o protótipo validado em uma base preparada para implementação real sem reescrever a experiência já validada.

O princípio desta fase é separar **experiência**, **domínio**, **persistência** e **integrações**.

## 1. O que já está validado

- jornada comercial;
- seleção de trilha;
- trial de 7 dias;
- área do aluno;
- área do professor;
- disponibilidade independente por professor;
- reserva de aula de 45 minutos;
- plano de 3 meses;
- assinatura demonstrativa;
- Rítmica e Solfejo;
- responsividade básica;
- smoke test automatizado.

## 2. Fronteira atual

### Interface

As páginas HTML/CSS/JS atuais continuam sendo a referência visual e funcional do MVP.

### Domínio

As regras de negócio passam a ser tratadas como contrato independente da interface. O arquivo `data/domain-model.json` registra entidades, relacionamentos e invariantes.

### Configuração

`assets/app-config.js` concentra constantes que não devem ficar espalhadas pela aplicação:

- duração da aula;
- duração do trial;
- duração do plano;
- aulas ao vivo por mês;
- papéis;
- trilhas;
- chaves temporárias do MVP;
- estados do domínio.

### Persistência

`localStorage` permanece exclusivamente como mecanismo de demonstração. Na implementação real, o servidor será a fonte de verdade.

## 3. Arquitetura alvo

```text
Interface
  ↓
Application / Use Cases
  ↓
Domain Rules
  ↓
Repositories
  ↓
PostgreSQL / Storage / External Services
```

Integrações externas ficam atrás de adaptadores:

```text
PaymentsAdapter
CalendarAdapter
Video/StorageAdapter
NotificationAdapter
```

Assim, trocar o provedor não exige alterar a regra de negócio.

## 4. Casos de uso prioritários

### Aluno

1. criar conta;
2. escolher trilha;
3. iniciar trial;
4. acessar conteúdo autorizado;
5. visualizar progresso;
6. consultar disponibilidade;
7. reservar aula;
8. cancelar/remarcar conforme regra comercial;
9. contratar plano;
10. acompanhar vigência da assinatura.

### Professor

1. autenticar;
2. configurar perfil;
3. definir trilhas oferecidas;
4. publicar disponibilidade;
5. visualizar agenda;
6. visualizar alunos vinculados;
7. registrar aula;
8. registrar evolução por habilidade.

### Administração

1. gerenciar professores;
2. gerenciar alunos;
3. gerenciar trilhas e módulos;
4. acompanhar agenda;
5. acompanhar trials e assinaturas;
6. gerenciar planos;
7. consultar indicadores.

## 5. Regras críticas que devem sair do frontend

- autorização por papel;
- início e expiração do trial;
- validade da assinatura;
- disponibilidade real;
- concorrência de reservas;
- cancelamento/remarcação;
- acesso a materiais privados;
- registro de evolução;
- qualquer operação financeira.

## 6. Próxima implementação técnica

A primeira implementação real deve ser pequena e vertical:

**Autenticação → Perfil → Banco → Trial → Área do aluno**

Somente depois de esse fluxo estar estável:

**Professor → Disponibilidade → Agendamento**

Depois:

**Planos → Pagamento → Assinatura**

E por último, ampliar conteúdo, notificações, calendário e automações.

## 7. Critério para sair do MVP estático

A migração começa quando houver:

- banco definido;
- autenticação definida;
- política de papéis definida;
- modelo de dados aprovado;
- estratégia de armazenamento definida;
- estratégia de pagamento definida;
- ambiente de desenvolvimento separado do GitHub Pages;
- migração planejada para não perder os fluxos já validados.

## 8. Decisão de arquitetura ainda aberta

Este documento **não fixa fornecedor**. A próxima decisão técnica deve comparar opções de backend/BaaS considerando:

- custo inicial;
- autenticação;
- PostgreSQL;
- storage;
- segurança/RLS;
- facilidade de desenvolvimento;
- manutenção;
- possibilidade de crescimento para múltiplos professores;
- integração com pagamentos e agenda.

Até essa decisão, o MVP continua estático e sem cobrança real.
