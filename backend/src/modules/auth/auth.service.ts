import { generateJWT } from "../../shared/utils/jwt";
import { AuthRepository } from "./auth.repository";
import bcrypt from "bcrypt";

export class AuthService {
  constructor(private authRepo: AuthRepository) {}

  /**
   *
   * @param email
   * @param password
   * @returns token and an user
   */
  async login(email: string, password: string) {
    const errors: Record<string, string> = {};
    const user = await this.authRepo.findByEmail(email);

    if (!user) {
      errors.email = "Invalid username and password";
      throw errors;
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      errors.password = "Invalid username and password";
      throw errors;
    }

    const token = generateJWT({ userId: user.id });

    return { token, user: { id: user.id, email: user.email, name: user.name } };
  }
}
