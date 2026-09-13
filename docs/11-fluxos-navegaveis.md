# Fluxos navegáveis do protótipo

## Objetivo

Mapa funcional das jornadas atualmente disponíveis no protótipo do APP Música.

## Navegação pública

### Início

**Início → instrumento → Área do aluno**

**Início → Sou aluno → Área do aluno**

**Início → Sou professor → Professor / ADM**

**Início → Ver experiência → Agenda**

### Sobre

**Sobre → conteúdo institucional/conceitual → demais áreas pelo menu**

### Planos

**Planos → escolher plano → método de pagamento → confirmação simulada**

Métodos:

- PIX;
- cartão;
- carteira digital.

### Contato

**Contato → dados fictícios / redes sociais / formulário → confirmação simulada**

## Jornada do aluno

**Área do aluno → Agenda → Aula → Registrar aula → Evolução → Histórico**

A evolução está centrada no instrumento principal e utiliza, por padrão, o recorte das últimas três aulas.

## Jornada do professor / ADM

**Professor / ADM → Dashboard → Alunos → contexto do aluno → Agenda → Aula**

O dashboard prioriza:

- aulas de hoje;
- próxima aula;
- alunos que precisam de acompanhamento;
- materiais;
- distribuição por instrumento.

## Princípios de interação

1. Toda ação importante deve apresentar feedback.
2. Ações simuladas devem ser identificáveis.
3. O contexto do aluno deve permanecer claro.
4. A próxima ação deve ser visualmente evidente.
5. A experiência deve funcionar sem backend.
6. Dados públicos devem ser fictícios/sanitizados.

## Estado de implementação

O protótipo é uma aplicação estática em HTML/CSS/JavaScript publicada no GitHub Pages. As jornadas são simuladas localmente no navegador.

Não há ainda:

- autenticação real;
- banco de dados;
- gateway de pagamento;
- cobrança real;
- integração real com WhatsApp;
- integração real com calendário;
- persistência de registros;
- contas reais de usuários.

Esses componentes ficam para uma etapa posterior, condicionada à validação da experiência.
