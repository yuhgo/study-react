import useSWR from "swr";
import { Post } from "../type/type";
import { fetcher } from "../utils/fetcher";
import { useRouter } from "next/router";

export const usePost = () => {
  const router = useRouter();

  const url = router.query.id
    ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
    : "null";
  const { data, error } = useSWR<Post, Error>(url, fetcher);

  return {
    data: data ? data : null,
    error,
    isLoading: !data && !error,
  };
};
