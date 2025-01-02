import { Flex, Heading } from '@chakra-ui/react';

export const Space = ({ text }: { text?: string }) => {
  return (
    <Flex justifyContent="center" width="100%" height="150px" bg={'primary'}>
      {text && (
        <Heading
          as="h2"
          fontSize={['3xl', '5xl', '7xl']}
          zIndex="2"
          color="whiteAlpha.900"
          textAlign="center"
          mt="auto"
          mb="auto"
          fontWeight="semibold"
        >
          {text}
        </Heading>
      )}
    </Flex>
  );
};
