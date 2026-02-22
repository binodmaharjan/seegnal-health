import { useState } from "react";
import axios from "axios";
import { AuthService } from "../services/auth.service";
import type { Auth } from "../shared/types";

const authService = new AuthService();

export interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, string> | null>(null);
  const [data, setData] = useState<Auth | null>(null);

  const login = async (loginData: LoginData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.login(
        loginData.email,
        loginData.password,
      );
      setData(response);
      return response;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || err.message);
      } else if (err instanceof Error) {
        setError({ message: err.message });
      } else {
        setError({ message: "An unknown error occurred" });
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, data, loading, error };
};
