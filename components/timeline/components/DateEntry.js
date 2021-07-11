import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const DateEntry = ({ year, month }) => {
  const bgColor = useColorModeValue('#e4e4e7', '#3c3c40');
  return (
    <Box
      alignItems="center"
      justifyContent="space-between"
      display="flex"
      marginLeft="64px"
      mb="30px"
      mt="20px"
    >
      <Text fontWeight="700" fontSize="xl">
        {`${month}, ${year}`}
      </Text>
      <Box flex="1" marginLeft="16px" height="1px" bg={bgColor} />
    </Box>
  );
};

export default DateEntry;
