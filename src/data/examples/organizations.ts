/** biome-ignore-all lint/correctness/noUnusedVariables: false positive because example */
import asi from '@/assets/logo/asi-logo-trans.svg';
import type { SponsorshipEntity } from '@/components/sponsorship/types';

const ORGANIZATIONS = [
  {
    title: 'organizers',
    logos: [{ image: asi, href: 'https://www.asi.wroclaw.pl/' }],
  },
  {
    title: 'sponsors',
    logos: [],
  },
  {
    title: 'partners',
    logos: [],
  },
] as SponsorshipEntity[];
