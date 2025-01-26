import { Provider } from '@/components/ui/provider';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import './particles.css';

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
      <Script
        data-collect-dnt="true"
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      />
    </>
  );
}
