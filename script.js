function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Checklist Progress
function updateProgress() {
  const total = document.querySelectorAll('#checklist input[type="checkbox"]').length;
  const checked = document.querySelectorAll('#checklist input[type="checkbox"]:checked').length;
  const percent = (checked / total) * 100;
  document.getElementById('progress-bar').style.width = percent + '%';
}

// Quiz
function checkQuiz() {
  const answers = {q1:'B', q2:'C', q3:'B', q4:'C', q5:'B'};
  let score = 0;
  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if(selected && selected.value === answers[q]) score++;
  }
  document.getElementById('quiz-result').innerText = `Your Score: ${score}/5 – Great job!`;
  if(score>=0) setTimeout(()=> showSection('org'), 1500);
}

// Certificate Download
function downloadCertificate() {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Certificate of Completion\nCarla – BrightNest Solutions Onboarding'));
  element.setAttribute('download', 'BrightNest_Certificate.txt');
  element.click();
}
