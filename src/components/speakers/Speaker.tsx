import { Avatar } from '@/components/ui/avatar';
import { Box, Flex, Heading, VStack, useDisclosure } from '@chakra-ui/react';
import ExportedImage from 'next-image-export-optimizer';
import { Socials } from './Socials';
import { SpeakerModal } from './SpeakerModal';
import type { SpeakerProps } from './types';

export const Speaker = ({ image, urls, name, description }: SpeakerProps) => {
  const { open, onOpen, onClose } = useDisclosure();
  const showSocials = Object.values(urls).some((url) => url);

  return (
    <Flex cursor="pointer" onClick={() => description.length && onOpen()}>
      <Box>
        <Box
          w={300}
          h={330}
          position={'relative'}
          backgroundColor={'white'}
          display={'flex'}
          justifyContent="center"
          alignItems="center"
        >
          {image ? (
            <ExportedImage
              alt={`${name} photo`}
              fill
              sizes="300px"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              src={image}
            />
          ) : (
            <Avatar
              src="#"
              variant="solid"
              colorPalette="blue"
              width={200}
              height={200}
              css={{
                '& > span': { fontSize: '100px' },
              }}
            />
          )}
        </Box>
        <VStack height="90px" width="300px" padding="2" background={'primary'}>
          <Heading
            margin="auto"
            textAlign="center"
            fontSize="2xl"
            as="h3"
            color="white"
          >
            {name}
          </Heading>
          {showSocials && <Socials urls={urls} />}
        </VStack>
      </Box>
      <SpeakerModal
        open={open}
        onClose={onClose}
        name={name}
        image={image}
        description={description}
      />
    </Flex>
  );
};
