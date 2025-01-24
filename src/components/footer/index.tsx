import { Center, Link, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

const Footer = () => {
  const { t } = useTranslation();

  const content = {
    cocText: t('cocText'),
  cocButtonText: t('cocButtonText'),
    cocLink: t('cocLink'),
    rules: t('rules'),
  };

  return (
    <Center
      id="coc"
      as="section"
      display="flex"
      justifyContent="center"
      width="100%"
      bg={'primary'}
      minHeight="10vh"
      position="relative"
      zIndex="2"
      color="whiteAlpha.900"
      fontSize={['xl', '2xl']}
      textAlign="center"
      paddingLeft={4}
    >
      {content.cocText}
      <Link href={content.cocLink} target="_blank" padding={2}>
        <Text as="u">{content.cocButtonText}</Text>
      </Link>
      <Text>
        {' '}
        |
        <Link href="/regulamin.pdf" padding={2}>
          <Text as="u">{content.rules}</Text>
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
