import { apiFetch } from '../config/api.config.js';

export const categoriasService = {
  async obtenerTodos() {
    const res = await apiFetch('/categorias');
    return res.data || [];
  },

  async obtenerUno(id) {
    const res = await apiFetch(`/categorias/${id}`);
    return res.data;
  },

  async crear(data) {
    return await apiFetch('/categorias', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async actualizar(id, data) {
    return await apiFetch(`/categorias/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async eliminar(id) {
    return await apiFetch(`/categorias/${id}`, {
      method: 'DELETE',
    });
  },
};
