export class User {
  username: String;
  password: String;
  role: Role;
}

export enum Role {
  ROLE_USER,
  ROLE_ADMIN,
}
