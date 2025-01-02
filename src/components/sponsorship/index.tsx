import DefaultButton from '@/components/common/DefaultButton';
import {
  Box,
  Center,
  Heading,
  Link,
  Stack,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import NextImage, { type StaticImageData } from 'next/image';
import React from 'react';
import programmers from '@/assets/logo/4programmers.svg';
import antmicro from '@/assets/logo/antmicro.svg';
import asi from '@/assets/logo/asi-logo-trans.svg';
import clug from '@/assets/logo/clug.png';
import hswro from '@/assets/logo/hswro.svg';
import linuxMagazine from '@/assets/logo/linux-magazine.png';
import manus from '@/assets/logo/manus.png';
import mikrus from '@/assets/logo/mikrus.png';
import ovh from '@/assets/logo/ovhcloud.png';
import plug from '@/assets/logo/plug.png';
import programistamag from '@/assets/logo/programistamag.jpg';
import pwr from '@/assets/logo/pwr.png';
import slido from '@/assets/logo/slido.svg';

type SponsorshipEntity = {
  title: string;
  logos: {
    image: { default: StaticImageData } | StaticImageData;
    href: string;
    width?: number;
  }[];
};

const Sponsorship = () => {
  const { t } = useTranslation('common');
  const title = t('sponsorshipTitle');
  const description = t('sponsorshipDescription');

  const sponsorsAndOrganizations = [
    {
      title: t('organizers'),
      logos: [
        { image: asi, href: 'https://www.asi.wroclaw.pl/', width: '400' },
      ],
    },
    {
      title: t('sponsors'),
      logos: [],
    },

    {
      title: t('patrons'),
      logos: [
        { image: clug, href: 'https://clug.space/', width: '300' },
        {
          image: hswro,
          href: 'https://www.hswro.org/',
          width: 250,
        },
        { image: plug, href: 'https://linux.org.pl/', width: '250' },
        { image: pwr, href: 'https://pwr.edu.pl/', width: '300' },
        /*{ image: programmers, href: 'https://4programmers.net/', width: '300' },
      {
          image: programistamag,
          href: 'https://programistamag.pl/',
          width: '300',
        },*/
        {
          image: manus,
          href: 'https://manus.pl/',
          width: '300',
        },
        /*  {
          image: slido,
          href: 'https://www.slido.com',
          width: '200',
          },
          {
          image: mikrus,
          href: 'https://mikr.us',
          width: '400'
          }*/
        /* {
           image: linuxMagazine,
           href: 'https://linux-magazine.pl/',
           width: '200',
         },*/
      ],
    },
  ] as SponsorshipEntity[];

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
      {sponsorsAndOrganizations.map(({ logos, title }) => (
        <React.Fragment key={title}>
          {logos.length !== 0 && (
            <Box
              paddingTop="50px"
              paddingBottom="50px"
              key={title}
              width="100%"
              minHeight="30vh"
            >
              <VStack gap="50px" display="flex">
                <Heading
                  zIndex="0"
                  fontWeight="bold"
                  as="h2"
                  textAlign="center"
                  fontSize={['xl', '3xl', '5xl']}
                >
                  {title}
                </Heading>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  justifyContent="center"
                  alignItems="center"
                  marginLeft="20%"
                  rowGap={{ base: '30px' }}
                  marginRight="20%"
                >
                  {logos.map(({ image, href, width }) => (
                    <Link
                      key={href}
                      margin="auto"
                      display="block"
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Box
                        flexWrap="wrap"
                        flexBasis={{ base: '100%', md: '45%', xl: '40%' }}
                        borderWidth="3px"
                        borderRadius="10px"
                        borderColor="black"
                        width={{ base: '250px', md: '300px', lg: '350px' }}
                        height={{ base: '250px', md: '300px', lg: '350px' }}
                        p="5"
                        margin="auto"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        _hover={{ transform: 'scale(1.1)' }}
                      >
                        <NextImage
                          style={{ margin: 'auto' }}
                          alt={`${title} image`}
                          width={width || undefined}
                          src={image}
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
  );
};

export default Sponsorship;
