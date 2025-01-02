import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import Image from 'next/image';
import type { OrganizerProps } from './types';

export const Organizer = ({ image, name, role }: OrganizerProps) => {
  const { t } = useTranslation('common');
  return (
    <Flex zIndex="3">
      <Box margin="auto">
        <VStack
          //height="300px"
          //width="300px"
          padding="2"
          minH="60vh"
          //background={theme.colors.primary}
        >
          <Box w={300} h={330} position="relative">
            <Image
              alt={`${name} image`}
              // sizes="300px"
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '50%',
                overflow: 'hidden',
                width: 300,
                height: 300,
                border: '10px solid white',
              }}
              src={image}
              //fill
            />
          </Box>
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
      </Box>
    </Flex>
  );
};
