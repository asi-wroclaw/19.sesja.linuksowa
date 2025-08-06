import { createSystem, defaultConfig } from '@chakra-ui/react';
import { HEADER_HEIGHT } from '@/components/navbar';
import { fonts } from './fonts';

export const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
      '&:root': {
        '--font-montserrat': fonts.montserrat.style.fontFamily,
      },
      scrollPaddingTop: `${HEADER_HEIGHT}px`,
      scrollBehavior: 'smooth',
      colorPalette: 'white',
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: { value: '#429096' },
        secondary: { value: '#6F2DBD' },
      },
      fonts: {
        body: { value: 'var(--font-montserrat)' },
        heading: { value: 'var(--font-montserrat)' },
      },
    },
  },
});
