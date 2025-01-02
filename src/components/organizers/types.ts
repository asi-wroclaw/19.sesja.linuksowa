import type { StaticImageData } from 'next/image';

export type OrganizerProps = {
  image: string | StaticImageData;
  name: string;
  role: string;
};
