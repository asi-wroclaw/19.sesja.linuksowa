import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
} from '@/components/ui/dialog';
import { Box, Text, VStack, useMediaQuery } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import ExportedImage from 'next-image-export-optimizer';
import type { StaticImageData } from 'next/image';
import { getImageSize } from './utils';

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
  const { t } = useTranslation('common');
  const [isSmallerThan800] = useMediaQuery(['(max-width: 800px)'], {
    fallback: [false],
  });
  const { height, width } = image as { height: number; width: number };
  const isLongDescription = (description ?? []).join('').length > 500;
  const isALotOfContent = isLongDescription && isSmallerThan800;
  const [imageWidth, imageHeight] = getImageSize(
    [width, height],
    isALotOfContent ? [200, 200] : [500, 400],
  );
  return (
    <DialogRoot
      placement={'center'}
      size={{ sm: 'full', md: 'xl' }}
      open={open}
      onOpenChange={onClose}
    >
      <DialogBackdrop />
      <DialogContent className="dark">
        <DialogHeader color="whiteAlpha.900" textAlign="center" fontSize="2xl">
          {name}
        </DialogHeader>
        <DialogCloseTrigger color="whiteAlpha.900" />
        <DialogBody color="whiteAlpha.900">
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
