import { apiFetch } from '../config/api.config.js';

export const usuariosService = {
  async obtenerTodos() {
    const res = await apiFetch('/usuarios');
    return res.data || [];
  },

  async obtenerUno(id) {
    const res = await apiFetch(`/usuarios/${id}`);
    return res.data;
  },

  async crear(data) {
    return await apiFetch('/usuarios', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async actualizar(id, data) {
    return await apiFetch(`/usuarios/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async eliminar(id) {
    return await apiFetch(`/usuarios/${id}`, {
      method: 'DELETE',
    });
  },

  async obtenerMeseros() {
    const usuarios = await this.obtenerTodos();
    return usuarios.filter(u => u.rol?.nombre === 'Mesero');
  },
};
