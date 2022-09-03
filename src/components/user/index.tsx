import { useUser } from "../../hooks/useUser";
import { PostsByUserId } from "../posts/PostsByUserId";

export const UserComponent = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{data?.name}</h1>
      <h2>詳細</h2>
      <ul>
        <li>{data?.email}</li>
        <li>{data?.username}</li>
        <li>{data?.address.city}</li>
        <li>{data?.phone}</li>
        <li>{data?.company.name}</li>
      </ul>
      <h2>投稿</h2>
      {data ? <PostsByUserId id={data.id} /> : <p>データがありません</p>}
      <h2>コメント</h2>
    </div>
  );
};
