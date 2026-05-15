const API_BASE = 'http://localhost:3800/api';

export const apiConfig = {
  BASE_URL: API_BASE,
  TIMEOUT: 10000,
  HEADERS: {
    'Content-Type': 'application/json',
  },
};

export async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;

  const config = {
    ...options,
    headers: {
      ...apiConfig.HEADERS,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.mensaje || errorData.message || `Error ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`[API] Error en ${endpoint}:`, error.message);
    throw error;
  }
}
