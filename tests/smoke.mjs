import { chromium } from 'playwright';

const base = 'http://127.0.0.1:4173';
const assert = (condition, message) => { if (!condition) throw new Error(message); };

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await context.newPage();

try {
  await page.goto(`${base}/comercial.html`);
  await page.evaluate(() => localStorage.clear());

  // 1. Comercial → seleção de trilha → início do trial.
  await page.getByText('Ukulele', { exact: true }).first().click();
  await page.getByRole('button', { name: 'Começar teste grátis' }).click();
  await page.waitForURL('**/aluno.html');
  const trial = await page.evaluate(() => JSON.parse(localStorage.getItem('appMusicaTrial')));
  assert(trial?.status === 'trial', 'Trial não foi criado.');
  assert(trial?.track === 'Ukulele', 'Trilha escolhida não foi preservada no trial.');
  assert((await page.locator('#trialTrack').textContent()).includes('Ukulele'), 'Área do aluno não recebeu a trilha do trial.');

  // 2. Área do aluno → agendamento.
  await page.getByRole('button', { name: 'Agendar aula ao vivo' }).click();
  await page.waitForURL('**/agendamento.html?view=aluno');
  assert(await page.locator('#aluno.view.active').count() === 1, 'Visão do aluno não abriu no agendamento.');
  assert(await page.getByRole('button', { name: 'Agendar' }).count() > 0, 'Nenhum horário disponível foi apresentado.');

  // 3. Aluno reserva horário → estado persistido.
  await page.getByRole('button', { name: 'Agendar' }).first().click();
  await page.waitForTimeout(250);
  const booking = await page.evaluate(() => JSON.parse(localStorage.getItem('appMusicaBooking')));
  assert(booking?.status === 'reserved', 'Reserva não foi persistida.');
  assert(booking?.duration === 45, 'A duração da aula não é 45 minutos.');
  assert(booking?.teacherId === 'prof-a', 'Reserva não ficou vinculada ao professor selecionado.');

  // 4. Professor recebe a reserva.
  await page.goto(`${base}/professor.html`);
  assert(await page.locator('#journeyProfessorBooking').count() === 1, 'Reserva não apareceu na área do professor.');

  // 5. Professor consegue trabalhar com disponibilidade.
  const initialAvailable = await page.locator('#count').textContent();
  assert(Number(initialAvailable) >= 1, 'Professor não possui horários livres no estado inicial.');
  await page.getByRole('button', { name: /Alternar Terça 09:00/ }).click();
  await page.getByRole('button', { name: 'Salvar disponibilidade' }).click();
  const availability = await page.evaluate(() => JSON.parse(localStorage.getItem('appMusicaMultiProfessor')));
  assert(availability?.['prof-a']?.['1-0'] === 'available', 'Alteração de disponibilidade não foi salva.');

  // 6. Conversão → plano → pagamento demonstrativo → assinatura.
  await page.goto(`${base}/comercial.html`);
  await page.locator('.plan').filter({ hasText: 'Completo' }).getByRole('button', { name: 'Escolher plano' }).click();
  await page.getByRole('button', { name: 'PIX', exact: true }).click();
  await page.getByRole('button', { name: 'Confirmar assinatura simulada' }).click();
  const subscription = await page.evaluate(() => JSON.parse(localStorage.getItem('appMusicaSubscription')));
  assert(subscription?.status === 'active', 'Assinatura não foi ativada.');
  assert(subscription?.payment === 'PIX', 'Forma de pagamento não foi persistida.');

  // 7. Assinatura + reserva reaparecem na área do aluno.
  await page.goto(`${base}/aluno.html`);
  assert(await page.locator('#journeyStudentStatus').count() === 1, 'Status da assinatura não apareceu no aluno.');
  assert((await page.locator('#journeyStudentStatus').textContent()).includes('Assinatura ativa'), 'Área do aluno não reconheceu a assinatura.');
  assert((await page.locator('aside .card:nth-child(2)').textContent()).includes(booking.time), 'Próxima aula reservada não apareceu no aluno.');

  // 8. Linguagem Musical mantém as duas frentes.
  await page.goto(`${base}/comercial.html`);
  await page.locator('[data-lang-tab="solfejo"]').click();
  assert(await page.locator('[data-lang-panel="solfejo"].active').count() === 1, 'Aba Solfejo não foi ativada.');

  // 9. Smoke responsivo: nenhuma página principal pode ultrapassar o viewport horizontalmente.
  for (const path of ['comercial.html', 'aluno.html', 'professor.html', 'agendamento.html?view=aluno', 'gestao.html']) {
    await page.goto(`${base}/${path}`);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    assert(overflow <= 2, `Overflow horizontal em ${path}: ${overflow}px.`);
  }

  console.log('SMOKE TEST PASSOU: jornada comercial, trial, assinatura, disponibilidade, reserva, professor, aluno, linguagem musical e responsividade.');
} finally {
  await browser.close();
}
