/* ===========================
   SECTION NAVIGATION
=========================== */
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.toggle('active', sec.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===========================
   CHECKLIST PROGRESS
=========================== */
function updateProgress() {
  const items = document.querySelectorAll('.check-item');
  const checkedCount = Array.from(items).filter(item => item.checked).length;
  const total = items.length;
  const percent = total === 0 ? 0 : Math.round((checkedCount / total) * 100);

  const bar = document.getElementById('progress-bar');
  const label = document.getElementById('progress-label');

  if (bar) bar.style.width = `${percent}%`;
  if (label) label.textContent = `Progress: ${percent}%`;
}

/* ===========================
   QUIZ LOGIC
=========================== */
function checkQuiz() {
  const form = document.getElementById('quiz-form');
  const resultEl = document.getElementById('quiz-result');
  if (!form || !resultEl) return;

  const correctAnswers = { q1: 'B', q2: 'C', q3: 'B', q4: 'C', q5: 'B' };
  let score = 0;
  const total = Object.keys(correctAnswers).length;

  Object.keys(correctAnswers).forEach(q => {
    const selected = form.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === correctAnswers[q]) score++;
  });

  resultEl.textContent = `Your Score: ${score}/${total} – ${score >= 4 ? 'Great job!' : 'Keep reviewing the policies!'}`;

  // Unlock "Quiz Master" badge
  if (score >= 4) {
    const quizBadge = document.getElementById('quiz-badge');
    if (quizBadge) quizBadge.classList.add('badge-unlocked');
  }

  // Update overall progress circle dynamically
  updateCircleProgress(80);
}

/* ===========================
   CIRCULAR PROGRESS
=========================== */
function updateCircleProgress(percent) {
  const circle = document.getElementById('progress-circle');
  const label = document.getElementById('progress-circle-label');
  const deg = Math.min(Math.max(percent, 0), 100) * 3.6;

  if (circle) circle.style.background = `conic-gradient(#ff7f00 ${deg}deg, #222 0deg)`;
  if (label) label.textContent = `${percent}%`;
}

/* ===========================
   STAFF PROFILES
=========================== */
function setupStaffCards() {
  const cards = document.querySelectorAll('.staff-card');
  const detail = document.getElementById('staff-detail');
  if (!cards || !detail) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const { name = 'N/A', role = 'N/A', contact = 'N/A', bio = '' } = card.dataset;

      detail.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>About:</strong> ${bio}</p>
      `;
    });
  });
}

/* ===========================
   CERTIFICATE DOWNLOAD
=========================== */
function downloadCertificate() {
  alert('Certificate download feature can be implemented here (PDF generation, etc.).');
}

/* ===========================
   INITIALIZATION
=========================== */
document.addEventListener('DOMContentLoaded', () => {
  setupStaffCards();
  updateProgress();
  updateCircleProgress(60); // Default onboarding progress
});
