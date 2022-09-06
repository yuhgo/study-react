import { Header } from "src/components/Header";
import { UserComponent } from "../../../components/user";
import { User } from "../../../type/type";
import { GetServerSideProps, NextPage } from "next";
import { SWRConfig } from "swr";

type SSRProps = {
  fallback: {
    [p: string]: User;
  };
};

const UserId = (props: SSRProps) => {
  const { fallback } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <UserComponent />
    </SWRConfig>
  );
};

export default UserId;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const res = await fetch(API_URL);
  const userData: User = await res.json();

  return {
    props: {
      fallback: {
        [API_URL]: userData,
      },
    },
  };
};
