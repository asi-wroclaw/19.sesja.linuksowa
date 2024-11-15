import ImageItem from '@/components/ImageItem';
import { Box, Stack, useTheme } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import magnifyingGlass from '../assets/about-us/magnifying-glass.svg';
import ourGoal from '../assets/about-us/our-goal.png';
import questionMarks from '../assets/about-us/question-marks.png';

const AboutUs = () => {
  const theme = useTheme();
  const { t } = useTranslation('common');

  const content = [
    {
      image: questionMarks,
      text: t('aboutUsWhatIsText'),
      title: t('aboutUsWhatIsTitle'),
    },
    {
      image: magnifyingGlass,
      text: t('howItLooksLiketext'),
      title: t('howItLooksLikeTitle'),
    },
    {
      image: ourGoal,
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
