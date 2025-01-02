import type { StaticImageData } from 'next/image';

export type SocialUrls = {
  website?: string;
  github?: string;
  bluesky?: string;
  mastodon?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
};

export type SpeakerProps = {
  image: string | StaticImageData;
  urls: SocialUrls;
  name: string;
  description: string[];
};
