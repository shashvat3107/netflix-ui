const API_URL = 'http://localhost:5000/api';

export const authService = {
  register: async (email, password) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error((await res.json()).message || 'Registration failed');
    return res.json();
  },
  login: async (email, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error((await res.json()).message || 'Login failed');
    return res.json();
  },
  getMe: async (token) => {
    const res = await fetch(`${API_URL}/user/me`, {
      headers: { Authorization: token }
    });
    if (!res.ok) throw new Error((await res.json()).message || 'Fetch user failed');
    return res.json();
  },
  updateMyList: async (token, myList) => {
    const res = await fetch(`${API_URL}/user/mylist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({ myList })
    });
    if (!res.ok) throw new Error((await res.json()).message || 'Update myList failed');
    return res.json();
  },
  updateProfile: async (token, name, phone) => {
    const res = await fetch(`${API_URL}/user/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({ name, phone })
    });
    if (!res.ok) throw new Error((await res.json()).message || 'Update profile failed');
    return res.json();
  }
}; 