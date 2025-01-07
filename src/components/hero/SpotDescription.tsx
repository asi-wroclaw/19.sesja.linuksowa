import { Heading, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

export const SpotDescription = () => {
  const { t } = useTranslation();

  const spot: string[] = t('eventLocationDetails');
  return (
    <VStack>
      {spot.map((text: string) => (
        <Heading
          key={text}
          as="h3"
          fontSize={{ base: 'xl', md: '3xl' }}
          lineHeight={{ base: '1em', lg: '2em' }}
          fontWeight="semibold"
          textAlign="center"
          mt={0}
          color="white"
        >
          {text}
        </Heading>
      ))}
    </VStack>
  );
};
