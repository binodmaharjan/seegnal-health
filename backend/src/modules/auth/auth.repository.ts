import { User } from "../../models";

export class AuthRepository {
  async findByEmail(email: string): Promise<User | null> {
    return await User.findOne({
      where: { email: (email as string).toLowerCase() },
    });
  }
}
