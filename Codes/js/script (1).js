
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
let currentUser = localStorage.getItem('currentUser') || '';
let currentUserId = localStorage.getItem('currentUserId') || '';
let authMode = 'login'; // 'login' or 'register'

function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function showAlert(message, type = 'danger') {
  const container = document.getElementById('alertContainer');
  container.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">${message}<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>`;
}

function updateNavbar() {
  if (isLoggedIn) {
    document.getElementById('loginBtn').classList.add('d-none');
    document.getElementById('dashboardLink').classList.remove('d-none');
    document.getElementById('logoutBtn').classList.remove('d-none');
  } else {
    document.getElementById('loginBtn').classList.remove('d-none');
    document.getElementById('dashboardLink').classList.add('d-none');
    document.getElementById('logoutBtn').classList.add('d-none');
  }
}

function openAuthModal(mode) {
  authMode = mode;
  document.getElementById('modalTitle').textContent = mode === 'login' ? 'Student Login' : 'Student Registration';
  document.getElementById('toggleFormLink').textContent = mode === 'login' ? 'Need an account? Register here' : 'Already have an account? Login here';
  document.getElementById('studentIdField').classList.toggle('d-none', mode !== 'register');
}

function toggleFormMode() {
  openAuthModal(authMode === 'login' ? 'register' : 'login');
}

// Logout
function logout() {
  localStorage.setItem('isLoggedIn', false);
  localStorage.removeItem('currentUser');
  localStorage.removeItem('currentUserId');
  isLoggedIn = false;
  updateNavbar();
}

// Initial Navbar Update
updateNavbar();
