import { SPEAKERS } from '@/data/speakers';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import { Speaker } from './Speaker';

const Speakers = () => {
  const { t } = useTranslation();

  if (!SPEAKERS.length) return null;
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
        {SPEAKERS.filter((speaker) => speaker.name).map((speaker) => (
          <Speaker key={speaker.name} {...speaker} />
        ))}
      </Flex>
    </Box>
  );
};
export default Speakers;
