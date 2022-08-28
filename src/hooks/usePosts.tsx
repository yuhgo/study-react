import useSWR from "swr";
import { Post } from "../components/posts/type";
import { fetcher } from "../utils/fetcher";

export const usePosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, error } = useSWR<Post[], Error>(url, fetcher);

  return {
    data: !data ? [] : data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
