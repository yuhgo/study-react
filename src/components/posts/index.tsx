import { usePosts } from "../../hooks/usePosts";
import { Post } from "../../type/type";
import Link from "next/link";
import { useEffect } from "react";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();
  useEffect(() => {}, [data]);

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
