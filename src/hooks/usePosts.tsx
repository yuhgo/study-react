import useSWR from "swr";
import { Post } from "../components/posts/type";

type State = {
  data: Post[];
  loading: boolean;
  error: any;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました。");
  }
  const json = await res.json();

  return json;
};

export const usePosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, error } = useSWR<Post[], Error>(url, fetcher);

  return {
    data: !data ? [] : data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
