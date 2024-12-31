import { Provider } from '@/components/ui/provider';
import { fonts } from '@/lib/fonts';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-montserrat: ${fonts.montserrat.style.fontFamily};
          }
        `}
      </style>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
