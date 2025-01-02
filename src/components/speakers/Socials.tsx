import { HStack, Icon, Link } from '@chakra-ui/react';
import { LuGlobe } from 'react-icons/lu';
import {
  SiBluesky,
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiMastodon,
  SiX,
} from 'react-icons/si';
import type { SocialUrls } from './types';

const SOCIALS = [
  { key: 'website', IconElement: LuGlobe },
  { key: 'github', IconElement: SiGithub },
  { key: 'bluesky', IconElement: SiBluesky },
  { key: 'mastodon', IconElement: SiMastodon },
  { key: 'twitter', IconElement: SiX },
  { key: 'linkedin', IconElement: SiLinkedin },
  { key: 'facebook', IconElement: SiFacebook },
] as const;

export const Socials = ({ urls }: { urls: SocialUrls }) => (
  <HStack
    justifyContent="space-between"
    css={{
      '& > a': {
        color: 'white',
        '&:hover': {
          color: 'gray.200',
        },
      },
    }}
  >
    {SOCIALS.map(
      ({ key, IconElement }) =>
        urls[key] && (
          <Link
            key={key}
            href={urls[key]}
            color="white"
            _hover={{ color: 'gray.200' }}
          >
            <Icon fontSize={30}>
              <IconElement />
            </Icon>
          </Link>
        ),
    )}
  </HStack>
);
