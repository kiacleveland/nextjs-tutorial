import Layout from '../../components/layout';
import { Link } from '../../components/link';
import Head from 'next/head';

export default function myPosts() {
  return (
    <Layout>
      <Head>
        <title>My Posts</title>
      </Head>
      <p>
        Here I am documenting my journey learning about React, JavaScript and
        the various things I can accomplish with the NextJS framework! Feel free
        to mosey around and read up on my various thoughts.
      </p>
      <p>
        Post <Link href="/posts/first-post">1</Link>
      </p>
      <p>
        Post <Link href="/posts/second-post">2</Link>
      </p>
    </Layout>
  );
}
