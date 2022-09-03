import { useComment } from "../../hooks/useComment";
import { PostByCommentId } from "../post/PostByCommentId";

export const CommentComponent = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{data?.body}</h1>
      <ul>
        <li>{data?.name}</li>
        <li>{data?.email}</li>
      </ul>
      <h2>元の記事</h2>
      {data ? (
        <PostByCommentId id={String(data.postId)} />
      ) : (
        <p>記事が見つかりません</p>
      )}
    </div>
  );
};
