import { Header } from "src/components/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { ParsedUrlQuery } from "querystring";
import { CommentComponent } from "../../../components/comment";
import { Comment } from "../../../type/type";

type SGProps = {
  fallback: {
    [p: string]: Comment;
  };
};

type Params = ParsedUrlQuery & {
  id: number;
};

const CommentsId = (props: SGProps) => {
  const { fallback } = props;

  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentComponent />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;

export const getStaticPaths: GetStaticPaths = async () => {
  const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData: Comment[] = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as Params;

  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  const commentData: Comment = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};
