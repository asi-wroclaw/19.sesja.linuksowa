import { Box, Center, Flex, Heading, Link } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
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
          <Link
            href="https://app.evenea.pl/event/19-sesja-linuksowa/?source=www-linuksowa"
            target="_blank"
            rel="noreferrer noopener"
            _hover={{ textDecorationColor: 'currentColor' }}
          >
            <Flex alignItems="center" gap="10px">
              <ChevronRightIcon size="80" />
              <Heading
                as="h2"
                fontSize={{ base: '4xl', md: '7xl' }}
                textAlign="center"
                fontWeight="semibold"
              >
                {content.text}
              </Heading>
              <ChevronLeftIcon size="80" />
            </Flex>
          </Link>
        </Center>
      </Flex>
    </Box>
  );
};

export default Tickets;
