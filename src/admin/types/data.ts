import { UserType } from "./enums";

export interface User {
  userId: number;
  userName: string;
  contact: number;
  userType: UserType;
}
