import useSWRImmutable from "swr/immutable";
import { User } from "../type/type";
import { useRouter } from "next/router";
import { API_URL } from "../utils/const";

export const useUser = () => {
  const router = useRouter();
  const url = router.query.id ? `${API_URL}/users/${router.query.id}` : "null";
  const { data, error } = useSWRImmutable<User, Error>(url);

  return {
    data: data ? data : null,
    error,
    isLoading: !data && !error,
  };
};
