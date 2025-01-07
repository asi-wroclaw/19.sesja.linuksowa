import { Heading, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

export const Title = () => {
  const { t } = useTranslation();

  return (
    <VStack>
      <Heading
        as="h1"
        fontSize={{
          base: '4xl',
          md: '6xl',
          lg: '6xl',
          xl: '6xl',
          '2xl': '7xl',
        }}
        lineHeight="1.2"
        textAlign="center"
        fontWeight="semibold"
        color="white"
      >
        {t('title')}
      </Heading>
      <Heading
        as="h2"
        fontSize={{ base: 'xl', md: '4xl' }}
        lineHeight="1.2"
        textAlign="center"
        fontWeight="semibold"
        bgColor={'primary'}
        color="white"
      >
        &nbsp;{t('eventDate')}&nbsp;
      </Heading>
    </VStack>
  );
};
