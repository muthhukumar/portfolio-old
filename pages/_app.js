import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import * as gtag from '../lib/gtag';

const config = {
  useSystemColorMode: true,
};

const customTheme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('#f7fafc', '#08090d')(props),
      },
      'article pre': {
        borderLeftColor: '#27282a',
        borderLeftWidth: '4px',
        paddingLeft: '16px',
        fontWeight: '500',
        marginTop: '30px',
        marginBottom: '30px',
        background: '#111113',
        padding: '16px',
        overflowY: 'scroll',
      },
      'article p': {
        fontWeight: '500',
        marginBottom: '24px',
        marginTop: '24px',
        fontSize: '1.125rem',
        lineHeight: 1.777778,
      },
      'article h1, h2, h3, h4, h5, h6': {
        marginTop: '40px',
        fontWeight: '800',
        marginBottom: '-16px',
      },
      'article h1': {
        fontSize: '2.5rem',
      },
      'article h2': {
        fontSize: '2rem',
      },
      'article h3': {
        fontSize: '1.5rem',
      },
      'article h4': {
        fontSize: '1.25rem',
      },
      'article ul, ol': {
        marginTop: '24px',
        marginBottom: '24px',
        paddingLeft: '24px',
      },
      'article li': {
        paddingLeft: '12px',
        fontWeight: 500,
        fontSize: '1.125rem',
        marginBottom: '12px',
        marginTop: '12px',
      },
      'article a': {
        color: '#3c82f6',
        fontSize: '1.125rem',
        fontWeight: 500,
      },
    }),
  },
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const apolloClient = useApollo(pageProps);

  return (
    <ChakraProvider theme={customTheme}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}
