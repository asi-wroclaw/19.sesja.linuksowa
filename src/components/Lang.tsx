import { Box, Text } from '@chakra-ui/react';
import { LanguageSwitcher } from 'next-export-i18n';

const LangItem = ({
  text,
  locale,
  textColor = 'whiteAlpha.900',
}: {
  textColor?: string;
  text: string;
  locale: string;
}) => {
  return (
    <LanguageSwitcher lang={locale}>
      <Text
        cursor="pointer"
        as="span"
        color={textColor}
        _hover={{ color: 'primary' }}
      >
        {text}
      </Text>
    </LanguageSwitcher>
  );
};

const Lang = ({ textColor = 'whiteAlpha.900' }: { textColor?: string }) => (
  <Box
    color={textColor}
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
