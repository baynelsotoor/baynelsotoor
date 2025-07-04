// Simulated user login state
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
let username = localStorage.getItem('username') || '';

// Update auth button and menu link
function updateAuthButton() {
  const authButton = document.getElementById('authButton');
  const userStatus = document.getElementById('userStatus');
  const authMenuLink = document.getElementById('authMenuLink');
  
  if (isLoggedIn) {
    authButton.style.display = 'none';
    userStatus.textContent = `أهلًا ${username || 'المستخدم'}`;
    authMenuLink.textContent = 'تسجيل الخروج';
    authMenuLink.onclick = confirmLogout;
    authMenuLink.removeAttribute('href');
  } else {
    authButton.style.display = 'block';
    authButton.textContent = 'تسجيل الدخول';
    userStatus.textContent = '';
    authMenuLink.textContent = 'تسجيل الدخول';
    authMenuLink.href = 'login.html';
    authMenuLink.onclick = null;
  }
}

// Handle login/logout from header button
function handleAuth() {
  if (isLoggedIn) {
    confirmLogout();
  } else {
    window.location.href = 'login.html';
  }
}

// Confirm logout
function confirmLogout() {
  if (confirm('هل أنت متأكد أنك تريد تسجيل الخروج؟')) {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('username');
    isLoggedIn = false;
    updateAuthButton();
    window.location.href = 'login.html';
  }
}

// Toggle sidebar menu
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');
  const isActive = sidebar.classList.contains('active');

  sidebar.classList.toggle('active');
  mainContent.classList.toggle('active');

  console.log('Sidebar toggled, active:', !isActive);
}

// Protect sensitive pages
function protectPage() {
  const protectedPages = ['cart.html', 'checkout.html', 'track.html'];
  const currentPage = window.location.pathname.split('/').pop();
  
  if (protectedPages.includes(currentPage) && !isLoggedIn) {
    window.location.href = 'login.html';
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateAuthButton();
  protectPage();
  console.log('Script loaded successfully');
});
