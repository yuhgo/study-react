import Head from "next/head";
import { Header } from "src/components/Header";
import { UsersComponent } from "../../components/users";

const Users = () => {
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;
