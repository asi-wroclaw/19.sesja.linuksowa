import { Box, Heading, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import { useState } from 'react';
import { SATURDAY_AGENDA, SUNDAY_AGENDA } from '@/data/agenda';
import DaySelect from './DaySelect';
import Speech from './Speech';

const Agenda = () => {
  const [isSaturday, setSaturday] = useState<boolean>(true);
  const { t } = useTranslation();

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
      width="100%"
      minHeight="100vh"
      paddingBottom="100px"
      background="black"
    >
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        bg={'primary'}
        minHeight={['15vh', '25vh']}
        opacity="100%"
      >
        <Heading
          margin="auto"
          alignSelf="flex-start"
          as="h2"
          color="white"
          fontSize={['4xl', '7xl']}
        >
          Agenda
        </Heading>
      </Box>
      <VStack gap="10" marginTop="5vh">
        <DaySelect days={days} />
        <Box width={['95%', '80%', '70%', '60%']} margin="auto">
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
