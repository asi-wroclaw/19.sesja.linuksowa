import Izydorek from '@/assets/speakers/izydorek.webp';
import Przybylski from '@/assets/speakers/przybylski.webp';
import Sikora from '@/assets/speakers/sikora.webp';
import Zielinski from '@/assets/speakers/zielinski.webp';
import Krysinski from '@/assets/speakers/krysinski.webp';
import Koscik from '@/assets/speakers/koscik.webp';
import Drzewiecka from '@/assets/speakers/drzewiecka.webp';
import Slomka from '@/assets/speakers/slomka.webp';
import type { SpeakerProps } from '@/components/speakers/types';

export const SPEAKERS: SpeakerProps[] = [
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
    name: 'Patryk Kościk, Antmicro',
    image: Koscik,
    urls: {},
    description: [
      'Patryk Kościk is a Software Engineer at Antmicro, where he has been working for the last three years, focusing on developing and extending the capabilities of the Renode open source simulation framework.',
      'His expertise lies in understanding systems at the lowest level of abstraction, and he is particularly interested in low-level software development.',
    ],
  },
  {
    name: 'Sebastian Słomka, Nokia',
    image: Slomka,
    urls: {
        linkedin: 'www.linkedin.com/in/sebastian-słomka',
        github: 'https://github.com/sebastian-slomka',
    },
    description: [
      'Hi, I\'m Sebastian.',
      'I\'m a passionate software engineer with a deep love for Linux, especially embedded Linux. My journey started early—I installed my first Ubuntu when I was just nine years old, and ever since, I\'ve been fascinated by system architecture and designing complete embedded solutions.',
      'I\'m also a huge Yocto Project enthusiast and a deep user, both in my work and personal projects. I\'ve been working at Nokia since 2019 as a Technical Leader, where I design and develop in-house embedded Linux distributions for cutting-edge systems.',
      'Beyond that, I\'m an open-source software enthusiast and an embedded programmer, always striving to build robust, scalable, and secure embedded platforms that stand the test of time.',
      'When I\'m not immersed in code, I explore the depths as a scuba diver, embracing the challenge and adventure beneath the surface.',
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
      'Mam doświadczenie w prowadzeniu prezentacji, m.in. dla firmy Akamai. Kilka z moich wystąpień dostępnych jest online na kanale: https://www.youtube.com/@Become-DevOps',
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
    name: 'Kamila Drzewiecka',
    image: Drzewiecka,
    urls: {
      website: 'https://kamila.pet',
      github: 'https://codeberg.org/MicroPanda123',
      mastodon: 'https://fedi.fabrykajabo.li/@markasspandi',
    },
    description: [
      'Nerdka lubiąca komputery. Aktualnie uczę się Rusta, poprzednio Python, a moimi zainteresowaniami są m.in. kryptografia oraz administrowanie serwerami.', 
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
