import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { AttachmentIcon, EditIcon, StarIcon, LinkIcon } from '@chakra-ui/icons';

import {
  GET_ALL_BOOKMARKS,
  GET_PERSONAL_SITE_BOOKMARKS,
  GET_READING_BOOKMARKS,
  GET_PORTFOLIO_BOOKMARKS,
} from '../../graphql/queries';

import BookmarkTablePanel from './components/BookmarkTablePanel';

const CustomTab = () => {
  return (
    <Tabs isFitted maxWidth="95%" mx="auto" mt="38px" isLazy>
      <TabList>
        <Tab fontWeight="600">
          <AttachmentIcon mr="6px" />
          All
        </Tab>
        <Tab fontWeight="600">
          <EditIcon mr="6px" />
          Reading
        </Tab>
        <Tab fontWeight="600">
          <StarIcon mr="6px" />
          Portfolio
        </Tab>
        <Tab fontWeight="600">
          <LinkIcon mr="6px" />
          Site
        </Tab>
      </TabList>

      <TabPanels pt="1.8rem" px="10px">
        <TabPanel p={0}>
          <BookmarkTablePanel
            query={GET_ALL_BOOKMARKS}
            icon={<AttachmentIcon />}
          />
        </TabPanel>

        <TabPanel p={0}>
          <BookmarkTablePanel
            query={GET_READING_BOOKMARKS}
            icon={<StarIcon />}
          />
        </TabPanel>

        <TabPanel p={0}>
          <BookmarkTablePanel
            query={GET_PORTFOLIO_BOOKMARKS}
            icon={<LinkIcon />}
          />
        </TabPanel>

        <TabPanel p={0}>
          <BookmarkTablePanel
            query={GET_PERSONAL_SITE_BOOKMARKS}
            icon={<EditIcon />}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CustomTab;
