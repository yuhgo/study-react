import Link from "next/link";
import { useFetchArray } from "../../hooks/useFetchArray";
import type { Comment } from "../../type/type";
import { API_URL } from "../../utils/const";

export const CommentList = () => {
  const url = `${API_URL}/comments`;
  const { data, error, isLoading, isEmpty } = useFetchArray<Comment, string>(
    url
  );

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
            <Link href={`/comments/${comment.id}`} prefetch={false}>
              <a className="block hover:text-blue-500">{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
