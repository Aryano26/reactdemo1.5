import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("careconnectUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // ✅ Register (role-based)
  const register = (formData, role) => {
    const newUser = { ...formData, role };
    localStorage.setItem("careconnectUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  // ✅ Login (role-based)
  const login = (email, password, role) => {
    const storedUser = JSON.parse(localStorage.getItem("careconnectUser"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password &&
      storedUser.role === role
    ) {
      setUser(storedUser);
    } else {
      throw new Error("Invalid credentials or role mismatch");
    }
  };

  // ✅ Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("careconnectUser");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
