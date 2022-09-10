import useSWRImmutable from "swr/immutable";
import type { Comment, Post, User } from "../type/type";
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

// posts
// export const usePosts = () => {
//   const url = `${API_URL}/posts`;
//   return useFetchArray<Post, string>(url);
// };
export const usePostsByUserId = (id: number) => {
  return useFetchArray<Post, string | null>(
    id ? `${API_URL}/posts?userId=${id}` : null
  );
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
