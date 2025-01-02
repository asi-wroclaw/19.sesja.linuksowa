import { Box } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { Space } from './space';

const MapSection = () => {
  const { t } = useTranslation('common');

  const LeafletMap = useMemo(
    () =>
      dynamic(() => import('../common/LeafletMap'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );
  return (
    <Box as="section" bg="primary" position="relative" zIndex={2}>
      <Space text={t('eventLocation')} />
      <Box
        position="relative"
        zIndex="2"
        display="flex"
        justifyContent="center"
      >
        <LeafletMap />
      </Box>
      <Space />
    </Box>
  );
};

export default MapSection;
