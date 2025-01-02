import { Provider } from '@/components/ui/provider';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>19. Sesja Linuksowa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider forcedTheme="light">
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
