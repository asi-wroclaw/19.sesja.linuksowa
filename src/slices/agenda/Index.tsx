import { Box, Heading, VStack, useTheme, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { SATURDAY_AGENDA, SUNDAY_AGENDA } from '../../assets/AgendaData';
import DaySelect from './DaySelect';
import Speech from './Speech';
import { useTranslation } from 'next-export-i18n';

const Agenda = () => {
  const [isSaturday, setSaturday] = useState<boolean>(true);
  const theme = useTheme();
  const { t } = useTranslation('common');

  const content = {
    saturdayOption: t('agendaDay1'),
    sundayOption: t('agendaDay2'),
  };
  const days = [
    {
      text: content.saturdayOption,
      select: () => setSaturday(true),
      selected: isSaturday,
    },
    {
      text: content.sundayOption,
      select: () => setSaturday(false),
      selected: !isSaturday,
    },
  ];

  return (
    <Box
      as="section"
      id="agenda"
      zIndex="2"
      width="100%"
      bg="blackAlpha.900"
      minHeight="100vh"
      paddingTop="50"
      paddingBottom="100"
    >
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        bg={theme.colors.primary}
        minHeight="30vh"
        opacity="100%"
        position="relative"
        zIndex="2"
      >
        <Heading
          margin="auto"
          alignSelf="flex-start"
          as="h2"
          color="whiteAlpha.900"
          fontSize={['3xl', '5xl', '7xl']}
        >
          Agenda
        </Heading>
      </Box>
      <VStack gap="10" width="inherit" padding="5vh 0vh 0vh 0vh">
        <DaySelect days={days} />
        <Box width={['95%', '80%', '70%', '60%']} zIndex="30" margin="auto">
          {(isSaturday ? SATURDAY_AGENDA : SUNDAY_AGENDA).map((speech) => (
            <Speech
              key={`${speech.title}-${speech.start}-${speech.title}`}
              speech={speech}
            />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Agenda;
