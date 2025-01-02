import { HStack } from '@chakra-ui/react';
import Image from 'next/image';
import github from '../assets/socials/github.svg';
import linkedin from '../assets/socials/linkedin.svg';
import twitter from '../assets/socials/twitter.svg';
import website from '../assets/socials/website.svg';
import type { SocialUrls } from './types';

export const Socials = ({ name, urls }: { name: string; urls: SocialUrls }) => (
  <HStack width="60%" justifyContent="space-around">
    <a href={urls.website}>
      <Image alt={`${name} website`} src={website} />
    </a>
    <a href={urls.twitter}>
      <Image alt={`${name}t("menu.agenda") twitter`} src={twitter} />
    </a>
    <a href={urls.github}>
      <Image alt={`${name} github`} src={github} />
    </a>
    <a href={urls.linkedin}>
      <Image alt={`${name} linkedin`} src={linkedin} />
    </a>
  </HStack>
);
