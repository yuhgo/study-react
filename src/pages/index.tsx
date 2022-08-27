import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Posts } from "../components/posts";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
