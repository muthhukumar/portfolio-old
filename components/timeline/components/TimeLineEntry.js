import { Flex } from '@chakra-ui/react';
import Header from './Header';
import Splitter from './Splitter';

const TimeLineEntry = ({ title, date, isLastElement, type, children }) => (
  <Flex pb="36px">
    <Splitter isLastElement={isLastElement} type={type} />
    <Flex flexDirection="column" marginLeft="24px">
      <Header title={title} date={date} />
      {children}
    </Flex>
  </Flex>
);

export default TimeLineEntry;
