function register() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (!user || !pass) return alert("Enter all fields.");
  localStorage.setItem('drmine_user', JSON.stringify({ user, pass }));
  alert("Registered! Now log in.");
}

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const saved = JSON.parse(localStorage.getItem('drmine_user'));

  if (saved && user === saved.user && pass === saved.pass) {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('profile-section').style.display = 'block';
  } else {
    alert("Invalid credentials.");
  }
}

function saveProfile() {
  const history = document.getElementById('history').value;
  const goals = document.getElementById('goals').value;
  const style = document.getElementById('style').value;
  const consent = document.getElementById('consent').checked;

  if (!consent) return alert("You must accept the terms to continue.");

  const profile = { history, goals, style };
  localStorage.setItem('drmine_profile', JSON.stringify(profile));

  document.getElementById('profile-section').style.display = 'none';
  document.getElementById('result-section').style.display = 'block';

  document.getElementById('summary').innerText =
    `Your profile has been saved with preferred style: "${style}".`;
}
