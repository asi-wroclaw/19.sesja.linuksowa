import { Box } from '@chakra-ui/react';
import { LangItem } from './LangItem';

const Lang = ({
  textColor = 'white',
  display = { base: 'none', lg: 'block' },
}: { textColor?: string; display?: object }) => (
  <Box
    color={textColor}
    display={display}
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
