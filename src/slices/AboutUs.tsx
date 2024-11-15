import ImageItem from '@/components/ImageItem';
import { Box, Stack, useTheme } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import cel from '../assets/about-us/cel.png';
import coTo from '../assets/about-us/coTo.png';
import lupa from '../assets/about-us/lupa.svg';

const AboutUs = () => {
  const theme = useTheme();
  const { t } = useTranslation('common');

  const content = [
    {
      image: coTo,
      text: t('aboutUsWhatIsText'),
      title: t('aboutUsWhatIsTitle'),
    },
    {
      image: lupa,
      text: t('howItLooksLiketext'),
      title: t('howItLooksLikeTitle'),
    },
    {
      image: cel,
      text: t('ourGoalText'),
      title: t('ourGoalTitle'),
    },
  ];
  return (
    <Box
      id="about"
      as="section"
      display="flex"
      justifyContent="center"
      width="100%"
      bg={theme.colors.primary}
      minHeight="70vh"
      opacity="90%"
      position="relative"
      zIndex="2"
    >
      <Stack
        width="95%"
        marginY={{ base: '5%', lg: 'auto' }}
        rowGap="20"
        columnGap="5"
        marginX={{ base: '2%', md: '20%', lg: '0' }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: 'column', lg: 'row' }}
      >
        {content.map(({ image, text, title }) => (
          <ImageItem key={title} title={title} imageSrc={image} text={text} />
        ))}
      </Stack>
    </Box>
  );
};

export default AboutUs;
