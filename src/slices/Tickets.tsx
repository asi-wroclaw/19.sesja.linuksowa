import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

const Tickets = () => {
  const { t } = useTranslation('common');
  const content = {
    text: t('getTickets'),
  };

  return (
    <Box
      id="tickets"
      as="section"
      position="relative"
      zIndex="2"
      display="flex"
      width="100%"
      bg="white"
      minHeight="70vh"
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
          <VStack spacing="3em">
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '7xl' }}
              textAlign="center"
              fontWeight="semibold"
            >
              {content.text}
            </Heading>
          </VStack>
        </Center>
        <Center flex={2} marginTop="3em">
          <AspectRatio width="100%" ratio={16 / 9} minH={500}>
            <iframe
              src="https://app.evenea.pl/event/19-sesja-linuksowa/?out=1&source=event_iframe"
              width="100%"
              style={{ border: '0' }}
              height={50}
              title="Evenea tickets"
            />
          </AspectRatio>
        </Center>
      </Flex>
    </Box>
  );
};

export default Tickets;
