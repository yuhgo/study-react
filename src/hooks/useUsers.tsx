import useSWR from "swr";
import { User } from "../type/type";
import { fetcher } from "../utils/fetcher";

export const useUsers = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, error } = useSWR<User[], Error>(url, fetcher);

  return {
    data: data ? data : [],
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
