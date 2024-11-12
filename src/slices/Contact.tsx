import DefaultButton from '@/components/DefaultButton';
import {
  Alert,
  AlertIcon,
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import { FormEvent, useState } from 'react';

const Contact = ({ sendMessageUrl }: { sendMessageUrl: string }) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<'success' | 'error' | undefined>(
    undefined,
  );
  const { t } = useTranslation('common');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      body: `
FROM: ${name}
EMAIL: ${email}
----------
${message}
      `,
    };
    try {
      const response = await fetch(sendMessageUrl, requestOptions);
      if (response.status === 200) setStatus('success');
      else setStatus('error');
    } catch (err) {
      console.log(err);
      setStatus('error');
    }
  };

  return (
    <Box
      id="contact"
      as="section"
      position="relative"
      zIndex="2"
      margin="auto"
      mt="10"
      mb="30"
      width="80%"
      maxWidth={'800'}
    >
      <Heading
        as="h2"
        mb="30"
        fontSize={['3xl', '5xl', '7xl']}
        textAlign="center"
        fontWeight="semibold"
      >
        {t('writeToUs')}
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl display={'flex'} flexDir="column">
          <FormLabel htmlFor="contact-name" mt={4}>
            {t('formName')}
          </FormLabel>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="contact-name"
            type="text"
          />
          <FormLabel htmlFor="contact-email" mt={4}>
            {t('email')}
          </FormLabel>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            id="contact-email"
          />
          <FormLabel htmlFor="contact-message" mt={4}>
            {t('message')}
          </FormLabel>
          <Textarea
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            size="lg"
            id="contact-message"
            placeholder={t('formPlaceholder')}
          />
          <DefaultButton
            mt={4}
            mb={4}
            _hover={{ color: 'black' }}
            size="lg"
            text="send"
            type="submit"
          />
        </FormControl>
      </form>
      {status && (
        <Alert status={status}>
          <AlertIcon />
          {status === 'success'
            ? t('messageSendSuccess')
            : t('messageSendFailed')}
        </Alert>
      )}
    </Box>
  );
};

export default Contact;
