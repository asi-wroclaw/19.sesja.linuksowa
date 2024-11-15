import DefaultButton from '@/components/DefaultButton';
import { Box, Center, Heading, HStack, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';

export default function Coc() {
  const { t } = useTranslation('common');

  return (
    <Box height="100vh" bg="blackAlpha.900">
      <Center height="100%">
        <VStack>
          <Heading
            as="h1"
            fontSize={{
              base: '4xl',
              md: '6xl',
              lg: '6xl',
              xl: '6xl',
              '2xl': '7xl',
            }}
            textAlign="center"
            fontWeight="semibold"
            color="white"
          >
            {t('title')}
          </Heading>
          <HStack gap="5%" justifyContent="space-around">
            <Link href="https://berlincodeofconduct.org/">
              <DefaultButton
                width="md"
                _hover={{ color: 'black' }}
                text={'Check out our Code of Conduct'}
              ></DefaultButton>
            </Link>

            <Link href="/">
              <DefaultButton
                width="md"
                _hover={{ color: 'black' }}
                text={'Go to main page'}
              ></DefaultButton>
            </Link>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
}
