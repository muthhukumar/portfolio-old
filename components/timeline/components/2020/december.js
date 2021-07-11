import PostTimeLine from '../PostTimeline';
import DateEntry from '../DateEntry';
import TimeLineEntry from '../TimeLineEntry';
import { Image, Center, Text } from '@chakra-ui/react';

const December = () => {
  return (
    <>
      <DateEntry year={2020} month="December" />
      <TimeLineEntry
        title="Personal website update"
        date="December 30, 2020"
        type="announcement"
        isLastElement={false}
      >
        <Text mt="12px" fontWeight="500">
          Worked on the Home and Writing page of Personal website. Previous used DB to store
          and retreive the timeline data. But changed that to manual entry.
        </Text>
        <Center mt="4px">
          <Image src="/assets/homepage.png" boxSize="90%" objectFit="fill" />
        </Center>
      </TimeLineEntry>
      <TimeLineEntry
        title="Published new post"
        date="December 14, 2020"
        type="post"
        isLastElement={false}
      >
        <PostTimeLine
          title="My Journey with Vim"
          description="In this article, I explain why and how I started using Vim and my journey with Vim"
          postUrl="/writing/vim-journey"
        />
      </TimeLineEntry>
    </>
  );
};

export default December;
