import { Box, Text } from '@chakra-ui/react';

export interface DayOptionProps {
  selected?: boolean;
  text: string;
  select: () => void;
}

const DayOption = ({ selected = false, text, select }: DayOptionProps) => {
  const borderBottom = selected
    ? { borderBottom: '0.25rem {colors.primary} solid' }
    : {};
  return (
    <Box
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="group"
      cursor="pointer"
      onClick={select}
      paddingTop="5"
      paddingBottom="1"
      height={['90px', '70px', '70px', '70px']}
      width="50%"
      {...borderBottom}
    >
      <Text
        _groupHover={{ color: 'primary' }}
        fontSize={['xl', '2xl', '2xl', '2xl']}
        color="white"
        textAlign="center"
      >
        {text}
      </Text>
    </Box>
  );
};

export default DayOption;
