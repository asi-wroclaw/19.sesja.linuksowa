import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
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
