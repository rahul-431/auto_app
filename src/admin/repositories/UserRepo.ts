import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../services/userApi";
import { User } from "../types/data";

export interface UserRepo {
  getAllUsers(): Promise<User | null>;
}
export const UserRepoImpl = (): UserRepo => {
    getAllUsers(): Promise<User | null>;
};
