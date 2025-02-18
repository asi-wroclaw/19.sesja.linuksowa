import { ticketsUrl } from '@/data/common';
import { Box, Center, Flex, Heading, Icon, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const Tickets = () => {
  const { t } = useTranslation();
  const content = {
    text: t('getTickets'),
  };

  return (
    <Box
      id="tickets"
      as="section"
      display="flex"
      width="100%"
      bg="white"
      minHeight={['20vh', '30vh']}
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
            href={ticketsUrl}
            target="_blank"
            rel="noreferrer noopener"
            _hover={{ textDecorationColor: 'currentColor' }}
          >
            <Flex alignItems="center" gap="10px">
              <Icon fontSize={80}>
                <LuChevronRight />
              </Icon>
              <Heading
                as="h2"
                fontSize={{ base: '4xl', md: '7xl' }}
                textAlign="center"
                fontWeight="semibold"
              >
                {content.text}
              </Heading>
              <Icon fontSize={80}>
                <LuChevronLeft />
              </Icon>
            </Flex>
          </Link>
        </Center>
      </Flex>
    </Box>
  );
};

export default Tickets;
