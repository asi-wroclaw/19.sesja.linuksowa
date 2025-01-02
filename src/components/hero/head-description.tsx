import DefaultButton from '@/components/common/DefaultButton';
import { Button } from '@/components/ui/button';
import config from '@/config';
import { Stack, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import { SpotDescription } from './spot-description';
import { Title } from './title';

export const HeadDescription = () => {
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
      <Stack
        gap={{ base: 8, lg: 16 }}
        flexDir={{ base: 'column', lg: 'row' }}
        alignItems={'center'}
      >
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
      </Stack>
    </VStack>
  );
};
