import { UserDetail } from "../../../components/user/UserDetail";
import { User } from "../../../type/type";
import { GetServerSideProps, NextPage } from "next";
import { SWRConfig } from "swr";
import { API_URL } from "../../../utils/const";

type SSRProps = {
  fallback: {
    [p: string]: User;
  };
};

const UserId = (props: SSRProps) => {
  const { fallback } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <UserDetail />
    </SWRConfig>
  );
};

export default UserId;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  // ユーザー情報の取得
  const USER_API_URL = `${API_URL}/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData: User = await user.json();

  // ユーザーの投稿の取得
  const POSTS_API_URL = `${API_URL}/users/${userData.id}/posts`;
  const posts = await fetch(POSTS_API_URL);
  const postsData: User = await posts.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData,
      },
    },
  };
};
