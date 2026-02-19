import { api } from "./axios";

export const apiClient = {
  get: <T>(url: string) => api.get<T>(url).then((res) => res.data),
  post: <T, P>(url: string, payload: P) =>
    api.post<T>(url, payload).then((res) => res.data),
  put: <T, P>(url: string, payload: P) =>
    api.put<T>(url, payload).then((res) => res.data),
  patch: <T, P>(url: string, payload: P) =>
    api.patch<T>(url, payload).then((res) => res.data),
  delete: <T>(url: string) => api.delete<T>(url).then((res) => res.data),
};
