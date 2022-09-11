import Link from "next/link";
import { useFetchArray } from "../../hooks/useFetchArray";
import { API_URL } from "../../utils/const";
import { User } from "../../type/type";

export const UserList = () => {
  const url = `${API_URL}/users`;
  const { data, error, isLoading, isEmpty } = useFetchArray<User, string>(url);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No user found.</p>;
  }

  return (
    <ul className="grid grid-cols-2 gap-6">
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a
                className="
                block
                p-4
                shadow rounded hover:bg-gray-100
                "
              >
                <h1 className="text-xl font-bold truncate">{user.name}</h1>
                <div className="text-lg truncate">{user.email}</div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
