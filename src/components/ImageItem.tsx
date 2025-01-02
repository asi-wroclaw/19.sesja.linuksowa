import { Heading, Text, VStack } from '@chakra-ui/react';
import Image, { type StaticImageData } from 'next/image';

type ImageItemProps = {
  imageSrc: string | StaticImageData;
  title: string;
  text: string;
};

const ImageItem = ({ imageSrc, title, text }: ImageItemProps) => {
  return (
    <VStack flex="1">
      <Image
        width={270}
        height={270}
        color="white"
        alt={`${title} image`}
        sizes="270px"
        src={imageSrc}
      />
      <Heading
        color="whiteAlpha.900"
        fontWeight="bold"
        as="h4"
        size="4xl"
        lineHeight="1.2"
        textAlign="center"
        lineClamp={[1, 2]}
      >
        {title}
      </Heading>
      <Text textAlign="center" color="whiteAlpha.900">
        {text}
      </Text>
    </VStack>
  );
};

export default ImageItem;
