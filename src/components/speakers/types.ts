import type { StaticImageData } from 'next/image';

export type SocialUrls = {
  website: string;
  twitter: string;
  linkedin: string;
  github: string;
};

export type SpeakerProps = {
  image: string | StaticImageData;
  urls: SocialUrls;
  name: string;
  description: string[];
};
