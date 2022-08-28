import "src/styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { Layout } from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
