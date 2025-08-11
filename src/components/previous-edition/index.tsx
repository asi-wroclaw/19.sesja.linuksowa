import { Box, Center, Flex, Heading, Link, VStack } from '@chakra-ui/react';
import { YouTubeEmbed } from '@next/third-parties/google';
import { useTranslation } from 'next-export-i18n';
import DefaultButton from '@/components/common/DefaultButton';
import {
  youtubePlaylistId,
  youtubePlaylistUrl,
  youtubeVideoId,
} from '@/data/common';

const PreviousEdition = () => {
  const { t } = useTranslation();

  const content = {
    text: t('seeLastEdition'),
    buttonText: t('goToRecordings'),
    youtubeIframeTitle: t('youtubeIframeTitle'),
  };

  return (
    <Box
      id="previous"
      as="section"
      pb={'4em'}
      display="flex"
      width="100%"
      bg="white"
      minHeight={'60vh'}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        width="95%"
        marginY={{ base: '5%', lg: 'auto' }}
        direction={{ base: 'column', lg: 'row' }}
        gap="5px"
      >
        <Center flex={1}>
          <VStack gap="3em">
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '7xl' }}
              lineHeight={1.2}
              textAlign="center"
              fontWeight="semibold"
            >
              {content.text}
            </Heading>
            <Link
              _hover={{ textDecorationLine: 'none' }}
              href={youtubePlaylistUrl}
              target="_blank"
            >
              <DefaultButton
                _hover={{ color: 'black' }}
                text={content.buttonText}
                size={'xl'}
                fontSize={'lg'}
              />
            </Link>
          </VStack>
        </Center>
        <Center flex={2} marginTop="3em">
          {/* the same max-width must be set for a parent div and the <lite-youtube> element */}
          <Box maxW={'1200px'} width="100%" height="100%">
            <YouTubeEmbed
              videoid={youtubeVideoId}
              // params={`list=${youtubePlaylistId}`}
              style="max-width: 1200px"
            />
          </Box>
        </Center>
      </Flex>
    </Box>
  );
};

export default PreviousEdition;
