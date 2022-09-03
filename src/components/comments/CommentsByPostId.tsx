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
    <ul className="space-y-2">
      {data.map((comment: Comment) => {
        return (
          <li key={comment.id} className="border-b pb-2">
            <Link href={`/comments/${comment.id}`}>
              <a className="block text-xl hover:text-blue-500">
                {comment.body}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
