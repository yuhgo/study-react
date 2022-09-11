import useSWRImmutable from "swr/immutable";
import type { Comment, User } from "../type/type";
import { API_URL } from "../utils/const";

export const useFetchArray = <T, U extends string | null>(url: U) => {
  const { data, error } = useSWRImmutable<T[], Error>(url);

  return {
    data: data ? data : [],
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

// users
export const useUsers = () => {
  const url = `${API_URL}/users`;
  return useFetchArray<User, string>(url);
};

// comments
export const useComments = () => {
  const url = `${API_URL}/comments`;
  return useFetchArray<Comment, string>(url);
};
export const useCommentsByPostId = (id: number) => {
  return useFetchArray<Comment, string | null>(
    id ? `${API_URL}/comments?postId=${id}` : null
  );
};
