import Head from "next/head";
import { Header } from "src/components/Header";
import { CommentsComponent } from "../../components/comments";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </div>
  );
};

export default Comments;
