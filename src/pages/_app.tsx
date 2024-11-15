import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const theme = extendTheme({
  colors: {
    primary: '#429096',
    secondary: '#6F2DBD',
    red: '#ff0000',
  },
  fonts: {
    body: 'MontserratSemiBold',
    heading: 'MontserratSemiBold',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
