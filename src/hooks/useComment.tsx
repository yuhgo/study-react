import useSWR from "swr";
import { Comment } from "../type/type";
import { fetcher } from "../utils/fetcher";
import { useRouter } from "next/router";

export const useComment = () => {
  const router = useRouter();
  const url = router.query.id
    ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
    : "null";
  const { data, error } = useSWR<Comment, Error>(url, fetcher);

  return {
    data: data ? data : null,
    error,
    isLoading: !data && !error,
  };
};
