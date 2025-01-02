import pinguin from '@/assets/images/pinguin.svg';
import { Box, Stack, VStack } from '@chakra-ui/react';
import ExportedImage from 'next-image-export-optimizer';
import { HeadDescription } from './HeadDescription';

const Hero = () => {
  return (
    <Box
      as="section"
      id="head"
      height="max(100vh,700px)"
      width="100%"
      bg="blackAlpha.900"
      m={0}
    >
      <Stack
        height="inherit"
        justifyContent="space-evenly"
        direction={{ base: 'column', lg: 'row-reverse' }}
        position="absolute"
        width="100%"
        top="0"
        zIndex="2"
      >
        <VStack
          margin="auto"
          justifyContent="center"
          marginTop={{ base: '8rem', lg: 'auto' }}
          maxWidth={{ base: '550px', lg: '700px' }}
          height={{ base: '20%', lg: '100vh' }}
          width={{ base: '30%', lg: '50%' }}
          position="relative"
        >
          <ExportedImage
            priority
            src={pinguin}
            alt="pinguin"
            width={555}
            height={917}
            unoptimized
          />
        </VStack>
        <HeadDescription />
      </Stack>
    </Box>
  );
};

export default Hero;
