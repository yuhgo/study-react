import { User } from "../../type/type";
import { FC } from "react";
import { API_URL } from "../../utils/const";
import { useFetch } from "../../hooks/useFetch";

type UserByPostIdProps = {
  id: number;
};

export const UserNameByUserId: FC<UserByPostIdProps> = (props) => {
  const { id } = props;

  const userUrl = `${API_URL}/users/${id}`;

  const { data, error, isLoading } = useFetch<User, string | null>(userUrl);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-lg">Created by{data?.name}</div>;
};
