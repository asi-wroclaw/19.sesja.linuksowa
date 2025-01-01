import { Head, Html, Main, NextScript } from 'next/document';

export default function Home() {
  return (
    <Html suppressHydrationWarning>
      <Head>
        <meta name="description" content="19. Sesja Linuksowa" />
        <meta content="19. Sesja Linuksowa" property="og:site_name" />
        <meta content="pl_PL" property="og:locale" />
        <meta
          content="19. Sesja Linuksowa | Wrocław, Polska"
          property="og:title"
        />
        <meta content="https://sesja.linuksowa.pl/" property="og:url" />
        <meta
          content="Sesja Linuksowa to największa w Polsce konferencja poświęcona rozwiązaniom Open Source oraz najnowszym trendom w systemach z rodziny GNU/Linux."
          property="og:description"
        />
        <meta content="website" property="og:type" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="me" href="https://fosstodon.org/@ASI" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
