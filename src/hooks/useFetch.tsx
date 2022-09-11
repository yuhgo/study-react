import useSWRImmutable from "swr/immutable";
import { Post } from "../type/type";

export const useFetch = <U extends string | null>(url: U) => {
  const { data, error } = useSWRImmutable<Post, Error>(url);

  return {
    data: data ? data : null,
    error,
    isLoading: !data && !error,
  };
};
