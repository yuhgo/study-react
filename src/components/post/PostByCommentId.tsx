import { usePost } from "../../hooks/usePost";
import { FC } from "react";
import Link from "next/link";

type PostByCommentIdProps = {
  id: string;
};

export const PostByCommentId: FC<PostByCommentIdProps> = (props) => {
  const { id } = props;

  const { data, error, isLoading } = usePost(id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${data?.id}`}>
      <a>{data?.title}</a>
    </Link>
  );
};
