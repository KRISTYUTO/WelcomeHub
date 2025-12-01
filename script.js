// Show a specific section and hide the button that triggers it
function showSection(id, button = null) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    sec.classList.toggle('active', sec.id === id);
  });

  // Smooth hide without shifting layout
  if (button) {
    button.style.opacity = "0";
    button.style.transition = "opacity 0.3s ease";
    setTimeout(() => {
      button.style.display = "none";
    }, 300);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update progress bar
function updateProgress() {
  const items = document.querySelectorAll('.check-item');
  const checked = Array.from(items).filter(i => i.checked).length;
  const total = items.length;
  const percent = total === 0 ? 0 : Math.round((checked / total) * 100);

  const bar = document.getElementById('progress-bar');
  const label = document.getElementById('progress-label');
  if (bar) bar.style.width = percent + '%';
  if (label) label.textContent = 'Progress: ' + percent + '%';
}

// Quiz logic
function checkQuiz() {
  const form = document.getElementById('quiz-form');
  const resultEl = document.getElementById('quiz-result');
  if (!form || !resultEl) return;

  const correctAnswers = { q1:'B', q2:'C', q3:'B', q4:'C', q5:'B' };
  let score = 0, total = 0;

  Object.keys(correctAnswers).forEach(q => {
    total++;
    const selected = form.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === correctAnswers[q]) score++;
  });

  resultEl.textContent = `Your Score: ${score}/${total} – ${score >= 4 ? 'Great job!' : 'Keep reviewing the policies!'}`;

  const quizBadge = document.getElementById('quiz-badge');
  if (score >= 4 && quizBadge) quizBadge.classList.add('badge-unlocked');
  updateCircleProgress(80);
}

// Progress circle updater
function updateCircleProgress(percent) {
  const circle = document.getElementById('progress-circle');
  const label = document.getElementById('progress-circle-label');
  const deg = Math.min(Math.max(percent, 0), 100) * 3.6;

  if (circle) circle.style.background = `conic-gradient(#ff7f00 ${deg}deg, #222 0deg)`;
  if (label) label.textContent = `${percent}%`;
}

// Staff profile click handler
function setupStaffCards() {
  const cards = document.querySelectorAll('.staff-card');
  const detail = document.getElementById('staff-detail');
  if (!cards || !detail) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.dataset.name || 'N/A';
      const role = card.dataset.role || 'N/A';
      const contact = card.dataset.contact || 'N/A';
      const bio = card.dataset.bio || '';

      detail.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>About:</strong> ${bio}</p>
      `;
    });
  });
}

function logout() {
  // Optional: reset checklist, quiz, or progress if you want
  const checkboxes = document.querySelectorAll('.check-item');
  checkboxes.forEach(cb => cb.checked = false);

  const progressBar = document.getElementById('progress-bar');
  const progressLabel = document.getElementById('progress-label');
  if(progressBar) progressBar.style.width = '0%';
  if(progressLabel) progressLabel.textContent = 'Progress: 0%';

  // Go back to the welcome screen
  showSection('welcome-screen');
}

function logout() {
  // Optional: clear localStorage/sessionStorage if storing login info
  // localStorage.clear(); 
  // sessionStorage.clear();

  // Redirect to the login page
  window.location.href = 'login.html';
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  setupStaffCards();
  updateProgress();
  updateCircleProgress(60);
});
