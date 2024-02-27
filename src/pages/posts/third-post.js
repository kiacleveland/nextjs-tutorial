import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';

export default function thirdPost() {
  return (
    <Layout>
      <Head>
        <title>Third Post: Static Generation With and Without Data</title>
      </Head>
      <h1>Static Generation Without Data</h1>
      <p>
        This is for pages that can be generated WITHOUT fetching external data
        at build time. However, for some pages, you might not be able to render
        the HTML without first fetching some external data. Maybe you need to
        access the file system, fetch external API, or query your database at
        build time. Next.js supports this case — Static Generation with data —
        out of the box. See below for more.
      </p>
      <Image
        priority
        src="/images/static-generation-without-data.png"
        height={700}
        width={700}
        alt="static generation rendering without data diagram."
      ></Image>
      <br></br>
      <h1>Static Generation With Data</h1>
      <p></p>
      <Image
        priority
        src="/images/static-generation-with-data.png"
        height={700}
        width={700}
        alt="static generation rendering without data diagram."
      ></Image>
      <h1>
        Using <code>getStaticProps</code> for Static Generation with Data
      </h1>
      <br></br>
      <p>
        How does <code>getStaticProps</code> work in Next.js? When a component
        is exported, you can also export an <code>asynch</code> function called{' '}
        <code>getStaticProps</code>. If you do this, then:{' '}
      </p>
      <br></br>
      <ul className={'list-inside list-disc'}>
        <li>
          <code>getStaticProps</code> runs at build time
        </li>
        <li>
          Inside the function, you can fetch external data and send it to the
          page as <strong>props</strong>.
        </li>
      </ul>
      <br></br>
      <p>
        Essentially, getStaticProps allows you to tell Next.js: &apos;Hey, this
        page has some data dependencies — so when you pre-render this page at
        build time, make sure to resolve them first!&apos;
      </p>
      <p>
        <strong>*Note: </strong> In development mode,{' '}
        <code>getStaticProps</code> runs on each request instead.
      </p>
      <br></br>
      <Image
        priority
        src="/images/static-generation-with-data.png"
        height={700}
        width={700}
        alt="code block showing getStaticProps in action."
      ></Image>
    </Layout>
  );
}
