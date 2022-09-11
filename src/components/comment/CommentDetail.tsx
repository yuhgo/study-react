import { PostTitleByCommentId } from "../post/PostTitleByCommentId";
import { API_URL } from "../../utils/const";
import { Comment } from "../../type/type";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useFetch";

export const CommentDetail = () => {
  const router = useRouter();

  const url = router.query.id
    ? `${API_URL}/comments/${router.query.id}`
    : "null";
  const { data, error, isLoading } = useFetch<Comment, string | null>(url);

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
      <div className="mt-2">
        {data ? (
          <PostTitleByCommentId id={String(data.postId)} />
        ) : (
          <p>記事が見つかりません</p>
        )}
      </div>
    </div>
  );
};
