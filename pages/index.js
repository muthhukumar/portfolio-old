import { Box, Flex, Text, Center, Heading } from '@chakra-ui/react';
import Link from 'next/link';

import Page from '../components/Page';
import Timeline from '../components/timeline';

const Home = () => (
  <Page description="Full stack developer">
    <Flex flexDirection="column">
      <Heading textAlign="center" fontWeight="800" marginTop="68px">
        Hi, I'm Muthu
      </Heading>
      <Text
        fontWeight="600"
        textAlign="center"
        fontSize="1.5rem"
        marginTop="24px"
      >
        I'm a Mern full stack developer living in Kangayam. I'm currently
        building web and mobile applications at Actyv.
      </Text>
      <Box marginTop="28px" mb="74px">
        <Center>
          <Link href="#">
            <a>
              <Box
                px="12px"
                fontWeight="600"
                py="8px"
                color="white"
                bg="#3c82f6"
                borderRadius="lg"
                marginRight="16px"
              >
                More about me
              </Box>
            </a>
          </Link>
          <a href="https://twitter.com/_Muthukumar_P">
            <Box
              px="12px"
              fontWeight="600"
              py="8px"
              color="white"
              bg="#27282a"
              borderRadius="lg"
            >
              Follow me on Twitter
            </Box>
          </a>
        </Center>
      </Box>
      <Timeline />
    </Flex>
  </Page>
);

export default Home;
