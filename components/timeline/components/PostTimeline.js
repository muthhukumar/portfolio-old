import Link from 'next/link';
import { Text, Flex, useColorModeValue } from '@chakra-ui/react';

const PostTimeLine = ({ postUrl, title, description }) => {
  const bgColor = useColorModeValue('white', '#19191c');
  const fontColor = useColorModeValue('black', 'white');
  return (
    <Link href={postUrl}>
      <a>
        <Flex
          flexDirection="column"
          mt="14px"
          bg={bgColor}
          p="14px"
          borderRadius="md"
        >
          <Text fontWeight={600} fontSize="md" color={fontColor}>
            {title}
          </Text>
          <Text fontWeight={500} mt="4px" fontSize="md" color="#a1a1aa">
            {description}
          </Text>
        </Flex>
      </a>
    </Link>
  );
};

export default PostTimeLine;
