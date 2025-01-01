import { Button, type ButtonProps } from '@/components/ui/button';
import { useTranslation } from 'next-export-i18n';
import type { JSX } from 'react';

const DefaultButton = (
  props: ButtonProps & { text: string; rightIcon?: JSX.Element },
) => {
  const { t } = useTranslation('common');
  const { text, rightIcon, ...rest } = props;
  const translatedText = t(text);
  const buttonProps: ButtonProps = {
    size: 'lg',
    variant: 'solid',
    bg: 'secondary',
    color: 'white',
    ...rest,
  };
  return (
    <Button {...buttonProps}>
      {translatedText}
      {rightIcon}
    </Button>
  );
};

export default DefaultButton;
