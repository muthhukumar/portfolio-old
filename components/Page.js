import Head from 'next/head';
import { Fade, Box } from '@chakra-ui/react';

import { useWindowSize } from '../lib/window';
import MobileNavigation from './MobileNavigation';
import SEO from './SEO';

import Navigation from './Navigation';
import Footer from './Footer';

const Page = ({ title, description, children }) => {
  const { width } = useWindowSize();
  if (width === undefined) return null;
  return (
    <>
      <SEO title={title} description={description} />
      {width < 768 ? <MobileNavigation /> : <Navigation />}
      <Box maxWidth="680px" margin="0 auto" pb="128px" px="1.2rem">
        <Fade in>{children}</Fade>
      </Box>
      <Footer />
    </>
  );
};

export default Page;
