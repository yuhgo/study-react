import useSWR from "swr";
import { User } from "../type/type";
import { fetcher } from "../utils/fetcher";
import { useRouter } from "next/router";

export const useUser = () => {
  const router = useRouter();
  const url = router.query.id
    ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
    : "null";
  const { data, error } = useSWR<User, Error>(url, fetcher);

  return {
    data: data ? data : null,
    error,
    isLoading: !data && !error,
  };
};