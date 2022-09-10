import Head from "next/head";
import { Header } from "src/components/Header";
import { UsersComponent } from "../../components/users";
import { User } from "../../type/type";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { API_URL } from "../../utils/const";

type SSRProps = {
  fallback: {
    [p: string]: User | Promise<{ [p: string]: User }>;
  }[];
};

const Users = (props: SSRProps) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <UsersComponent />
      </SWRConfig>
    </div>
  );
};

export default Users;

export const getServerSideProps: GetServerSideProps = async () => {
  const USERS_API_URL = `${API_URL}/users`;
  const users = await fetch(USERS_API_URL);
  const usersData: User[] = await users.json();

  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      },
    },
  };
};
