export interface Respuesta1 {
  mensaje: string;
  user: User;
}
export interface Respuesta0 {
  users: Users;
}


export interface Users {
  users: User[];
}

export interface User {
  id:       number;
  name:     string;
  username: string;
  password: string;
  password_confirmation: string;
  email:    string;
}
export interface User2 {
  name:     string;
  username: string;
  password: string;
  password_confirmation: string;
  email:    string;
}
export interface User3 {
  name:     string;
  username: string;
  email: string;
}
