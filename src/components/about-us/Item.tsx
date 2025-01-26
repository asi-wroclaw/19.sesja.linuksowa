import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import ExportedImage from 'next-image-export-optimizer';
import type { StaticImageData } from 'next/image';

type ImageItemProps = {
  imageSrc: string | StaticImageData;
  title: string;
  text: string;
};

const Item = ({ imageSrc, title, text }: ImageItemProps) => {
  return (
    <VStack flex="1">
      <Box width={['150px', '270px']} height={['150px', '270px']}>
        <ExportedImage
          width={270}
          height={270}
          color="white"
          alt={`${title} image`}
          sizes="270px"
          src={imageSrc}
        />
      </Box>
      <Heading
        color="white"
        fontWeight="bold"
        as="h4"
        size={['3xl', '4xl']}
        lineHeight="1.2"
        textAlign="center"
        lineClamp={[1, 2]}
      >
        {title}
      </Heading>
      <Text textAlign="center" color="white" fontSize="md">
        {text}
      </Text>
    </VStack>
  );
};

export default Item;
