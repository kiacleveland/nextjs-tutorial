import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import { Link } from '../../components/link';

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>
        Here I am documenting my journey learning about React, JavaScript and
        the various things I can accomplish with the NextJS framework! Feel free
        to mosy around.
      </p>
      {/* <h2>
        <Link href="/">Back to home</Link>
      </h2> */}
    </Layout>
  );
}
