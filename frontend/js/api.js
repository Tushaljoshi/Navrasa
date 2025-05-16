const API_BASE_URL = 'http://localhost:3000';

async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

  let data;
  try {
    data = await response.json();
  } catch {
    data = { message: 'Invalid JSON response' };
  }

  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }

  return data;
}

export default apiRequest;