import { Box, Flex, Heading } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import { Speaker } from './Speaker';
import type { SpeakerProps } from './types';

const Speakers = ({ speakersData }: { speakersData: SpeakerProps[] }) => {
  const { t } = useTranslation('common');

  if (!speakersData.length) return null;
  return (
    <Box id="speakers" bg="blackAlpha.900" minH="40vh">
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        minHeight="30vh"
        opacity="100%"
        position="relative"
        zIndex="2"
      >
        <Heading
          margin="auto"
          alignSelf="flex-start"
          as="h2"
          color="whiteAlpha.900"
          fontSize={['3xl', '5xl', '7xl']}
        >
          {t('menu.speakers')}
        </Heading>
      </Box>
      <Flex
        margin="auto"
        maxW="1000px"
        padding="50px 20px 20px 20px"
        flexWrap="wrap"
        justifyContent="center"
        gap="30px 30px"
      >
        {speakersData
          .filter((speaker) => speaker.image && speaker.name)
          .map((speaker) => (
            <Speaker key={speaker.name} {...speaker} />
          ))}
      </Flex>
    </Box>
  );
};
export default Speakers;
