import DefaultButton from '@/components/DefaultButton';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Link, Flex, Heading, Center } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

const C4p = () => {
  const { t } = useTranslation('common');

  const content = {
    C4pLink: t('c4pLink'),
    c4pButtonText: t('c4pButtonText'),
    c4pTitle: t('c4pTitle')
  };
  return <Box
    as="section"
    position="relative"
    zIndex="2"
    display="flex"
    width="100%"
    bg="whiteAlpha.900"
    minHeight="30vh"
    opacity="90%"
    alignItems="center"
    justifyContent="center"
  >
    <Flex width="95%"
      marginY={{ base: '5%', lg: 'auto' }}
      direction={{ base: 'column', lg: 'row' }}
      gap={{ base: '50px', lg: '5px' }}>
      <Center flex={1}>
        <Heading
          as="h2"
          fontSize={{ base: '4xl', md: '7xl' }}
          textAlign="center"
          fontWeight="semibold"
        >
          {content.c4pTitle}
        </Heading>

      </Center>
      <Center flex={1}>
        <Link
          _hover={{ textDecorationLine: 'none' }}
          href={content.C4pLink}
          target="_blank"
        >
          <DefaultButton
            fontSize={{ base: '25px', lg: '30px' }}
            padding={{ base: '5', lg: "10" }}
            rightIcon={<ArrowForwardIcon />}
            _hover={{ color: 'black' }}
            text={content.c4pButtonText}
          />
        </Link>
      </Center>
    </Flex>
  </Box>
}

export default C4p;