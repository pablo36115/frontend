import { apiFetch } from '../config/api.config.js';

export const mesasService = {
  async obtenerTodos() {
    const res = await apiFetch('/mesas');
    return res.data || [];
  },

  async obtenerUno(id) {
    const res = await apiFetch(`/mesas/${id}`);
    return res.data;
  },

  async crear(data) {
    return await apiFetch('/mesas', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async actualizar(id, data) {
    return await apiFetch(`/mesas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async eliminar(id) {
    return await apiFetch(`/mesas/${id}`, {
      method: 'DELETE',
    });
  },

  async obtenerDisponibles() {
    const mesas = await this.obtenerTodos();
    return mesas.filter(m => m.estado);
  },
};
