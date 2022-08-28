import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "../../components/posts";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
