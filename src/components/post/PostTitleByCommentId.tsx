import { FC } from "react";
import Link from "next/link";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../utils/const";

type PostByCommentIdProps = {
  id: string;
};

export const PostTitleByCommentId: FC<PostByCommentIdProps> = (props) => {
  const { id } = props;

  const { data, error, isLoading } = useFetch(
    id ? `${API_URL}/posts/${id}` : null
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${data?.id}`}>
      <a className="text-lg hover:text-blue-500">{data?.title}</a>
    </Link>
  );
};
