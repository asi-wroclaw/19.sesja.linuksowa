import DefaultButton from '@/components/DefaultButton';
import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Heading,
  Link,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

const PreviousEdition = () => {
  const { t } = useTranslation('common');
  const content = {
    text: t('seeLastEdition'),
    buttonText: t('goToRecordings'),
    youtubeUrl: t('ytPlaylist'),
    youtubeIframeTitle: t('youtubeIframeTitle'),
    previousEditionUrl: t('previousEditionUrl'),
  };

  return (
    <Box
      id="previous"
      as="section"
      position="relative"
      zIndex="2"
      display="flex"
      width="100%"
      bg="white"
      minHeight="70vh"
      alignItems="center"
      justifyContent="center"
      mb="50"
    >
      <Flex
        width="95%"
        marginY={{ base: '5%', lg: 'auto' }}
        direction={{ base: 'column', lg: 'row' }}
        gap="5px"
      >
        <Center flex={1}>
          <VStack spacing="3em">
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '7xl' }}
              textAlign="center"
              fontWeight="semibold"
            >
              {content.text}
            </Heading>
            <Link
              _hover={{ textDecorationLine: 'none' }}
              href={content.previousEditionUrl}
              target="_blank"
            >
              <DefaultButton
                _hover={{ color: 'black' }}
                text={content.buttonText}
              />
            </Link>
          </VStack>
        </Center>
        <Center flex={2} marginTop="3em">
          <AspectRatio width="100%" ratio={16 / 9}>
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              src={content.youtubeUrl}
              title={content.youtubeIframeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </Center>
      </Flex>
    </Box>
  );
};

export default PreviousEdition;
