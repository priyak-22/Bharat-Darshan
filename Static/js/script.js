// ==========================
// Authentication and Navbar Logic
// ==========================

let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
let currentUser = localStorage.getItem('currentUser') || '';
let currentUserId = localStorage.getItem('currentUserId') || '';
let authMode = 'login'; // 'login' or 'register'

// Get users from localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

// Save users to localStorage
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Show alert message (Bootstrap style)
function showAlert(message, type = 'danger') {
  const container = document.getElementById('alertContainer');
  if (!container) return; // prevent error if container missing

  container.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
}

// Update navbar buttons visibility based on login status
function updateNavbar() {
  const loginBtn = document.getElementById('loginBtn');
  const dashboardLink = document.getElementById('dashboardLink');
  const logoutBtn = document.getElementById('logoutBtn');

  if (!loginBtn || !dashboardLink || !logoutBtn) return;

  if (isLoggedIn) {
    loginBtn.classList.add('d-none');
    dashboardLink.classList.remove('d-none');
    logoutBtn.classList.remove('d-none');
  } else {
    loginBtn.classList.remove('d-none');
    dashboardLink.classList.add('d-none');
    logoutBtn.classList.add('d-none');
  }
}

// Open login or registration modal
function openAuthModal(mode) {
  authMode = mode;
  const title = document.getElementById('modalTitle');
  const toggleLink = document.getElementById('toggleFormLink');
  const idField = document.getElementById('studentIdField');

  if (!title || !toggleLink || !idField) return;

  title.textContent = mode === 'login' ? 'Student Login' : 'Student Registration';
  toggleLink.textContent = mode === 'login'
    ? 'Need an account? Register here'
    : 'Already have an account? Login here';
  idField.classList.toggle('d-none', mode !== 'register');
}

// Toggle between login/register modes
function toggleFormMode() {
  openAuthModal(authMode === 'login' ? 'register' : 'login');
}

// Logout user
function logout() {
  localStorage.setItem('isLoggedIn', false);
  localStorage.removeItem('currentUser');
  localStorage.removeItem('currentUserId');
  isLoggedIn = false;
  updateNavbar();
  showAlert('You have been logged out successfully.', 'success');
}

// Initial navbar state on page load
document.addEventListener('DOMContentLoaded', () => {
  updateNavbar();
});


// ==========================
// Global Reusable Scripts
// ==========================

// Adds a small click animation to all .btn elements
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.95)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 150);
    });
  });
});
