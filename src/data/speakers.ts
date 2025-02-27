import Izydorek from '@/assets/speakers/izydorek.webp';
import Przybylski from '@/assets/speakers/przybylski.webp';
import Sikora from '@/assets/speakers/sikora.webp';
import Zielinski from '@/assets/speakers/zielinski.webp';
import Krysinski from '@/assets/speakers/krysinski.webp';
import Koscik from '@/assets/speakers/koscik.webp';
import type { SpeakerProps } from '@/components/speakers/types';

export const SPEAKERS: SpeakerProps[] = [
  {
    name: 'Patryk Kościk',
    image: Koscik,
    urls: {},
    description: [
      'Patryk Kościk is a Software Engineer at Antmicro, where he has been working for the last three years, focusing on developing and extending the capabilities of the Renode open source simulation framework.',
      'His expertise lies in understanding systems at the lowest level of abstraction, and he is particularly interested in low-level software development.',
    ],
  },
  {
    name: 'Tomasz Zieliński',
    image: Zielinski,
    urls: {
      bluesky: 'https://bsky.app/profile/infzakladowy.bsky.social',
      twitter: 'https://twitter.com/InfZakladowy',
      linkedin: 'https://www.linkedin.com/company/informatykzakladowy/',
      facebook: 'https://www.facebook.com/informatykzakladowy/',
    },
    description: [
      'Zawodowy programista od 2003 roku, pasjonat bezpieczeństwa informatycznego, autor bloga Informatyk Zakładowy. Rozwijał systemy finansowe dla NBP, tworzył i weryfikował zabezpieczenia bankowych aplikacji mobilnych, brał udział w pracach nad wyszukiwarką internetową Microsoft Bing. Obecnie pracuje w firmie DeepL',
    ],
  },
  {
    name: 'Szymon Izydorek',
    image: Izydorek,
    urls: {
      website: 'https://www.youtube.com/@netcoffee',
      medium: 'https://medium.com/@becomedevops1',
      github: 'https://github.com/szymonizydorek/',
      linkedin: 'https://www.linkedin.com/in/sizydorek/',
    },
    description: [
      'Jestem inżynierem DevOps z pasją do zarządzania infrastrukturą IT oraz automatyzacji procesów. Specjalizuję się w pracy z systemami Linux oraz narzędziem Ansible, co pozwala mi efektywnie wdrażać rozwiązania DevOps i zarządzać środowiskami on-prem.',
      'Ukończyłem na pierwszym stopniu Politechnikę Wrocławską (Mechatronikę) a studia magisterskie na Uniwersytecie Aalborg w Kopenhagdze (kierunek IT oraz Przedsiębiorczość). Oprócz pracy tworze materiały edukacyjne dot. DevOps czy Linuxa na kanale NetCoffee',
      'Mam doświadczenie w prowadzeniu prezentacji, m.in. dla firmy Akamai. Kilka z moich wystąpień dostępnych jest online na kanale: https://www.youtube.com/@netcoffee',
    ],
  },
  {
    name: 'Piotr (ViruS) Sikora',
    image: Sikora,
    urls: {
      website: 'https://www.linkedin.com/in/piotr-sikora-37a1096/',
      github: 'https://github.com/piotr-sikora-v',
      mastodon: 'https://pol.social/@piotrsikora',
      linkedin: 'https://www.linkedin.com/in/piotr-sikora-37a1096/',
    },
    description: [
      'Z branżą IT związany od ponad 20 lat, specjalizuje się w administracji systemami Linux i budowie rozbudowanych klastrów. Obecnie koncentruje się na innowacjach z zakresu sztucznej inteligencji. Jest fundatorem Fundacji Technologie dla Ludzi, która promuje dostęp do nowoczesnych rozwiązań dla społeczności. Łączy wieloletnią wiedzę techniczną z pasją do innowacji, aby technologia realnie służyła ludziom.',
    ],
  },
  {
    name: 'Karol Przybylski',
    image: Przybylski,
    urls: {
      website: 'https://linuxdev.pl',
      youtube: 'https://www.youtube.com/@linuxdev_pl',
      linkedin: 'https://www.linkedin.com/in/karol-przybylski/',
    },
    description: [
      'Karol Przybylski - Programista Linuxa Embedded, tworzy oraz integruje systemy wbudowane dla różnych branż (telecom, digital TV, networking). Czerpie dużo satysfakcji z poznawania jak rzeczy działają "od środka", swoje eksperymenty i poradniki publikuje na blogu https://linuxdev.pl oraz kanale na youtube (https://www.youtube.com/@linuxdev_pl). W wolnym czasie lubi żeglować a jego ulubiony algorytm to quicksort.',
    ],
  },
  {
    name: 'Krzysztof Krysiński',
    image: Krysinski,
    urls: {
      website: 'https://krysinski.me/',
      github: 'https://github.com/flabbet',
      linkedin: 'https://www.linkedin.com/in/krysinski-dev/',
      twitter: 'https://x.com/flabbet',
    },
    description: [
      'Jestem programistą z pasji od 9 lat, a od 5 zajmuje się tym zawodowo. W 2018 i 2019 byłem finalistą Google Code-In. Tworzę otwarto-źródłowe oprogramowanie do edycji i tworzenia grafiki 2D - PixiEditor, zajmuje się tym na pełen etat.', 
      'Specjalizuje się w tworzeniu gier i aplikacji desktopowych, łączę te dwie umiejętności, żeby tworzyć jedyny w swoim rodzaju uniwersalny edytor do 2D, który powstał najpierw jako hobbystyczny projekt po godzinach a przerodził się w pełnoprawną aplikację z ponad 100 000 pobrań.',
      'Uwielbiam pisać oprogramowanie i udostępniać go jako open-source, bo wierzę, że dzięki temu każdy na tym korzysta i popycham tym, choćby w małym stopniu, rozwój świata do przodu.',
    ],
  },
  {
    name: 'Może ty?',
    image: '',
    urls: {
      website: '',
      medium: '',
      github: '',
      bluesky: '',
      mastodon: '',
      twitter: '',
      youtube: '',
      linkedin: '',
      facebook: '',
    },
    description: [],
  },
];
