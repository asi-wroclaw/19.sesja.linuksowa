import { HStack } from '@chakra-ui/react';
import DayOption, { type DayOptionProps } from './DayOption';

const DaySelect = ({ days }: { days: DayOptionProps[] }) => {
  return (
    <HStack
      zIndex="2"
      width={['95%', '85%', '75%', '65%']}
      justifyContent="center"
      gap="5"
    >
      {days.map(({ select, selected, text }) => (
        <DayOption key={text} select={select} selected={selected} text={text} />
      ))}
    </HStack>
  );
};

export default DaySelect;
