import Head from "next/head";
import { Header } from "src/components/Header";
import { PostList } from "../../components/post/PostList";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostList />
    </div>
  );
};

export default Posts;
