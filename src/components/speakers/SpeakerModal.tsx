import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
} from '@/components/ui/dialog';
import { Box, Text, VStack } from '@chakra-ui/react';
import ExportedImage from 'next-image-export-optimizer';
import type { StaticImageData } from 'next/image';

export const SpeakerModal = ({
  open,
  onClose,
  name,
  image,
  description,
}: {
  open: boolean;
  onClose: () => void;
  name: string;
  image: string | StaticImageData;
  description?: string[];
}) => {
  return (
    <DialogRoot
      placement={'center'}
      size={{ sm: 'lg' }}
      open={open}
      onOpenChange={onClose}
    >
      <DialogBackdrop />
      <DialogContent className="dark">
        <DialogHeader color="white" textAlign="center" fontSize="2xl">
          {name}
        </DialogHeader>
        <DialogCloseTrigger color="white" />
        <DialogBody color="white">
          <VStack gap="3vh">
            <Box w={300} h={300} position="relative">
              <ExportedImage
                fill
                alt={`${name} image`}
                sizes="300px"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                src={image}
              />
            </Box>
            {(description || [])?.map((descriptionText, index) => (
              <Text
                textAlign="center"
                lineHeight={'24px'}
                fontSize={'16px'}
                key={`${descriptionText}-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: don't care
                  index
                }`}
                minH="15px"
                padding="0vh 0vh 2vh 0vh"
              >
                {descriptionText}
              </Text>
            ))}
          </VStack>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};
