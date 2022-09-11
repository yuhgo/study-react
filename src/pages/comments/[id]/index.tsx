import { GetStaticPaths, GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { ParsedUrlQuery } from "querystring";
import { CommentDetail } from "../../../components/comment/CommentDetail";
import { Comment } from "../../../type/type";
import { API_URL } from "../../../utils/const";

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
        <CommentDetail />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;

export const getStaticPaths: GetStaticPaths = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments?_limit=10`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData: Comment[] = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as Params;

  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFound: true,
      revalidate: 1000,
    };
  }

  const commentData: Comment = await comment.json();
  console.log(`comment/${id}がSG化されました`);

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
    revalidate: 1000,
  };
};
