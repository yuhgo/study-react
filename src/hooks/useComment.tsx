import useSWR from "swr";
import { Comment } from "../type/type";
import { useRouter } from "next/router";
import { API_URL } from "../utils/const";

export const useComment = () => {
  const router = useRouter();
  const url = router.query.id
    ? `${API_URL}/comments/${router.query.id}`
    : "null";
  const { data, error } = useSWR<Comment, Error>(url);

  return {
    data: data ? data : null,
    error,
    isLoading: !data && !error,
  };
};
