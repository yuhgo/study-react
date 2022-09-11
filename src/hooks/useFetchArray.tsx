import useSWRImmutable from "swr/immutable";

export const useFetchArray = <T, U extends string | null>(url: U) => {
  const { data, error } = useSWRImmutable<T[], Error>(url);

  return {
    data: data ? data : [],
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
