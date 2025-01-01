import { Button, type ButtonProps } from '@/components/ui/button';
import { useTranslation } from 'next-export-i18n';

const DefaultButton = (props: ButtonProps & { text: string }) => {
  const { t } = useTranslation('common');
  const { text, ...rest } = props;
  const translatedText = t(text);
  const buttonProps: ButtonProps = {
    size: 'lg',
    variant: 'solid',
    bg: 'secondary',
    color: 'white',
    ...rest,
  };
  return <Button {...buttonProps}>{translatedText}</Button>;
};

export default DefaultButton;
