import Layout from '../../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import { Link } from '../../components/link';

export function secondPost() {
  return (
    <Layout>
      <Head>Second Post - Pre-Rendering</Head>
      <h1> Second post</h1>
      <p>HI</p>
      <h2>
        Back to <Link href="/posts/my-posts">my posts</Link>
      </h2>
    </Layout>
  );
}
