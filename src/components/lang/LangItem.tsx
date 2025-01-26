import { Text } from '@chakra-ui/react';
import { LanguageSwitcher } from 'next-export-i18n';

export const LangItem = ({
  text,
  locale,
  textColor = 'white',
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
