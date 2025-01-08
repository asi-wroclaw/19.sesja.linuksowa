import Zielinski from '@/assets/speakers/zielinski.jpeg';
import type { SpeakerProps } from '@/components/speakers/types';

export const SPEAKERS: SpeakerProps[] = [
  {
    image: Zielinski,
    urls: {
      website: '',
      github: '',
      bluesky: 'https://bsky.app/profile/infzakladowy.bsky.social',
      mastodon: '',
      twitter: 'https://twitter.com/InfZakladowy',
      linkedin: 'https://www.linkedin.com/company/informatykzakladowy/',
      facebook: 'https://www.facebook.com/informatykzakladowy/',
    },
    name: 'Tomasz Zieliński',
    description: ['Zawodowy programista od 2003 roku, pasjonat bezpieczeństwa informatycznego, autor bloga Informatyk Zakładowy. Rozwijał systemy finansowe dla NBP, tworzył i weryfikował zabezpieczenia bankowych aplikacji mobilnych, brał udział w pracach nad wyszukiwarką internetową Microsoft Bing. Obecnie pracuje w firmie DeepL'],
  },
  {
    image: '',
    urls: {
      website: '',
      github: '',
      bluesky: '',
      mastodon: '',
      twitter: '',
      linkedin: '',
      facebook: '',
    },
    name: 'Może ty?',
    description: [],
  },
];
