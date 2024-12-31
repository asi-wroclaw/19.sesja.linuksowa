import { fonts } from '@/lib/fonts';
import { system } from '@/lib/theme';
import { ChakraProvider } from '@chakra-ui/react';
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
      <ChakraProvider theme={system}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
