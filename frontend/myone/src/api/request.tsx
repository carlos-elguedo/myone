import axios from "axios";
import { useAuthStore } from "../store/auth";

const baseURL = process.env.API_URL || "http://localhost:3001";

const authApi = axios.create({
    baseURL,
    withCredentials: true,
});

authApi.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});


export default authApi;