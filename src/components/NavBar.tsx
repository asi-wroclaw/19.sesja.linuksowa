import Lang from '@/components/Lang';
import scrollToSection from '@/utils/scrollToSection';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  DarkMode,
  Flex,
  IconButton,
  LightMode,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  StyleProps,
  Text,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from '../assets/logo-duze-pl.webp';
import config from '../config';
import DefaultButton from './DefaultButton';

export const HEADER_HEIGHT = 70;

const NavBarStyle: StyleProps = {
  height: `${HEADER_HEIGHT}px`,
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: '100',
};

const Live = () => {
  const theme = useTheme();

  return (
    <Link
      isExternal
      href={'https://www.youtube.com/live/0GtdxGl5CUs'}
      target="_blank"
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
        bg={theme.colors.red}
        paddingLeft={{ base: '12px', md: '24px' }}
        paddingRight={{ base: '12px', md: '24px' }}
        color="whiteAlpha.900"
        type="submit"
      />
    </Link>
  );
};

const NavBar = () => {
  const theme = useTheme();
  const [bg, setBg] = useState<string>('rgba(0,0,0,0)');
  const [isSmallerThanLg] = useMediaQuery('(max-width: 62em)');
  const [isBiggerThanLg] = useMediaQuery('(min-width: 62em)');
  const { t }: { t: (key: string) => string } = useTranslation('common');
 // const showLive = ['2024-04-15', '2024-04-20', '2024-04-21'].includes(
 //   new Date().toISOString().slice(0, 10),
 // );
  const headId = 'head';

  const menu = [
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
   // { text: t('menu.contact'), sectionId: 'contact' },
  ].filter(({ text }) => text);

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
    <Box {...NavBarStyle} backgroundColor={bg}>
      <Flex
        marginLeft={{ base: '2%', lg: '5' }}
        marginRight={{ base: '2%', lg: '0' }}
        justifyContent="space-between"
        height="100%"
        alignItems="center"
        top="0"
        mt="0"
      >
        <Box
          width={{ base: '172px', lg: '230px' }}
          height={{ base: '42px', lg: '56px' }}
          marginTop="auto"
          marginBottom="auto"
          cursor="pointer"
        >
        
          <Image
            onClick={() => scrollToSection(headId)}
            alt="sesja linuksowa"
            src={logo}
          />
        </Box>
        {isBiggerThanLg && <DesktopNavBar menu={menu} />}
        {isSmallerThanLg && <MobileNavBar menu={menu} />}
      </Flex>
    </Box>
  );
};

type Menu = {
  text?: string;
  sectionId?: string;
}[];

const MobileNavBar = ({ menu }: { menu: Menu }) => {
  return (
    <DarkMode>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon color="#fff" />}
          variant="outline"
        />
        <LightMode>
          <MenuList>
            {menu.map(({ text, sectionId }) => (
              <MenuItem
                key={text}
                onClick={() => sectionId && scrollToSection(sectionId)}
              >
                {text}
              </MenuItem>
            ))}
            <MenuItem>
              <Lang textColor="#000" />
            </MenuItem>
          </MenuList>
        </LightMode>
      </Menu>
    </DarkMode>
  );
};

const DesktopNavBar = ({ menu }: { menu: Menu }) => {
  const theme = useTheme();

  return (
    <>
      <Flex
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
            margin="auto"
            key={text}
            textTransform="capitalize"
            color="whiteAlpha.900"
            fontSize={['sm', 'sm', 'lg', 'xl']}
            cursor="pointer"
            _hover={{ color: theme.colors.primary }}
            height="30px"
            onClick={() => sectionId && scrollToSection(sectionId)}
          >
            {text}
          </Text>
        ))}
      </Flex>
      <Lang />
    </>
  );
};

export default NavBar;
