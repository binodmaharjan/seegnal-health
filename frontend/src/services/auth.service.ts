import { api } from "../shared/api/axios";
import type { Auth } from "../shared/types";

export class AuthService {
  /**
   * Authenticates a user with the provided credentials.
   *
   * Sends a POST request to the `/auth/login` endpoint with the user's
   * email and password. If successful, returns an Auth object
   * containing the authentication token and user details.
   *
   * @param email - The user's registered email address.
   * @param password - The user's account password.
   * @returns A Promise that resolves to an Auth object (token + user info).
   * @throws Will throw an error if the login request fails.
   */
  async login(email: string, password: string): Promise<Auth> {
    const response = await api.post("/auth/login", { email, password });
    return response.data.data;
  }
}
