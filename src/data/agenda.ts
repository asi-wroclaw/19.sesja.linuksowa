import type { SpeechItem } from '@/components/agenda/types';

export const SATURDAY_AGENDA: SpeechItem[] = [
  {
    start: '9:00',
    end: '',
    title: 'Rejestracja',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: 'Dostałeś z ministerstwa 10 milionów PDF-ów. Co teraz?',
    author: 'Tomasz Zieliński',
    lang: ['pl'],
    description: [
      'Gdy Ministerstwo Sprawiedliwości przekaże ci 10 milionów plików PDF z raportami losowego przydziału spraw, wraz z satysfakcją pojawia się wątpliwość - jak wyciągnąć użyteczne dane z takiej masy dokumentów? Opowiem o wyzwaniach związanych z realizacją serwisu https://slps.pl, począwszy od procesu pozyskania dokumentów, przez ekstrakcję tekstu z plików PDF, agregację wartości w bazie danych, aż po generowanie serwisu WWW i jego skrajnie oszczędny hosting. Bonusowo - przykłady błędów i niezgodności otrzymanych raportów ze specyfikacją Systemu Losowego Przydziału Spraw oraz rozważania, jaki sens ma robienie po godzinach takich dziwnych rzeczy.',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title:
      'Zephyr RTOS - A Linux-like approach in the world of microcontrollers',
    author: 'Patryk Kościk',
    lang: ['pl'],
    description: [
      'Linux has dominated servers and embedded systems for years, but how does this translate to the realm of the smallest devices, such as microcontrollers?',
      'There are many RTOS options on the market, but Zephyr stands out as one that implements an approach inspired by Linux in terms of a familiar ecosystem and tools for developers, such as Kconfig and Device Tree, which make it easier to configure and develop applications for embedded systems.',
      'In this presentation, we will not only explore how Zephyr draws inspiration from Linux but also see in practice how a unified hardware description system simplifies configuration and improves the portability of applications developed.',
      'Finally, we will demonstrate how to set up the environment and build an application for embedded systems based on Zephyr in just a few steps.',
    ],
    recording: '',
  },
  {
    start: '13:00',
    end: '14:00',
    title: 'Przerwa & Networking',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title:
      'Wielkie fale, wielkie narzędzia – surfowanie po drodze do skalowalnej infrastruktury',
    author: 'Szymon Izydorek',
    lang: ['pl'],
    description: [
      'Zarządzanie infrastrukturą jest jak surfowanie – każda fala wymaga odpowiedniej deski, a każde środowisko – odpowiednich narzędzi.',
      'W tej prezentacji zobaczymy, w jaki sposób narzędzia do zarządzania serwerami dopasowują się do różnych skal infrastruktury. Aby uczynić to bardziej interesującym, porównamy wielkość infrastruktury do fal, a narzędzia – do desek surfingowych.',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title:
      'Fediwersum: kulisy administracji największych polskich instancji Mastodona, PeerTube, Pixelfed i Mobilizon',
    author: 'Piotr Sikora',
    lang: ['pl'],
    description: [
      'Zastanawiałeś się kiedyś, czy istnieje życie poza Facebookiem i Twitterem? Okazuje się, że tak – i to całkiem prężne! W trakcie tej prezentacji pokażę Ci, czym jest Fediversum i jak działa ActivityPub, czyli protokół spinający różne serwisy takie jak Mastodon, PeerTube, Pixelfed czy Mobilizon w jedną wielką, wolną sieć. Dowiesz się, z czym musi mierzyć się ktoś, kto utrzymuje duże instancje (i co to w ogóle znaczy „instancje”?). Opowiem, jak radzimy sobie z problemami, które pojawiają się przy rosnącej liczbie użytkowników, a także jak staramy się utrzymać to wszystko niskim kosztem (działając przy tym jako fundacja!). Będzie trochę anegdot, trochę technikaliów i sporo praktycznych porad. ',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: 'Embedded Linux: Praktyczne Wprowadzenie',
    author: 'Karol Przybylski',
    lang: ['pl'],
    description: [
      'Dlaczego Embedded Linux się opłaca?',
      'Systemy wbudowane oparte na Linuxie dają wiele korzyści, między innymi szerokie wsparcie sprzętowe, darmowy dostęp do kodu źródłowego oraz aktualizacje wprowadzane przez społeczność.',
      '',
      'Z prezentacji dowiesz się:',
      '- Jakie są 4 niezbędne elementy systemu',
      '- Czym Linux różni się od systemów bare metal i RTOS',
      '- Jakie wymagania trzeba spełnić i kiedy nie warto go stosować',
      '',
      'Na koniec pokażę, w jaki sposób można skonfigurować i zbudować swój pierwszy dedykowany system za pomocą Buildroota.',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: 'Mamy Blendera, ale gdzie jest coś do 2D?',
    author: 'Krzysztof Krysiński',
    lang: ['pl'],
    description: [
      'Prawie każdy słyszał o Blenderze, otwarto-źródłowej aplikacji do tworzenia modeli 3D, która z sukcesem konkuruje z zamknięto-źródłowymi gigantami. Ale dlaczego nie mamy takiego odpowiednika, tylko do 2D?',
      'W tej prezentacji zobaczymy co może być przyczyną i jak PixiEditor próbuje to rozwiązać.',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: 'Sztuka tworzenia koła od nowa',
    author: 'Kamila Drzewiecka',
    lang: ['pl'],
    description: [
      'Niektórzy narzekają, że "po co to robisz, skoro już istnieje?". Postaram się odpowiedzieć na to pytanie.',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: 'Wiele oblicz skalowalności, czyli o różnych twarzach optymalizacji',
    author: 'Maciel Lasyk',
    lang: ['pl'],
    description: [
      'Na co dzień pracuję w Elasticu, w zespole Platform Capacity (część SRE). Głównym produktem jest baza danych (Elasticsearch z całą nadbudówką) w scenariuszu SaaS. Głównymi zadaniami naszego zespołu jest m.inn. upewnienie się, że nie zabraknie nam przestrzeni w chmurze (może się wydawać mało prawdopodobne, ale w cloudzie, jak w każdej serwerowni, ilość sprzętu jest skończona!) Dodatkowo musimy być pewni, iż te maszyny, które mamy, są optymalnie wykorzystane (czyli ani za mało, żeby nie przepłacać, ani za dużo, coby aplikacje tego nie odczuły). Ostatecznie, klient po kliknięciu "powiększ moją bazę danych" powinien w krótkim czasie (bliżej zera niż nieskończoności) uzyskać to, o co prosi.',
      'To wszystko może się wydawać dość proste, jednak w naszej skali jest skomplikowane. Po trzech latach roboty w Elasticu (i ponad 20-tu w serwerach fizycznych, jak i chmurkowych), zebrałem niektóre doświadczenia, którymi warto się podzielić - właśnie w trakcie tej prezentacji. Będzie o skalowaniu w górę, w bok, o różnych strategiach optymalizacji, o metodach capacity planningu (w chmurze, ale i na bare metalach), oraz - wisienka na torcie - przedstawię Wam swój własny projekt do skalowania metalowych pudełek we własnej piwnicy (w clustrze k8s).',
      'Postaram się połączyć matematykę z fizyką, IT oraz pragmatyzmem, bazując na doświadczeniach ze startupów, scale-upów oraz dużych firm. A - no i z własnej piwnicy - to najważniejsze! ;)',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title:
      'Beyond Raspbian and Ubuntu: Why Yocto is the Right Tool for Production-Ready Embedded Linux',
    author: 'Sebastian Słomka',
    lang: ['en'],
    description: [
      'Many developers start their embedded Linux journey using general-purpose distributions like Ubuntu or Raspbian. While these are great for prototyping and development, they fall short when scaling to production-ready, high-performance, and long-term maintainable embedded systems. This talk will explore why Yocto is the preferred tool for professional embedded Linux development and how it addresses key challenges that pre-built distributions cannot.',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: 'Agent AI na Raspberry Pi',
    author: 'Artur Skrzypczyk',
    lang: ['pl'],
    description: [
      'Agent AI na Raspberry Pi – lokalne AI w akcji',
      'Jak stworzyć autonomicznego asystenta AI działającego offline na Raspberry Pi? W tej prelekcji pokażemy, jak wykorzystać Ollama, LLaMA 3.2, LLaVA oraz technologie TTS i Speech-to-Text, by uruchomić model językowy i zintegrować go z systemami IoT. Omówimy kluczowe wyzwania, optymalizację wydajności i praktyczne zastosowania. Jeśli interesuje Cię AI działające bez chmury, zapraszamy!',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: 'Kubernetes CNI - Deep dive',
    author: 'Vladimir Mitiouchev',
    lang: ['pl'],
    description: [
      'A journey through configuring networks in containers from scratch. What CNI is, what it can do, and how to write your own plugins.',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: 'Can we boot Linux from just a floppy?',
    author: 'Kamila Szewczyk',
    lang: ['en'],
    description: [
      'Modern Linux distributions are overwhelming in size. Even the most hard-core ones like TinyCoreLinux are far away from fitting in a shoddy 1.44MB diskette. In this talk I would like to answer the question of how small a truly minimal Linux distribution would be. Outside of tweaking the kernel, we will also develop a custom compression method that helps us accomplish this goal.',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: 'Infrastruktura nie/domowa dla *nixiarzy',
    author: 'Piotr Pyciński',
    lang: ['pl'],
    description: [
      'Postaram się Wam opowiedzieć historię admina, który od 10 lat buduje i utrzymuje swojego LABa oraz mały hosting. Znacie to? Wszak posiadanie własych serwerów to wręcz obowiązek każdego admina. Ale czy na pewno to dobry pomysł? ',
      'Podczas tej prelekcji podzielę się z Wami moimi doświadczeniami, w tym błędami, które popełniłem, oraz dobrymi decyzjami, które podjąłem.',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: 'Human language is the best programming language there is',
    author: 'Krzysztof Kowalczyk',
    lang: ['en'],
    description: [
      'In a world driven by code, we often overlook the most powerful and versatile programming language - human language. Unlike AI, which generates code but lacks true understanding, human communication remains irreplaceable. This talk explores how natural language shapes problem-solving, fosters collaboration, and drives innovation in software development.',
    ],
    recording: '',
  },
  {
    start: '17:50',
    end: '18:00',
    title: 'Zamknięcie dnia',
  },
];

export const SUNDAY_AGENDA: SpeechItem[] = [
  {
    start: '9:00',
    end: '',
    title: 'Rejestracja',
  },
  {
    start: '13:00',
    end: '14:00',
    title: 'Przerwa & Networking',
  },
  {
    start: '14:00',
    end: '14:45',
    title: 'Lightning talks',
    lang: ['en', 'pl'],
    description: [
      'Chciałbyś poruszyć ważny dla Ciebie temat, lub przekazać myśl do społeczności Open Source? Przyjdź i zrób to!',
    ],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: '',
    author: '',
    //lang: [''],
    description: [''],
    recording: '',
  },
  {
    start: '16:50',
    end: '17:00',
    title: 'Oficjalne zamknięcie konferencji i wspólne zdjęcie',
  },
];
