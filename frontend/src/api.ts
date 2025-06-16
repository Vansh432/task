const API_BASE = 'http://localhost:7000/api';

export const login = async (email: string, password: string) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const signup = async (email: string, password: string) => {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const getCurrentUser = async (token: string) => {
  const res = await fetch(`${API_BASE}/auth/me`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
