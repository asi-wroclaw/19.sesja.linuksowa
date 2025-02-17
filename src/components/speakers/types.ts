import type { StaticImageData } from 'next/image';

export type SocialUrls = {
  website?: string;
  medium?: string;
  github?: string;
  bluesky?: string;
  mastodon?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
  facebook?: string;
};

export type SpeakerProps = {
  name: string;
  image: string | StaticImageData;
  urls: SocialUrls;
  description: string[];
};
