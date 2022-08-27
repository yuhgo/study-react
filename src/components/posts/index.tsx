import { useCallback, useEffect, useState } from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Posts = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました。");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div> {error.message}</div>;
  }
  if (posts.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {posts.map((post) => {
        return <li key={post.id}> {post.title}</li>;
      })}
    </ol>
  );
};
