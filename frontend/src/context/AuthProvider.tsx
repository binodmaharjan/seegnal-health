import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { LocalStorage } from "../shared/utils/storage";

export interface AuthContextType {
  token: string | null;
  name: string | null;
  login: (token: string, name: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    return LocalStorage.getToken();
  });
  const [name, setName] = useState<string | null>(() => {
    return LocalStorage.getUserName();
  });

  const login = (newToken: string, name: string) => {
    LocalStorage.setToken(newToken);
    LocalStorage.setUserName(name);
    setToken(newToken);
    setName(name);
  };

  const logout = () => {
    LocalStorage.removeToken();
    LocalStorage.removeUserName();
    setToken(null);
    setName(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, name, login, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
