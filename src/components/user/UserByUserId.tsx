import useSWR from "swr";
import { User } from "../../type/type";
import { fetcher } from "../../utils/fetcher";
import { FC } from "react";

type UserByPostIdProps = {
  id: number;
};

export const UserByUserId: FC<UserByPostIdProps> = (props) => {
  const { id } = props;

  const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

  const { data, error } = useSWR<User, Error>(userUrl, fetcher);

  if (!data && !error) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Created by{data?.name}</div>;
};
