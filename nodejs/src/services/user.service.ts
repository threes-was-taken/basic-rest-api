import { User } from "../schemas/user.schema";
import { randomUUID } from "crypto";

const users: User[] = [];

export const getAllUsers = async (): Promise<User[]> => users;

export const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const newUser: User = { id: randomUUID(), ...user };
  users.push(newUser);
  return newUser;
};

export default {
  getAllUsers,
  createUser,
};
