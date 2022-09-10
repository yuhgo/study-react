import useSWR from "swr";
import { User } from "../../type/type";
import { FC } from "react";
import { API_URL } from "../../utils/const";

type UserByPostIdProps = {
  id: number;
};

export const UserByUserId: FC<UserByPostIdProps> = (props) => {
  const { id } = props;

  const userUrl = `${API_URL}/users/${id}`;

  const { data, error } = useSWR<User, Error>(userUrl);

  if (!data && !error) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-lg">Created by{data?.name}</div>;
};
