import Layout from '../../components/layout';
import Head from 'next/head';
import { Link } from '../../components/link';
import Image from 'next/image';

export default function secondPost() {
  return (
    <Layout>
      <Head>Second Post </Head>
      <h1>
        {' '}
        Second Post - When to use Static Generation v.s. Server Side Rendering
      </h1>
      <p>
        See <Link href="/posts/first-post">previous post</Link> to learn about
        Pre-Rendering options.
      </p>
      <br></br>
      <p>
        <strong>Static generation</strong> is reccomended to be used (with and
        without data) whenever possible! This is because a page can be built
        once and served by CDN, making it a lot faster than having the server
        render the page for every request. Below are some of the many types of
        pages that static generation can be used in.
      </p>
      <br></br>
      <ul className={'list-inside list-disc'}>
        <li>Marketing pages</li>
        <li>Blog Posts</li>
        <li>E-commerce product listings</li>
        <li>Help and documentation</li>
      </ul>{' '}
      <br></br>
      <p>
        When would static generation be a <strong>not</strong> be a good idea?
      </p>
      <p>
        Answer: Not a good idea if you cannot pre-render a page ahead of a
        user&apos;s request. Maybe your page shows frequently updated data, and
        the page content changes on every request.
      </p>
      <h2>
        Back to <Link href="/posts/my-posts">my posts</Link>
      </h2>
    </Layout>
  );
}
