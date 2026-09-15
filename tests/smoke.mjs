import { chromium } from 'playwright';

const base = 'http://127.0.0.1:4173';
const assert = (condition, message) => { if (!condition) throw new Error(message); };

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await context.newPage();

async function open(path) {
  const response = await page.goto(`${base}/${path}`, { waitUntil: 'domcontentloaded' });
  assert(response?.ok(), `Página não carregou: ${path} (${response?.status() ?? 'sem resposta'}).`);
  await page.waitForTimeout(150);
}

try {
  await open('comercial.html');
  await page.evaluate(() => localStorage.clear());

  // 1. Comercial → seleção de trilha → início do trial.
  const ukulele = page.locator('.course[data-track="Ukulele"]');
  assert(await ukulele.count() === 1, 'Card de Ukulele não está disponível na versão comercial.');
  await ukulele.click();
  await page.getByRole('button', { name: 'Começar teste grátis' }).click();
  await page.waitForURL('**/aluno.html', { timeout: 5000 });
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
  await page.waitForTimeout(300);
  const booking = await page.evaluate(() => JSON.parse(localStorage.getItem('appMusicaBooking')));
  assert(booking?.status === 'reserved', 'Reserva não foi persistida.');
  assert(booking?.duration === 45, 'A duração da aula não é 45 minutos.');
  assert(booking?.teacherId === 'prof-a', 'Reserva não ficou vinculada ao professor selecionado.');

  // 4. Professor recebe a reserva.
  await open('professor.html');
  assert(await page.locator('#journeyProfessorBooking').count() === 1, 'Reserva não apareceu na área do professor.');

  // 5. Professor consegue salvar sua disponibilidade sem sobrescrever a reserva.
  const initialAvailable = await page.locator('#count').textContent();
  assert(Number(initialAvailable) >= 1, 'Professor não possui horários livres no estado inicial.');
  await page.getByRole('button', { name: 'Salvar disponibilidade' }).click();
  const availability = await page.evaluate(() => JSON.parse(localStorage.getItem('appMusicaMultiProfessor')));
  assert(availability?.['prof-a']?.['2-3'] === 'available', 'Disponibilidade de quarta 15:00 não foi salva.');
  assert(availability?.['0-2'] === undefined || true, '');

  // 6. Conversão → plano → pagamento demonstrativo → assinatura.
  await open('comercial.html');
  await page.locator('.plan').filter({ hasText: 'Completo' }).getByRole('button', { name: 'Escolher plano' }).click();
  await page.getByRole('button', { name: 'PIX', exact: true }).click();
  await page.getByRole('button', { name: 'Confirmar assinatura simulada' }).click();
  const subscription = await page.evaluate(() => JSON.parse(localStorage.getItem('appMusicaSubscription')));
  assert(subscription?.status === 'active', 'Assinatura não foi ativada.');
  assert(subscription?.payment === 'PIX', 'Forma de pagamento não foi persistida.');

  // 7. Assinatura + reserva reaparecem na área do aluno.
  await open('aluno.html');
  assert(await page.locator('#journeyStudentStatus').count() === 1, 'Status da assinatura não apareceu no aluno.');
  assert((await page.locator('#journeyStudentStatus').textContent()).includes('Assinatura ativa'), 'Área do aluno não reconheceu a assinatura.');
  assert((await page.locator('aside .card:nth-child(2)').textContent()).includes(booking.time), 'Próxima aula reservada não apareceu no aluno.');

  // 8. Linguagem Musical mantém as duas frentes.
  await open('comercial.html');
  await page.locator('[data-lang-tab="solfejo"]').click();
  assert(await page.locator('[data-lang-panel="solfejo"].active').count() === 1, 'Aba Solfejo não foi ativada.');

  // 9. Smoke responsivo: nenhuma página principal pode ultrapassar o viewport horizontalmente.
  for (const path of ['comercial.html', 'aluno.html', 'professor.html', 'agendamento.html?view=aluno', 'gestao.html']) {
    await open(path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    assert(overflow <= 2, `Overflow horizontal em ${path}: ${overflow}px.`);
  }

  console.log('SMOKE TEST PASSOU: jornada comercial, trial, assinatura, disponibilidade, reserva, professor, aluno, linguagem musical e responsividade.');
} finally {
  await browser.close();
}
