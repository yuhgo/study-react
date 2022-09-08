import Head from "next/head";
import { Header } from "src/components/Header";
import { CommentsComponent } from "../../components/comments";
import { GetStaticProps } from "next";
import { Comment } from "../../type/type";
import { SWRConfig } from "swr";

type SGProps = {
  fallback: {
    [p: string]: Comment[];
  };
};

const Comments = (props: SGProps) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentsComponent />
      </SWRConfig>
    </div>
  );
};

export default Comments;

export const getStaticProps: GetStaticProps = async () => {
  const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData: Comment[] = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
  };
};
