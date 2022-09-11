import Head from "next/head";
import { CommentList } from "../../components/comment/CommentList";
import { GetStaticProps } from "next";
import { Comment } from "../../type/type";
import { SWRConfig } from "swr";
import { API_URL } from "../../utils/const";

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
        <CommentList />
      </SWRConfig>
    </div>
  );
};

export default Comments;

export const getStaticProps: GetStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData: Comment[] = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 10,
  };
};
