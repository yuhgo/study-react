import Head from "next/head";
import { CommentsByPostId } from "../comments/CommentsByPostId";
import { UserByUserId } from "../user/UserByUserId";
import { usePost } from "../../hooks/usePost";

export const Post = () => {
  const { data, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      {data ? <UserByUserId id={data.userId} /> : null}
      {data ? <CommentsByPostId id={data.id} /> : null}
    </div>
  );
};
