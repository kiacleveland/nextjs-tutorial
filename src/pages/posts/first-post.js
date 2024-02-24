import Head from 'next/head';
//import Script from 'next/script';
import Layout from '../../components/layout';
import { Link } from '../../components/link';
import Image from 'next/image';

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post: Pre-Rendering</h1>
      <p>
        There are two forms opf pre-rendering: static generation or server side
        rendering. The main difference is when the HTML is loaded.
      </p>
      <ul className={'list-inside list-disc'}>
        <li>
          <strong>Static generation</strong> is the method of pre rendering that
          generates HTML at <strong>Build Time</strong>. The pre-rendered HTML
          is <i>reused</i> upon each request.
        </li>
        <li>
          <strong>Server side rendering</strong> is the method that{' '}
          <i>generates</i> HTML on each request.
        </li>
      </ul>
      <Image
        priority
        src="/images/static-generation.png"
        height={700}
        width={700}
        alt="static generation rendering diagram."
      ></Image>
      <Image
        priority
        src="/images/server-side-rendering.png"
        height={700}
        width={700}
        alt="server side rendering diagram."
      ></Image>
      <br></br>
      <p>
        <strong>*Note:</strong> In development mode (when you run npm run dev or
        yarn dev), pages are pre-rendered on every request. This also applies to
        Static Generation to make it easier to develop. When going to
        production, Static Generation will happen once, at build time, and not
        on every request.
      </p>
      <br></br>
      <p>
        PerPage Basis - This is where next.js lets you <strong>choose</strong>{' '}
        which pre-rendering method to use for ech page. You can create a
        &quot;hybrid&quot; Next.js app by using static generation for most
        pages, but Server-side rendering for others.
      </p>
      <h2>
        Back to <Link href="/posts/my-posts">my posts</Link>
      </h2>
      <Image
        priority
        src="/images/per-page-basis.png"
        height={700}
        width={700}
        alt="server side rendering diagram."
      ></Image>
    </Layout>
  );
}
