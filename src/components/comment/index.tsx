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
      <div className="text-lg">
        {data?.name} ({data?.email})
      </div>
      <h1 className="text-3xl font-bold">{data?.body}</h1>
      <h2 className="mt-10 text-xl font-bold">元の記事</h2>
      {data ? (
        <div className="mt-2">
          <PostByCommentId id={String(data.postId)} />
        </div>
      ) : (
        <p>記事が見つかりません</p>
      )}
    </div>
  );
};
