import Head from "next/head";
import { CommentListByPostId } from "../comment/CommentListByPostId";
import { UserNameByUserId } from "../user/UserNameByUserId";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../utils/const";
import { Post } from "../../type/type";

export const PostDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch<Post, string | null>(
    router.query.id ? `${API_URL}/posts/${router.query.id}` : null
  );

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
      {data ? <UserNameByUserId id={data.userId} /> : null}
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="mt-2 text-xl text-gray-900">{data?.body}</p>
      <h2 className="mt-10 text-xl font-bold">コメント一覧</h2>
      <div className="mt-2">
        {data ? <CommentListByPostId id={data.id} /> : null}
      </div>
    </div>
  );
};
