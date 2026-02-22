export interface Drug {
  id: number;
  name: string;
  strength: string;
}

export interface SelectedDrug extends Drug {
  uniqueId: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export type Interaction = {
  id: number;
  combination: number[];
  severity: "MINOR" | "MODERATE" | "MAJOR";
  color: string;
  alert: string;
};

export interface User {
  id: number;
  name: string;
  email: string;
}
export interface Auth {
  token: string;
  user: User;
}

export interface Position {
  id: number;
  top: number;
  left: number;
}
