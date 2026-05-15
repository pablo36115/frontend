import { authService } from '../services/auth.service.js';

export const ROLES = {
  ADMINISTRADOR: 'Administrador',
  MESERO: 'Mesero',
  CAJERO: 'Cajero',
  GERENTE: 'Gerente',
  COCINERO: 'Cocinero'
};

export const ROLE_PAGES = {
  [ROLES.ADMINISTRADOR]: 'administrador.html',
  [ROLES.MESERO]: 'mesero.html',
  [ROLES.CAJERO]: 'cajero.html',
  [ROLES.GERENTE]: 'gerente.html',
  [ROLES.COCINERO]: 'cocinero.html'
};

export function initAuthGuard() {
  if (!authService.isAuthenticated()) {
    window.location.href = 'login.html';
    return null;
  }

  const user = authService.getCurrentUser();
  const rol = user?.rol?.nombre;

  const navLogout = document.getElementById('nav-logout');
  if (navLogout) {
    navLogout.addEventListener('click', (e) => {
      e.preventDefault();
      authService.logout();
      window.location.href = 'login.html';
    });
  }

  hideRoleLinks(rol);
  setActiveLink();

  return { user, rol };
}

function hideRoleLinks(currentRol) {
  const navLinks = document.querySelectorAll('.nav-principal a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    Object.entries(ROLE_PAGES).forEach(([rol, pagina]) => {
      if (href === pagina && rol !== currentRol) {
        link.style.display = 'none';
      }
    });
  });
}

function setActiveLink() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-principal a');

  navLinks.forEach(link => {
    link.classList.remove('activo');
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('activo');
    }
  });
}
