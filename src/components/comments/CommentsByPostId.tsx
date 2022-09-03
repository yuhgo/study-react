import { useCommentsByPostId } from "../../hooks/useFetchArray";
import { Comment } from "../../type/type";
import Link from "next/link";
import { FC } from "react";

type CommentsByPostIdProps = { id: number };

export const CommentsByPostId: FC<CommentsByPostIdProps> = (props) => {
  const { id } = props;

  const { data, error, isLoading, isEmpty } = useCommentsByPostId(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No comments found.</p>;
  }

  return (
    <ol>
      {data.map((comment: Comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
