import Lang from '@/components/Lang';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import { Box, Flex, IconButton, Link, Text } from '@chakra-ui/react';
import { MenuIcon } from 'lucide-react';
import { useTranslation } from 'next-export-i18n';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from '../assets/sesja_logo_jasne_biale.webp';
import config from '../config';
import DefaultButton from './DefaultButton';

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
  const { t }: { t: (key: string) => string } = useTranslation('common');
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
              <Image alt="sesja linuksowa" src={logo} />
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

type MenuProps = {
  text: string;
  sectionId: string;
}[];

const MobileNavBar = ({ menu }: { menu: MenuProps }) => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <IconButton aria-label="Options" variant="outline" color="white">
          <MenuIcon />
        </IconButton>
      </MenuTrigger>
      <MenuContent className="light">
        {menu.map(({ text, sectionId }) => (
          <MenuItem key={text} value={text} asChild>
            <a href={`#${sectionId}`}>{text}</a>
          </MenuItem>
        ))}
        <MenuItem value="lang">
          <Lang textColor="#000" display={{ base: 'block', lg: 'none' }} />
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

const DesktopNavBar = ({ menu }: { menu: MenuProps }) => {
  return (
    <>
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        marginBottom="auto"
        marginTop="auto"
        marginLeft="5%"
        width="50%"
        maxWidth="90vh"
        gap="10px"
        minWidth="570px"
        justifyContent="space-between"
      >
        {menu.map(({ text, sectionId }) => (
          <Text
            asChild
            margin="auto"
            key={text}
            textTransform="capitalize"
            color="whiteAlpha.900"
            fontSize={['sm', 'sm', 'lg', 'xl']}
            cursor="pointer"
            _hover={{ color: 'primary' }}
            height="30px"
          >
            <a href={`#${sectionId}`}>{text}</a>
          </Text>
        ))}
      </Flex>
      <Lang />
    </>
  );
};

export default Navbar;
