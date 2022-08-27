import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Home = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {posts.length > 0 ? (
        <ol>
          {posts.map((post) => {
            return <li key={post.id}> {post.title}</li>;
          })}
        </ol>
      ) : null}
    </div>
  );
};

export default Home;
