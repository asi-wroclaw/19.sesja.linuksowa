import type { SpeechItem } from '@/components/agenda/types';

export const SATURDAY_AGENDA: SpeechItem[] = [
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
    title: '',
    author: '',
    //lang: [''],
    description: [''],
    recording: '',
  },
];

export const SUNDAY_AGENDA: SpeechItem[] = [
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
    start: 'TBA',
    end: 'TBA',
    title: 'Lightning talks',
    lang: ['en', 'pl'],
    description: [
      'Chciałbyś poruszyć ważny dla Ciebie temat, lub przekazać myśl do społeczności Open Source? Przyjdź i zrób to!',
    ],
    recording: '',
  },
];
