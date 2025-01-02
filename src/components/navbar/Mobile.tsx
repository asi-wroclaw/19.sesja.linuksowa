import Lang from '@/components/lang';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import { IconButton } from '@chakra-ui/react';
import { MenuIcon } from 'lucide-react';
import type { MenuProps } from './types';

export const MobileNavBar = ({ menu }: { menu: MenuProps }) => {
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
