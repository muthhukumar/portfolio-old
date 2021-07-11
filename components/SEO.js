import NextHead from 'next/head';

const Head = ({
  title = 'Muthukumar P',
  description = 'Personal website of Muthukumar P',
  children,
}) => {
  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />

      <meta name="twitter:site" content="@0_void_" />
      <meta name="apple-mobile-web-app-title" content="Blog" />
      <meta name="author" content="Muthukumar" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {/* <link rel="icon" href="/profile.jpg" /> */}
      {title === 'Thoughts' && (
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤔</text></svg>"
        ></link>
      )}

      {title === 'Bookmarks' && (
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📖</text></svg>"
        ></link>
      )}

      {title === 'Muthukumar P' && (
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
        ></link>
      )}

      {children}
    </NextHead>
  );
};

export default Head;
