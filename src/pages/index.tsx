import Head from "next/head";
import { NextPage } from "next";
import React from "react";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPlaceholderのAPIを色々叩いてみるよ</p>
    </div>
  );
};

export default Index;
