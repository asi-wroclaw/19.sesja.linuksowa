import OfertaBackground from '@/assets/images/bg_oferta.webp';
import DefaultButton from '@/components/common/DefaultButton';
import { ORGANIZATIONS } from '@/data/organizations';
import { Box, Center, Heading, Link, Stack, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import ExportedImage from 'next-image-export-optimizer';
import React from 'react';

const Sponsorship = () => {
  const { t } = useTranslation();
  const title = t('sponsorshipTitle');
  const description = t('sponsorshipDescription');

  return (
    <Box
      id="sponsors"
      as="section"
      backgroundColor="white"
      width="100%"
      minHeight={['max(50vh,300px)', 'max(40vh,300px)']}
      alignItems="center"
      justifyContent="center"
      margin="0"
    >
      <Box
        width="100%"
        height={['max(50vh,300px)', 'max(40vh,300px)']}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
      >
        {/* Background Image */}
        <Box as="figure" height="100%" overflow="hidden">
          <ExportedImage
            src={OfertaBackground}
            alt="sponsorship background"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            fill
          />
        </Box>

        {/* Centered Content */}
        <VStack gap={3} zIndex={1} textAlign="center" color="white">
          <Heading
            fontWeight="bold"
            as="h2"
            fontSize={['4xl', '5xl']}
            lineHeight={1.2}
          >
            {title}
          </Heading>

          <Heading fontSize={['lg', 'xl']}>{description}</Heading>

          <Link
            _hover={{ textDecorationLine: 'none' }}
            href="/oferta.pdf"
            target="_blank"
          >
            <DefaultButton
              _hover={{ color: 'black' }}
              text="sponsorshipOffer"
              size="xl"
            />
          </Link>
        </VStack>
      </Box>
      <Box paddingTop={16}>
        {ORGANIZATIONS.map(({ logos, title }) => (
          <React.Fragment key={title}>
            {logos.length !== 0 && (
              <Box paddingBottom="50px" width="100%" minHeight="30vh">
                <VStack gap={8} display="flex">
                  <Heading
                    fontWeight="bold"
                    as="h2"
                    textAlign="center"
                    fontSize={['3xl', '5xl']}
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
                          width={['150px', '200px']}
                          height={['150px', '200px']}
                          p="5"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          _hover={{ transform: 'scale(1.1)' }}
                        >
                          <ExportedImage
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
