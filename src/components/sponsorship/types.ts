import type { StaticImageData } from 'next/image';

export type SponsorshipEntity = {
  title: string;
  logos: {
    image: { default: StaticImageData } | StaticImageData;
    href: string;
  }[];
};
