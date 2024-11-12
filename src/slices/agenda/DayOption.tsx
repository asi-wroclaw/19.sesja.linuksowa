import { Box, Text, useTheme } from '@chakra-ui/react';

export interface DayOptionProps {
  selected?: boolean;
  text: string;
  select: () => void;
}

const DayOption = ({ selected = false, text, select }: DayOptionProps) => {
  const theme = useTheme();
  const borderBottom = selected
    ? { borderBottom: `0.25rem ${theme.colors.primary} solid` }
    : {};
  return (
    <Box
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
        _groupHover={{ color: !selected && theme.colors.primary }}
        fontSize={['xl', '2xl', '2xl', '2xl']}
        color="whiteAlpha.900"
        textAlign="center"
      >
        {text}
      </Text>
    </Box>
  );
};

export default DayOption;
