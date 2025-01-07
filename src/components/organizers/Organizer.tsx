import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import ExportedImage from 'next-image-export-optimizer';
import type { OrganizerProps } from './types';
import { Avatar } from '../ui/avatar';

export const Organizer = ({ image, name, role }: OrganizerProps) => {
  const { t } = useTranslation();

  return (
    <Flex zIndex="3">
      <Box margin="auto">
        <VStack padding="2" minH="60vh" gap={8}>
          <Box
            w={300}
            h={300}
            display={'flex'}
            justifyContent="center"
            alignItems={'center'}
          >
            {image ? (
              <ExportedImage
                src={image}
                alt={`${name} photo`}
                width={300}
                height={300}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: 300,
                  height: 300,
                  border: '10px solid white',
                }}
              />
            ) : (
              <Avatar
                src="#"
                variant="solid"
                colorPalette="cyan"
                width={300}
                height={300}
                border={'10px solid white'}
                css={{
                  '& > span': { fontSize: '100px' },
                }}
              />
            )}
          </Box>
          <VStack gap={2}>
            <Heading
              textAlign="center"
              fontSize="2xl"
              as="h3"
              color="whiteAlpha.900"
            >
              {name}
            </Heading>
            <Heading
              marginTop={'1rem'}
              textAlign="center"
              fontSize="xl"
              as="h4"
              color={'white'}
            >
              {t(role)}
            </Heading>
          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
};
