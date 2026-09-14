# Versão comercial — APP Música

## Direção

O protótipo validado passa a ter uma segunda camada: uma **plataforma online de ensino de música**.

A primeira operação pode começar com um único professor, mas a arquitetura conceitual deve permitir a entrada de outros professores posteriormente.

## Experiências separadas

### Área do Aluno

Responsável por:

- trilhas de aprendizagem;
- aulas em vídeo;
- materiais de apoio;
- evolução;
- agenda;
- agendamento de aula individual;
- histórico de aulas;
- acompanhamento do plano.

Trilhas comerciais iniciais:

1. Violão
2. Ukulele
3. Linguagem Musical
   - Rítmica
   - Solfejo

### Área do Professor

Responsável por:

- perfil profissional;
- disponibilidade de horários;
- agenda;
- alunos;
- aulas;
- conteúdos;
- registros das aulas;
- acompanhamento da evolução;
- indicadores.

A disponibilidade é definida pelo professor e posteriormente utilizada pelo sistema para apresentar horários livres ao aluno.

## Modelo comercial inicial

Plano de **3 meses**, contendo:

- aulas em vídeo;
- material de apoio;
- 1 aula individual ao vivo por mês;
- duração da aula ao vivo: **45 minutos**;
- total previsto no ciclo: 3 encontros individuais ao vivo.

A cobrança e o preço por hora/aula ainda serão definidos. O protótipo não deve apresentar preço real enquanto não houver decisão comercial.

## Regra de agenda

A lógica conceitual será:

**Professor define disponibilidade → sistema gera horários disponíveis → aluno escolhe horário → horário fica reservado → aula aparece nas duas agendas.**

No início, tudo pode ser simulado. Backend, autenticação, pagamentos, calendário e videoconferência entram somente quando o modelo estiver validado.

## Evolução para marketplace/plataforma

A arquitetura deve evitar amarrar o produto a um único professor. O modelo futuro deve permitir:

`Professor → disponibilidade → agenda → alunos → conteúdos → aulas → evolução`

Cada professor terá sua própria agenda e seus próprios horários disponíveis, enquanto o aluno terá acesso às trilhas e aos professores/ofertas disponíveis para sua contratação.

## Próximas implementações

1. Refinar Área do Aluno comercial.
2. Refinar Área do Professor comercial.
3. Conectar disponibilidade do professor ao fluxo de agendamento do aluno.
4. Definir modelo de planos e cobrança.
5. Definir cadastro/login e perfis.
6. Definir armazenamento de vídeos e materiais.
7. Definir mecanismo de aula ao vivo.
8. Só depois avaliar backend e automações.

Até essa etapa, os dados continuam fictícios e as ações financeiras ou de agendamento são demonstrativas.