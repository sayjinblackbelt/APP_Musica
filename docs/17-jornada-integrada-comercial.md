# Jornada integrada comercial

## Objetivo
Conectar a experiência comercial, o teste gratuito, a Área do Aluno, a assinatura e o agendamento em uma única jornada demonstrável.

## Fluxo

`Trilha → Teste grátis → Área do Aluno → Conteúdo/Atividade → Plano → Checkout simulado → Assinatura ativa → Agendamento → Aula individual`

## Estados do MVP

- `trial`: teste demonstrativo ativo.
- `subscription.status = active`: assinatura demonstrativa ativa.
- `available`: horário disponível.
- `booked`: horário reservado.

## Persistência

O MVP usa `localStorage` para demonstrar continuidade entre páginas no mesmo navegador:

- `appMusicaTrial`
- `appMusicaSubscription`
- `appMusicaMvpSlots`

Isso não representa autenticação, banco de dados ou cobrança real.

## Critério de validação

1. Escolher uma trilha.
2. Entrar na Área do Aluno.
3. Visualizar o trial e atividade recomendada.
4. Acessar a conversão para plano de 3 meses.
5. Selecionar PIX, cartão ou carteira digital.
6. Simular assinatura.
7. Retornar à Área do Aluno e visualizar `Assinatura ativa`.
8. Abrir agendamento.
9. Visualizar disponibilidade do professor.
10. Reservar uma aula de 45 minutos.

## Próxima evolução

Substituir progressivamente a simulação por autenticação, banco de dados, regras reais de trial/assinatura e integração de agenda, sem alterar a jornada principal validada neste MVP.
