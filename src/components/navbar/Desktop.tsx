import Lang from '@/components/lang';
import { Flex, Text } from '@chakra-ui/react';
import type { MenuProps } from './types';

export const DesktopNavBar = ({ menu }: { menu: MenuProps }) => {
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
            color="white"
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
