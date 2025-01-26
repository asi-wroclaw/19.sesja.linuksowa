import { SPEAKERS } from '@/data/speakers';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import { Speaker } from './Speaker';

const Speakers = () => {
  const { t } = useTranslation();

  if (!SPEAKERS.length) return null;
  return (
    <Box id="speakers" width={'100%'} minH="40vh" paddingBottom={'100px'}>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        minHeight={['15vh', '25vh']}
      >
        <Heading
          margin="auto"
          alignSelf="flex-start"
          as="h2"
          color="white"
          fontSize={['5xl', '7xl']}
        >
          {t('menu.speakers')}
        </Heading>
      </Box>
      <Flex
        margin="auto"
        maxW="1000px"
        padding="0px 20px 20px 20px"
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
