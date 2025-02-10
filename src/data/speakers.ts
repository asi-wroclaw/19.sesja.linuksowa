import Izydorek from '@/assets/speakers/izydorek.png';
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
    description: [
      'Zawodowy programista od 2003 roku, pasjonat bezpieczeństwa informatycznego, autor bloga Informatyk Zakładowy. Rozwijał systemy finansowe dla NBP, tworzył i weryfikował zabezpieczenia bankowych aplikacji mobilnych, brał udział w pracach nad wyszukiwarką internetową Microsoft Bing. Obecnie pracuje w firmie DeepL',
    ],
  },
  {
    image: Izydorek,
    urls: {
      website: 'https://www.youtube.com/@netcoffee',
      github: 'https://github.com/szymonizydorek/',
      bluesky: '',
      mastodon: '',
      twitter: '', // https://medium.com/@becomedevops1
      linkedin: 'https://www.linkedin.com/in/sizydorek/',
      facebook: '',
    },
    name: 'Szymon Izydorek',
    description: [
      'Jestem inżynierem DevOps z pasją do zarządzania infrastrukturą IT oraz automatyzacji procesów. Specjalizuję się w pracy z systemami Linux oraz narzędziem Ansible, co pozwala mi efektywnie wdrażać rozwiązania DevOps i zarządzać środowiskami on-prem.',
      'Ukończyłem na pierwszym stopniu Politechnikę Wrocławską (Mechatronikę) a studia magisterskie na Uniwersytecie Aalborg w Kopenhagdze (kierunek IT oraz Przedsiębiorczość). Oprócz pracy tworze materiały edukacyjne dot. DevOps czy Linuxa na kanale NetCoffee',
      'Mam doświadczenie w prowadzeniu prezentacji, m.in. dla firmy Akamai. Kilka z moich wystąpień dostępnych jest online na kanale: https://www.youtube.com/@netcoffee',
    ],
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
