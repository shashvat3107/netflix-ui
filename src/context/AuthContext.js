import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      authService.getMe(token)
        .then((data) => setUser(data))
        .catch(() => {
          setUser(null);
          setToken(null);
          localStorage.removeItem('token');
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token]);

  const login = async (email, password) => {
    const data = await authService.login(email, password);
    setToken(data.token);
    localStorage.setItem('token', data.token);
    setUser(data.user);
  };

  const register = async (email, password) => {
    await authService.register(email, password);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  const updateMyList = async (myList) => {
    if (!token) return;
    const data = await authService.updateMyList(token, myList);
    setUser((u) => ({ ...u, myList: data.myList }));
  };

  const updateProfile = async (name, phone) => {
    if (!token) return;
    const data = await authService.updateProfile(token, name, phone);
    setUser((u) => ({ ...u, name: data.name, phone: data.phone }));
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, updateMyList, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 