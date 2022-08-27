import { usePosts } from "../../hooks/usePosts";
import { Post } from "./type";

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
        return <li key={post.id}> {post.title}</li>;
      })}
    </ol>
  );
};
