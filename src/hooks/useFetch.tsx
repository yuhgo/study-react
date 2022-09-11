import useSWRImmutable from "swr/immutable";

export const useFetch = <T, U extends string | null>(url: U) => {
  const { data, error } = useSWRImmutable<T, Error>(url);

  return {
    data: data ? data : null,
    error,
    isLoading: !data && !error,
  };
};
