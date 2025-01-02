import DefaultButton from '@/components/DefaultButton';
import { Button } from '@/components/ui/button';
import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import Image from 'next/image';
import pinguin from '../assets/pinguin.svg';
import config from '../config';

const Title = () => {
  const { t } = useTranslation('common');

  return (
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
        lineHeight="1.2"
        textAlign="center"
        fontWeight="semibold"
        color="white"
      >
        {t('title')}
      </Heading>
      <Heading
        as="h2"
        fontSize={{ base: 'xl', md: '4xl' }}
        lineHeight="1.2"
        textAlign="center"
        fontWeight="semibold"
        bgColor={'primary'}
        color="white"
      >
        &nbsp;{t('eventDate')}&nbsp;
      </Heading>
    </VStack>
  );
};

const SpotDescription = () => {
  const { t } = useTranslation('common');

  const spot: string[] = t('eventLocationDetails', {}, { returnObjects: true });
  return (
    <VStack>
      {spot.map((text: string) => (
        <Heading
          key={text}
          as="h3"
          fontSize={{ base: 'xl', md: '3xl' }}
          lineHeight={{ base: '1em', lg: '2em' }}
          fontWeight="semibold"
          textAlign="center"
          mt={0}
          color="white"
        >
          {text}
        </Heading>
      ))}
    </VStack>
  );
};

const HeadDescription = () => {
  const { t } = useTranslation('common');
  return (
    <VStack
      height="inherit"
      margin="0"
      width={{ base: '100%', lg: '50%' }}
      justifyContent="space-evenly"
    >
      <Title />
      <SpotDescription />
      <HStack gap={16}>
        {config.SHOW_AGENDA && (
          <a href="#agenda">
            <Button
              size={'lg'}
              variant={'solid'}
              color={'white'}
              bg="#429096"
              fontSize={'18px'}
              lineHeight="1.2"
              _hover={{ color: 'black' }}
            >
              {t('seeAgenda')}
            </Button>
          </a>
        )}
        <a
          href="https://app.evenea.pl/event/19-sesja-linuksowa/?source=www-linuksowa"
          target="_blank"
          rel="noreferrer noopener"
        >
          <DefaultButton
            text={t('getTicketsCaps')}
            fontSize={'18px'}
            lineHeight="1.2"
            size={'xl'}
            _hover={{ color: 'black' }}
          />
        </a>
      </HStack>
    </VStack>
  );
};

const Hero = () => {
  return (
    <Box
      as="section"
      id="head"
      height="max(100vh,700px)"
      width="100%"
      bg="blackAlpha.900"
      m={0}
    >
      <Stack
        height="inherit"
        justifyContent="space-evenly"
        direction={{ base: 'column', lg: 'row-reverse' }}
        position="absolute"
        width="100%"
        top="0"
        zIndex="2"
      >
        <VStack
          margin="auto"
          justifyContent="center"
          marginTop={{ base: '8rem', lg: 'auto' }}
          maxWidth={{ base: '550px', lg: '700px' }}
          height={{ base: '20%', lg: '100vh' }}
          width={{ base: '30%', lg: '50%' }}
          position="relative"
        >
          <Image priority alt="pinguin" src={pinguin} fill />
        </VStack>
        <HeadDescription />
      </Stack>
    </Box>
  );
};

export default Hero;
