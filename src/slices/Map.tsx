import { Box, Flex, Heading, useTheme } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const Space = ({ text }: { text?: string }) => {
  const theme = useTheme();
  return (
    <Flex
      justifyContent="center"
      width="100%"
      height="150px"
      bg={theme.colors.primary}
    >
      {text && (
        <Heading
          as="h2"
          fontSize={['3xl', '5xl', '7xl']}
          zIndex="2"
          color="whiteAlpha.900"
          textAlign="center"
          mt="auto"
          mb="auto"
          fontWeight="semibold"
        >
          {text}
        </Heading>
      )}
    </Flex>
  );
};
const MapSlice = () => {
  const { t } = useTranslation('common');

  const Map = useMemo(
    () =>
      dynamic(() => import('../components/Map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );
  return (
    <Box
      as="section"
      bg="primary"
      position="relative"
      zIndex={2} // why this page is so broken from the start
    >
      <Space text={t('eventLocation')} />
      <Box position="relative" zIndex="2">
        <Map />
      </Box>
      <Space />
    </Box>
  );
};

export default MapSlice;
