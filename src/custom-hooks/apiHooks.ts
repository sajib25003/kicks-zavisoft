import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Method = "post" | "put" | "patch" | "delete";

export const useGet = <T>(key: string[], url: string) => {
  return useQuery<T>({
    queryKey: key,
    queryFn: () => apiClient.get<T>(url),
  });
};

export const useApiMutation = <T, P = unknown>(
  method: Method,
  url: string,
  invalidateKeys?: string[]
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload?: P) => {
      if (method === "delete") {
        return apiClient.delete<T>(url);
      }
      return apiClient[method]<T, P>(url, payload as P);
    },
    onSuccess: () => {
      invalidateKeys?.forEach((key) =>
        queryClient.invalidateQueries({ queryKey: [key] })
      );
    },
  });
};
