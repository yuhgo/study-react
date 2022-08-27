import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
