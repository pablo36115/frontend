import { apiFetch } from '../config/api.config.js';

export const authService = {
  async login(email, password) {
    return await apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
  },

  getCurrentUser() {
    const user = localStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated() {
    return !!this.getCurrentUser();
  },

  saveSession(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  },

  getRol() {
    const user = this.getCurrentUser();
    return user?.rol?.nombre || null;
  },
};
