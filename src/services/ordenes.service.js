import { apiFetch } from '../config/api.config.js';

export const ordenesService = {
  async obtenerTodos() {
    const res = await apiFetch('/ordenes');
    return res.data || [];
  },

  async obtenerPendientes() {
    const ordenes = await this.obtenerTodos();
    return ordenes.filter(o => o.estado === 'pendiente');
  },

  async crear(data) {
    return await apiFetch('/ordenes', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async pagar(id, data) {
    return await apiFetch(`/ordenes/${id}/pagar`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async eliminar(id) {
    return await apiFetch(`/ordenes/${id}`, {
      method: 'DELETE',
    });
  },
};
