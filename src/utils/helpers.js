export function mostrarMensaje(elementId, texto, tipo) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = texto;
  el.style.display = 'block';
  el.style.backgroundColor = tipo === 'success' ? '#d4edda' : '#f8d7da';
  el.style.color = tipo === 'success' ? '#155724' : '#721c24';
  setTimeout(() => { el.style.display = 'none'; }, 4000);
}

export function formatMoney(amount) {
  return '$' + (amount || 0).toFixed(2);
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('es-ES');
}

export function loading(elementId, show = true) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.style.display = show ? 'block' : 'none';
}
