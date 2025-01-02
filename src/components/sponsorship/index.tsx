import DefaultButton from '@/components/common/DefaultButton';
import { ORGANIZATIONS } from '@/data/organizations';
import { Box, Center, Heading, Link, Stack, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import NextImage from 'next/image';
import React from 'react';

const Sponsorship = () => {
  const { t } = useTranslation('common');
  const title = t('sponsorshipTitle');
  const description = t('sponsorshipDescription');

  return (
    <Box
      id="sponsors"
      as="section"
      backgroundColor="white"
      position="relative"
      width="100%"
      minHeight={['max(50vh,300px)', 'max(40vh,300px)']}
      alignItems="center"
      justifyContent="center"
      margin="0"
      zIndex="2"
    >
      <Box
        width="100%"
        height={['max(50vh,300px)', 'max(40vh,300px)']}
        position="absolute"
      >
        <NextImage
          src="/bg_oferta.webp"
          alt="sponsorship background"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          fill
        />
      </Box>
      <Center height={['max(50vh,300px)', 'max(40vh,300px)']}>
        <VStack gap={3}>
          <Heading
            zIndex="0"
            color="whiteAlpha.900"
            fontWeight="bold"
            as="h2"
            textAlign="center"
            fontSize={['3xl', '5xl']}
            lineHeight={1.2}
          >
            {title}
          </Heading>

          <Heading
            fontSize={['md', 'xl']}
            textAlign="center"
            zIndex="0"
            color="whiteAlpha.900"
          >
            {description}
          </Heading>
          <Link
            _hover={{ textDecorationLine: 'none' }}
            href="/oferta.pdf"
            target="_blank"
          >
            <DefaultButton
              _hover={{ color: 'black' }}
              text="sponsorshipOffer"
              size={'xl'}
            />
          </Link>
        </VStack>
      </Center>
      <Box paddingTop={16}>
        {ORGANIZATIONS.map(({ logos, title }) => (
          <React.Fragment key={title}>
            {logos.length !== 0 && (
              <Box paddingBottom="50px" width="100%" minHeight="30vh">
                <VStack gap={8} display="flex">
                  <Heading
                    zIndex="0"
                    fontWeight="bold"
                    as="h2"
                    textAlign="center"
                    fontSize={['xl', '3xl', '5xl']}
                    lineHeight={1.2}
                  >
                    {t(title)}
                  </Heading>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    rowGap={6}
                    columnGap={6}
                    marginX={'10%'}
                  >
                    {logos.map(({ image, href }) => (
                      <Link
                        key={href}
                        href={href}
                        display="block"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Box
                          flexWrap="wrap"
                          flexBasis={{ base: '100%', md: '45%', xl: '40%' }}
                          borderWidth="3px"
                          borderRadius="10px"
                          borderColor="black"
                          width="200px"
                          height="200px"
                          p="5"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          _hover={{ transform: 'scale(1.1)' }}
                        >
                          <NextImage
                            alt={`${title} image`}
                            src={image}
                            width={200}
                          />
                        </Box>
                      </Link>
                    ))}
                  </Stack>
                </VStack>
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Sponsorship;
