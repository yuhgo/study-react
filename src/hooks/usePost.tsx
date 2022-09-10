import useSWR from "swr";
import { Post } from "../type/type";
import { API_URL } from "../utils/const";

export const usePost = (id: string | string[] | undefined) => {
  const url = id ? `${API_URL}/posts/${id}` : "null";
  const { data, error } = useSWR<Post, Error>(url);

  return {
    data: data ? data : null,
    error,
    isLoading: !data && !error,
  };
};
