import DefaultButton from '@/components/common/DefaultButton';
import { callForPapersUrl } from '@/data/common';
import { Box, Center, Flex, Heading, Icon, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import { LuMoveRight } from 'react-icons/lu';

const CallForPapers = () => {
  const { t } = useTranslation('common');
  const content = {
    c4pButtonText: t('c4pButtonText'),
    c4pTitle: t('c4pTitle'),
  };
  return (
    <Box
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
      <Flex
        width="95%"
        marginY={{ base: '5%', lg: 'auto' }}
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: '50px', lg: '5px' }}
      >
        <Center flex={1}>
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '7xl' }}
            textAlign="center"
            fontWeight="semibold"
            lineHeight="1.2"
          >
            {content.c4pTitle}
          </Heading>
        </Center>
        <Center flex={1}>
          <Link
            _hover={{ textDecorationLine: 'none' }}
            href={callForPapersUrl}
            target="_blank"
          >
            <DefaultButton
              fontSize={{ base: '25px', lg: '30px' }}
              padding={{ base: '5', lg: '10' }}
              rightIcon={
                <Icon fontSize={48}>
                  <LuMoveRight />
                </Icon>
              }
              _hover={{ color: 'black' }}
              text={content.c4pButtonText}
            />
          </Link>
        </Center>
      </Flex>
    </Box>
  );
};

export default CallForPapers;
