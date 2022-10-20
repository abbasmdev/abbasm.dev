import type { NextPage } from "next";
import Head from "next/head";
import Home from "../domains/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Abbas Moharami - JavaScript Developer</title>
        <meta
          name="description"
          content="Abbas Moharami is a JavaScript and React.js Developer who loves making cool stuff with them"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
};

export default HomePage;
