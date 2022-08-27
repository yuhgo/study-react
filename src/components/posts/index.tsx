import { useCallback, useEffect, useReducer, useState } from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type State = {
  data: Posts[];
  loading: boolean;
  error: any;
};

const initialState: State = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (
  state: State,
  action: { type: string; data: Posts[]; error?: any }
) => {
  switch (action.type) {
    case "end":
      console.log(action);
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default: {
      throw new Error("no such action type!");
    }
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました。");
      }
      const json = await res.json();
      dispatch({ ...state, type: "end", data: json });
    } catch (error: any) {
      dispatch({ ...state, type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div>ローディング中</div>;
  }
  if (state.error) {
    return <div> {state.error.message}</div>;
  }
  if (state.data.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {state.data.map((post) => {
        return <li key={post.id}> {post.title}</li>;
      })}
    </ol>
  );
};
