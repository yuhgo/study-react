import useSWR from "swr";
import type { Comment, Post, User } from "../type/type";
import { fetcher } from "../utils/fetcher";

export const useFetchArray = <T, U extends string | null>(url: U) => {
  const { data, error } = useSWR<T[], Error>(url, fetcher);

  return {
    data: data ? data : [],
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
  const url = `${API_URL}/comments`;
  return useFetchArray<Comment, string>(url);
};

export const usePosts = () => {
  const url = `${API_URL}/posts`;
  return useFetchArray<Post, string>(url);
};

export const useUsers = () => {
  const url = `${API_URL}/users`;
  return useFetchArray<User, string>(url);
};

export const useCommentsByPostsId = (id: number) => {
  return useFetchArray<Comment, string | null>(
    id ? `${API_URL}/comments?postId=${id}` : null
  );
};

export const usePostsByUserId = (id: number) => {
  return useFetchArray<Post, string | null>(
    id ? `${API_URL}/posts?userId=${id}` : null
  );
};
