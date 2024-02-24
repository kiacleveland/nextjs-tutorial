import Head from 'next/head';
//import Script from 'next/script';
import Layout from '../../components/layout';
import { Link } from '../../components/link';

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post - Pre-Rendering</h1>
      <p>
        There are two forms opf pre-rendering: static generation or server side
        rendering. The main difference is when the HTML is loaded.
      </p>
      <ul>
        <strong>Static generation</strong> is the method of pre rendering that
        generates HTML at <strong>Build Time</strong>. The pre-rendered HTML is{' '}
        <i>reused</i> upon each request.
      </ul>
      <ul>
        <strong>Server side rendering</strong> is the method that{' '}
        <i>generates</i> HTML on each request.
      </ul>
      <h2>
        Back to <Link href="/posts/my-posts">my posts</Link>
      </h2>
    </Layout>
  );
}
