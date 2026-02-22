// Storage keys
const STORAGE_KEYS = {
  TOKEN: "token",
  USER_NAME: "USER_NAME",
  USER_EMAIL: "USER_EMAIL",
} as const;

export class LocalStorage {
  //Token
  static setToken(token: string): void {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
  }

  static getToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.TOKEN);
  }

  static removeToken(): void {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  }

  // User name
  static setUserName(name: string): void {
    localStorage.setItem(STORAGE_KEYS.USER_NAME, name);
  }

  static getUserName(): string | null {
    return localStorage.getItem(STORAGE_KEYS.USER_NAME);
  }

  static removeUserName(): void {
    localStorage.removeItem(STORAGE_KEYS.USER_NAME);
  }

  // User email
  static setUserEmail(email: string): void {
    localStorage.setItem(STORAGE_KEYS.USER_EMAIL, email);
  }

  static getUserEmail(): string | null {
    return localStorage.getItem(STORAGE_KEYS.USER_EMAIL);
  }

  static removeUserEmail(): void {
    localStorage.removeItem(STORAGE_KEYS.USER_EMAIL);
  }

  // Clear all auth data
  static clearAll(): void {
    LocalStorage.removeToken();
    LocalStorage.removeUserName();
    LocalStorage.removeUserEmail();
  }
}
