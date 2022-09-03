import useSWR from "swr";
import { Post } from "../type/type";
import { fetcher } from "../utils/fetcher";

export const usePost = (id: string | string[] | undefined) => {
  const url = id ? `https://jsonplaceholder.typicode.com/posts/${id}` : "null";
  const { data, error } = useSWR<Post, Error>(url, fetcher);

  return {
    data: data ? data : null,
    error,
    isLoading: !data && !error,
  };
};
