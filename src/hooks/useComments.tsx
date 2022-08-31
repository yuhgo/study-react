import useSWR from "swr";
import { Comment } from "../type/type";
import { fetcher } from "../utils/fetcher";

export const useComments = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const { data, error } = useSWR<Comment[], Error>(url, fetcher);

  return {
    data: data ? data : [],
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
