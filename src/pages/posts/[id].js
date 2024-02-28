// Pages that begin with [ and end with ] are dynamic routes in Next.js.
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import { utils } from 'prettier/doc';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths, //contains the array of known paths returned by getAllPostIds(),
    //which include the params defined by pages/posts/[id].js
    fallback: false,
  };
}

//The post page is using the getPostData function
// in getStaticProps to get the post data and return it as props.
export async function getStaticProps({ params }) {
  //fetch necessary data for the blog using params.id
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
