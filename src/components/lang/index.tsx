import { Box } from '@chakra-ui/react';
import { LangItem } from './LangItem';

const Lang = ({
  textColor = 'whiteAlpha.900',
  display = { base: 'none', lg: 'block' },
}: { textColor?: string; display?: object }) => (
  <Box
    color={textColor}
    display={display}
    zIndex="4"
    fontSize="lg"
    marginTop="auto"
    marginBottom="auto"
    height="30px"
    width="100px"
  >
    <LangItem textColor={textColor} text="PL" locale="pl" />
    {' | '}
    <LangItem textColor={textColor} text="EN" locale="en" />
  </Box>
);

export default Lang;
