import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

import { isActivePath } from '../utils/index';

const Navigation = () => {
  const pathname = useRouter().pathname;

  const value = useColorModeValue('white', '#101012');

  const activePathColor = useColorModeValue('#eaf0fc', '#151c29');

  const isActive = isActivePath.bind(
    this,
    pathname.split('/')[1],
    activePathColor
  );

  const activeFontColor = useColorModeValue('#3c82f6', '#93c5fd');

  const getActiveFontColor = isActivePath.bind(
    this,
    pathname.split('/')[1],
    activeFontColor
  );

  return (
    <Box bg={value} py="4px">
      <Flex justifyContent="center">
        <Link href="/">
          <a>
            <Box
              borderRadius="md"
              px={4}
              px="8"
              py="2"
              background={isActive('')}
              mx="2px"
              fontWeight={600}
              color={getActiveFontColor('')}
            >
              Home
            </Box>
          </a>
        </Link>
        {/* <Link href="/about">
          <a>
            <Box
              fontWeight={600}
              borderRadius="md"
              px={4}
              mx="2px"
              px="8"
              py="2"
              background={isActive('about')}
              color={getActiveFontColor('about')}
            >
              About
            </Box>
          </a>
        </Link> */}

        <Link href="/writing">
          <a>
            <Box
              borderRadius="md"
              fontWeight={600}
              px={4}
              mx="2px"
              px="8"
              py="2"
              background={isActive('writing')}
              color={getActiveFontColor('writing')}
            >
              Writing
            </Box>
          </a>
        </Link>

        <Link href="/bookmarks">
          <a>
            <Box
              borderRadius="md"
              mx="2px"
              px={4}
              px="8"
              py="2"
              fontWeight={600}
              background={isActive('bookmarks')}
              color={getActiveFontColor('bookmarks')}
            >
              Bookmarks
            </Box>
          </a>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
