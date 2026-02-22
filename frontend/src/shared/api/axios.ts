import axios from "axios";
import { LocalStorage } from "../utils/storage";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to the API client
// This will run before every request is sent
// It retrieves the token from local storage and, if present,
// adds it to the request headers as a Bearer token for authentication
api.interceptors.request.use((config) => {
  const token = LocalStorage.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { api };
