import { createUser } from "../interfaces/user";
import axios from "../api/request";

export const loginRequest = async (email: string, password: string) =>
  axios.post("/auth/login", {
    email,
    password,
  });

export const registerRequest = async (data: createUser) =>
  axios.post("/api/auth/register", data);

export const profileRequest = async () => axios.get("/api/auth/profile");