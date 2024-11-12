import { Button, ButtonProps, useTheme } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

const DefaultButton = (props: ButtonProps & { text: string }) => {
  const theme = useTheme();
  const { t } = useTranslation('common');
  const { text } = props;
  const translatedText = t(text);
  const buttonProps = {
    size: 'lg',
    variant: 'solid',
    bg: theme.colors.secondary,
    color: 'white',
    ...props,
  };
  return <Button {...buttonProps}>{translatedText}</Button>;
};

export default DefaultButton;
