import Page from '../../components/Page';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/react';

export default function Post({ postData }) {
  return (
    <Page title={postData.title} description={postData.description}>
      <article style={{ paddingTop: '28px' }}>
        <Heading as="h1" fontSize="2.4rem" fontWeight="800" marginBottom="0">
          {postData.title}
        </Heading>
        <Text color="#a1a1aa" mt="4px" fontSize="sm" fontWeight="600" mb="26px">
          {postData.date}
        </Text>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
