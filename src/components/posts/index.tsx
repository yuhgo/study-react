import type { Post } from "../../type/type";
import Link from "next/link";
import { usePosts } from "../../hooks/useFetchArray";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div> {error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data.map((post: Post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ol>
  );
};
