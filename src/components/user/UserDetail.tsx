import { PostListByUserId } from "../post/PostListByUserId";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../utils/const";
import { useRouter } from "next/router";
import { User } from "../../type/type";

export const UserDetail = () => {
  const router = useRouter();

  const { data, error, isLoading } = useFetch<User, string | null>(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-3xl">{data?.name}</h1>
      <h2 className="mt-10 text-xl font-bold">詳細</h2>
      <ul className="list-inside list-disc mt-2 text-xl">
        <li>アカウント名：{data?.username}</li>
        <li>メール：{data?.email}</li>
        <li>電話番号：{data?.phone}</li>
        <li>Webサイト：{data?.website}</li>
        <li>住所：{data?.address.city}</li>
        <li>勤務先：{data?.company.name}</li>
      </ul>
      <h2 className="mt-10 text-xl font-bold">投稿</h2>
      <div className="mt-2">
        {data ? <PostListByUserId id={data.id} /> : <p>データがありません</p>}
      </div>
    </div>
  );
};
