import { createContext, useEffect, useState } from "react";
import authService from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      if (!authService.isAuthenticated()) {
        setLoading(false);
        return;
      }

      try {
        const currentUser = await authService.getCurrentUser();

        setUser(currentUser);
      } catch (error) {
        authService.logout();

        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (credentials) => {
    const authResult = await authService.login(credentials);

    try {
      const currentUser = await authService.getCurrentUser();

      setUser(currentUser);
    } catch (error) {
      setUser(authResult?.user ?? null);
    }
  };

  const logout = () => {
    authService.logout();

    setUser(null);
  };

  const value = {
    user,

    loading,

    login,

    logout,

    isAuthenticated: !!user || !!localStorage.getItem("token"),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
