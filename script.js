/* ===========================
   GLOBAL LAYOUT
=========================== */
body {
  background: #0d0d0d;
  color: #e0e0e0;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.section {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;
  position: absolute; /* keep your centering */
  left: 50%;
  transform: translate(-50%, 20px);
  width: 90vw;
  max-width: 1200px;
  padding: 2rem;
  box-sizing: border-box;
}

.section.active {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px);}
  to { opacity: 1; transform: translateY(0);}
}

/* ===========================
   HEADERS
=========================== */
h1, h2, h3, h4 {
  color: #ff9500;
  margin-bottom: 12px;
}

.section-subtitle {
  color: #bbb;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

/* ===========================
   BUTTONS
=========================== */
button {
  background: #ff9500;
  color: #1a1a1a;
  border: none;
  padding: 0.75em 1.5em;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

button:hover {
  background: #ffb347;
  transform: translateY(-2px);
}

.secondary-btn {
  background: transparent;
  border: 1px solid #ff9500;
  color: #ff9500;
}

.secondary-btn:hover {
  background: #ff9500;
  color: #1a1a1a;
}

/* ===========================
   HERO / LOGIN SECTION
=========================== */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-logo {
  width: 20vw;
  max-width: 140px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 2px solid #ff9500;
  box-shadow: 0 0 20px rgba(255, 149, 0, 0.4);
}

/* ===========================
   LOGIN FORM
=========================== */
#login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 360px;
  margin: 0 auto;
  text-align: left;
}

#login-form input {
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #555;
  background: #1f1f1f;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;
}

#login-form input:focus {
  border-color: #ff9500;
  box-shadow: 0 0 8px rgba(255, 149, 0, 0.6);
}

#login-form button {
  margin-top: 10px;
}

/* ===========================
   CHECKLIST / PROGRESS
=========================== */
.progress-container {
  background: #2a2a2a;
  border-radius: 20px;
  height: 18px;
  width: 80%;
  max-width: 500px;
  margin: 0 auto 10px;
  overflow: hidden;
}

.progress-bar {
  background: #ff9500;
  height: 100%;
  width: 0%;
  transition: width 0.4s ease;
}

.progress-label {
  color: #ff9500;
  margin-bottom: 20px;
  font-weight: 500;
}

.checklist {
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 20px auto;
  max-width: 500px;
}

.checklist li {
  margin-bottom: 12px;
  font-size: 1rem;
  line-height: 1.5;
}

/* ===========================
   MODULE CARDS
=========================== */
.module-card {
  background: #2a2a2a;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem auto;
  max-width: 700px;
  text-align: left;
  box-shadow: 0 6px 20px rgba(0,0,0,0.4);
}

.module-card ul {
  padding-left: 18px;
}

.note {
  color: #aaa;
  font-size: 0.8rem;
  margin-top: 10px;
}

/* ===========================
   QUIZ
=========================== */
.quiz {
  max-width: 700px;
  margin: 0 auto;
}

.quiz-item {
  background: #2a2a2a;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  text-align: left;
}

.quiz-result {
  margin-top: 20px;
  color: #ff9500;
  font-weight: 700;
}

/* ===========================
   STAFF / ORG CHART
=========================== */
.org-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.org-level {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.org-member {
  background: #2a2a2a;
  padding: 12px 20px;
  border-radius: 8px;
  border: 1px solid #ff9500;
  color: #ff9500;
  font-size: 0.875rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}

/* ===========================
   STAFF PROFILES
=========================== */
.staff-grid {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 20px auto;
}

.staff-card {
  background: #2a2a2a;
  flex: 1 1 180px;
  max-width: 220px;
  padding: 1.2rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

.staff-card:hover {
  transform: translateY(-5px);
  background: #333;
}

.staff-avatar-placeholder {
  background: #ff9500;
  color: #1a1a1a;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin: 0 auto 12px;
}

/* ===========================
   BADGES & CIRCULAR PROGRESS
=========================== */
.badge-container {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 20px 0;
}

.badge {
  background: #ff9500;
  color: #1a1a1a;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
}

.progress-circle-wrapper {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.progress-circle {
  width: 30vw;
  max-width: 150px;
  height: 30vw;
  max-height: 150px;
  border: 8px solid #222;
  border-radius: 50%;
  position: relative;
}

.progress-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#progress-circle-label {
  color: #ff9500;
  font-size: 1.5rem;
  font-weight: 700;
}

/* ===========================
   RESPONSIVE
=========================== */
@media (max-width: 1024px) {
  .module-card, .quiz {
    padding: 1.2rem;
  }
}

@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }

  .section { padding: 1.5rem; }

  .hero-logo { max-width: 120px; }

  .staff-card {
    flex: 1 1 140px;
  }
}

@media (max-width: 480px) {
  h1 { font-size: 1.5rem; }
  h2 { font-size: 1.25rem; }

  .staff-card {
    flex: 1 1 100%;
    max-width: 250px;
  }

  button {
    width: 100%;
  }

  .progress-container {
    width: 95%;
  }

  /* Fix hidden buttons glitch */
  button[style*="display: none"] {
    display: none !important;
  }
}
