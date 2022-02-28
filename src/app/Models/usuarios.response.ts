export interface Respuesta1 {
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
  email:    string;
}
