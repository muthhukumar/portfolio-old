import Link from 'next/link';
import { Text, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { useWindowSize } from '../lib/window';

const Footer = () => {
  const { width } = useWindowSize();
  if (width === undefined) return null;

  const borderColor = useColorModeValue('#e4e4e7', '#3c3c40');

  const getCols = () => (width < 768 ? 1 : 3);

  const bgColor = useColorModeValue('#f4f4f5', '#19191c');

  const getBg = () => (width < 768 ? bgColor : 'none');

  return (
    <SimpleGrid
      columns={getCols()}
      spacingY={5}
      py="96px"
      px="24px"
      maxWidth="640px"
      margin="0 auto"
      bg={getBg()}
      borderTop={`1px solid ${borderColor}`}
    >
      <Link href="/">
        <a>
          <Text fontWeight="700" fontSize="1rem">
            Home
          </Text>
        </a>
      </Link>
      <Link href="/writing">
        <a>
          <Text fontWeight="700" fontSize="1rem">
            Writing
          </Text>
        </a>
      </Link>
      <a
        href="https://twitter.com/_Muthukumar_P"
        target="_blank"
        style={{ fontWeight: 700, fontSize: '1rem' }}
      >
        @_Muthukumar_P
      </a>
      <Link href="/bookmarks">
        <a>
          <Text fontWeight="700" fontSize="1rem">
            Bookmarks
          </Text>
        </a>
      </Link>
    </SimpleGrid>
  );
};

export default Footer;
