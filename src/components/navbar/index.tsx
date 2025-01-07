import Logo from '@/assets/images/sesja_logo_jasne_biale.webp';
import DefaultButton from '@/components/common/DefaultButton';
import config from '@/config';
import { Box, Flex, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import ExportedImage from 'next-image-export-optimizer';
import { useEffect, useState } from 'react';
import { DesktopNavBar } from './Desktop';
import { MobileNavBar } from './Mobile';
import type { MenuProps } from './types';

export const HEADER_HEIGHT = 70;

const Live = () => {
  return (
    <Link
      href={'https://www.youtube.com/live/insert-link'}
      target="_blank"
      rel="noreferrer noopener"
      margin="auto"
      _hover={{ textDecorationLine: 'none' }}
      top="10px"
      position="fixed"
      left={{ base: `${172 + 20}px`, md: `${172 + 50}px`, lg: `${230 + 50}px` }}
    >
      <DefaultButton
        _hover={{ color: 'black' }}
        size="md"
        text="LIVE"
        bg={'red'}
        paddingLeft={{ base: '12px', md: '24px' }}
        paddingRight={{ base: '12px', md: '24px' }}
        color="whiteAlpha.900"
        type="submit"
      />
    </Link>
  );
};

const Navbar = () => {
  const [bg, setBg] = useState<string>('rgba(0,0,0,0)');
  const { t }: { t: (key: string) => string } = useTranslation();
  const showLive = ['2025-04-04', '2025-04-05', '2025-04-06'].includes(
    new Date().toISOString().slice(0, 10),
  );

  const menu: MenuProps = [
    { text: t('menu.about'), sectionId: 'about' },
    {
      ...(config.SHOW_SPEAKERS && {
        text: t('menu.speakers'),
        sectionId: 'speakers',
      }),
    },
    {
      ...(config.SHOW_AGENDA && {
        text: t('menu.agenda'),
        sectionId: 'agenda',
      }),
    },
    { text: t('menu.previous'), sectionId: 'previous' },
    { text: t('menu.sponsors'), sectionId: 'sponsors' },
  ].filter(({ text }) => text) as MenuProps;

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setBg('rgba(0,0,0,1)');
    } else {
      setBg('rgba(0,0,0,0)');
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <Box
      id="main-navbar"
      height={`${HEADER_HEIGHT}px`}
      position="fixed"
      top="0"
      width="100%"
      zIndex="100"
      backgroundColor={bg}
    >
      <noscript>
        <style>{`
          #main-navbar {
            background-color: rgba(0,0,0,1) !important;
          }
        `}</style>
      </noscript>
      <Flex
        marginLeft={{ base: '2%', lg: '5' }}
        marginRight={{ base: '2%', lg: '0' }}
        justifyContent="space-between"
        height="100%"
        alignItems="center"
        top="0"
        mt="0"
      >
        <Box asChild>
          <a href="#head">
            <Box
              width={{ base: '172px', lg: '230px' }}
              height={{ base: '42px', lg: '56px' }}
              marginTop="auto"
              marginBottom="auto"
            >
              <ExportedImage
                src={Logo}
                alt="Logo Sesja Linuksowa"
                width={250}
                height={65}
                priority
                unoptimized
              />
            </Box>
          </a>
        </Box>

        <DesktopNavBar menu={menu} />

        <Box display={{ base: 'block', lg: 'none' }}>
          <MobileNavBar menu={menu} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
