# Jornada do Teste Grátis — 7 dias

## Objetivo

Validar a jornada comercial do APP Música antes da implementação de autenticação, banco de dados e cobrança reais.

## Jornada principal

`Visitante → Teste grátis → Cadastro → Perfil → Trilha → Dia 1/7 → Conteúdo → Aula → Evolução → Dia 7/7 → Assinatura`

## Experiência do aluno

1. Conhece a proposta.
2. Escolhe Violão, Ukulele ou Linguagem Musical.
3. Seleciona **Teste grátis · 7 dias**.
4. Informa o perfil como aluno.
5. Cria a conta.
6. O sistema inicia o período de 7 dias.
7. A área do aluno mostra claramente o dia do teste e os próximos passos.
8. O aluno acessa vídeo, material e exercícios disponíveis.
9. Pode consultar/agendar a aula individual quando aplicável ao plano/experiência definida.
10. Acompanha evolução.
11. No encerramento do período, conhece os planos e decide pela assinatura.

## Experiência do professor

O teste do professor terá jornada própria no futuro. O professor poderá conhecer a gestão de alunos, conteúdos, agenda e disponibilidade antes de uma eventual contratação da plataforma.

## Estados do teste

- `Não iniciado`
- `Cadastro em andamento`
- `Ativo — Dia 1/7`
- `Ativo — Dias 2–6/7`
- `Último dia — 7/7`
- `Encerrado`
- `Convertido em assinante`

## Regras conceituais

- O período de teste deve ter **7 dias corridos** no produto real.
- A data/hora de início deve ser registrada pelo sistema.
- O aluno deve saber quantos dias faltam.
- O conteúdo disponível durante o teste deve ser definido por trilha.
- O fim do teste não deve apagar o histórico do aluno.
- Após o término, o acesso deve orientar para os planos, sem apresentar conteúdo pago como se estivesse liberado.
- O usuário poderá iniciar uma assinatura antes do fim do teste.

## Conversão

No Dia 7, a experiência deve apresentar uma chamada clara para os planos de 3 meses, mantendo continuidade de percurso:

`Teste → Plano → Pagamento → Assinatura ativa → Área do aluno`

Os valores continuam configuráveis no MVP e não devem ser inventados como preço definitivo.

## MVP atual

A jornada está representada visualmente em `comercial.html`. Cadastro, login, controle de datas e assinatura ainda são simulados.

## Próxima implementação

1. Cadastro real.
2. Autenticação.
3. Registro do início do trial.
4. Contador de dias.
5. Regras de acesso ao conteúdo.
6. Tela de conversão.
7. Só depois, assinatura e pagamento reais.
