import { createSystem, defaultConfig } from '@chakra-ui/react';
import { fonts } from './fonts';

export const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
      '&:root': {
        '--font-montserrat': fonts.montserrat.style.fontFamily,
      },
      colorPalette: 'white',
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: { value: '#429096' },
        secondary: { value: '#6F2DBD' },
        red: { value: '#ff0000' },
      },
      fonts: {
        body: { value: 'var(--font-montserrat)' },
        heading: { value: 'var(--font-montserrat)' },
      },
    },
  },
});
