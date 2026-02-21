import axios from "axios";

export const api = axios.create({
  //@ts-expect-error: no error
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // check from local storage and update
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
