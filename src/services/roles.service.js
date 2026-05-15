import { apiFetch } from '../config/api.config.js';

export const rolesService = {
  async obtenerTodos() {
    const res = await apiFetch('/roles');
    return res.data || [];
  },

  async obtenerUno(id) {
    const res = await apiFetch(`/roles/${id}`);
    return res.data;
  },

  async crear(data) {
    return await apiFetch('/roles', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async actualizar(id, data) {
    return await apiFetch(`/roles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async eliminar(id) {
    return await apiFetch(`/roles/${id}`, {
      method: 'DELETE',
    });
  },
};
