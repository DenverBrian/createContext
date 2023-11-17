import { nanoid } from "nanoid";
import { User } from "./types";

export const userStore: User[] = [
  {
    id: nanoid(),
    email: "denver.talamayan@gmail.com",
    password: "123",
    firstName: "denver",
    lastName: "Brian",
    role: "USER",
  },
  {
    id: nanoid(),
    email: "super.pogi@gmail.com",
    password: "123456",
    firstName: "super",
    lastName: "pogi",
    role: "USER",
  },
];


