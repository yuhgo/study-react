import "src/styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { SWRConfig } from "swr";
import { fetcher } from "../utils/fetcher";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
