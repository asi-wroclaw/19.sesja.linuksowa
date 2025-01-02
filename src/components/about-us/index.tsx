import magnifyingGlass from '@/assets/images/about-us/magnifying-glass.svg';
import ourGoal from '@/assets/images/about-us/our-goal.png';
import questionMarks from '@/assets/images/about-us/question-marks.png';
import Item from '@/components/about-us/Item';
import { Box, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

const AboutUs = () => {
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
      bg={'primary'}
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
          <Item key={title} title={title} imageSrc={image} text={text} />
        ))}
      </Stack>
    </Box>
  );
};

export default AboutUs;
