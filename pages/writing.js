import Link from 'next/link';
import {
  UnorderedList,
  ListItem,
  Center,
  Heading,
  List,
  Box,
  Flex,
} from '@chakra-ui/react';
import { getSortedPostsData } from '../lib/posts';

import Page from '../components/Page';

const Writing = ({ allPostsData }) => (
  <Page title="Thoughts" description="Thinking out loud about development, building and trying out new things.">
    <Flex flexDirection="column">
      <Center>
        <Heading fontWeight="800" marginTop="68px" fontSize="5xl">
          Thoughts
        </Heading>
      </Center>
      <Heading fontWeight="600" marginTop="18px" fontSize="2xl" textAlign="center">
        Thinking out loud about development, building and trying out new things.
      </Heading>
    </Flex>
    <UnorderedList listStyleType="none" mt="78px" ml="0">
      {allPostsData.map(({ id, date, title, description }) => (
        <ListItem key={id} mb="20px">
          <Link href={`/writing/${id}`}>
            <a>
              <Box color="#3c82f6" fontWeight="600" fontSize="1.2rem">
                {title}
              </Box>
            </a>
          </Link>
          <Box fontWeight="600" fontSize="1rem" mt="2px">
            {description}
          </Box>
          <Box color="#a1a1aa" fontSize="sm" fontWeight="600">
            {date.toString()}
          </Box>
        </ListItem>
      ))}
    </UnorderedList>
  </Page>
);

export default Writing;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
