import Head from "next/head";
import { CommentsByPostId } from "../comments/CommentsByPostId";
import { UserByUserId } from "../user/UserByUserId";
import { usePost } from "../../hooks/usePost";
import { useRouter } from "next/router";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

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
      {data ? <UserByUserId id={data.userId} /> : null}
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="mt-2 text-xl text-gray-900">{data?.body}</p>
      <h2 className="mt-10 text-xl font-bold">コメント一覧</h2>
      <div className="mt-2">
        {data ? <CommentsByPostId id={data.id} /> : null}
      </div>
    </div>
  );
};
