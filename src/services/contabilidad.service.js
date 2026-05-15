import { apiFetch } from '../config/api.config.js';

export const contabilidadService = {
  async obtenerCuentas() {
    const res = await apiFetch('/contabilidad/cuentas-contables');
    return res.data || [];
  },

  async crearCuenta(data) {
    return await apiFetch('/contabilidad/cuentas-contables', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async obtenerAsientos() {
    const res = await apiFetch('/contabilidad/asientos');
    return res.data || [];
  },

  async obtenerAsientoPorId(id) {
    const res = await apiFetch(`/contabilidad/asientos/${id}`);
    return res.data;
  },

  async crearAsiento(data) {
    return await apiFetch('/contabilidad/asientos', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async obtenerCaja() {
    const res = await apiFetch('/contabilidad/caja');
    return res.data || [];
  },

  async registrarCaja(data) {
    return await apiFetch('/contabilidad/caja', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async obtenerReporteVentas(fechaInicio, fechaFin) {
    const res = await apiFetch(`/contabilidad/reportes/ventas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
    return res.data || {};
  },
};
