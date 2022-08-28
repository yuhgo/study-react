import { useRouter } from "next/router";
import useSWR from "swr";
import { Post, User } from "../components/posts/type";
import { fetcher } from "../utils/fetcher";

export const usePost = () => {
  const router = useRouter();

  const postUrl = router.query.id
    ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
    : "";

  const { data: post, error: postError } = useSWR<Post, Error>(
    postUrl,
    fetcher
  );

  const userUrl = post?.userId
    ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
    : "";

  const { data: user, error: userError } = useSWR<User, Error>(
    userUrl,
    fetcher
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: !post && !postError && !user && !userError,
  };
};
