import { Flex, Box, Circle, useColorModeValue } from '@chakra-ui/react';
import { getTimelineIcon } from '../../../utils';

const Splitter = ({ isLastElement, type }) => {
  const bgColor = useColorModeValue('#e4e4e7', '#3c3c40');
  return (
    <Flex flexDirection="column" alignItems="center">
      <Circle
        size="40px"
        bg={type === 'post' ? '#112c18' : '#3c3c40'}
        color="white"
      >
        {getTimelineIcon(type)}
      </Circle>
      {!isLastElement && (
        <Box
          width="1px"
          marginTop="12px"
          bg={bgColor}
          mt="4px"
          minHeight="92%"
        />
      )}
    </Flex>
  );
};

export default Splitter;
