import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { Link } from '../components/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello Im Kia, please read my <Link href="/posts/my-posts">blog!</Link>
        </p>
        <p>
          (This is a sample website - you&apos;ll be building a site like this
          on <Link href="https://nextjs.org/learn">our Next.js tutorial</Link>.)
        </p>
      </section>
    </Layout>
  );
}
