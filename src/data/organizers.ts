import Felix from '@/assets/organizers/felix.webp';
import Jacek from '@/assets/organizers/jacek.webp';
import Kamil from '@/assets/organizers/kamil.webp';
import Michal from '@/assets/organizers/michal.webp';
import Tomek from '@/assets/organizers/rikardo.webp';
import Szymon from '@/assets/organizers/szycic.webp';
import type { OrganizerProps } from '@/components/organizers/types';

// For the best optimization import images instead of using urls
export const ORGANIZERS: OrganizerProps[] = [
  {
    image: Michal,
    name: 'Michał Korczak',
    role: 'team.michal',
  },
  {
    image: Tomek,
    name: 'Tomasz Świątek',
    role: 'team.tomek',
  },
  {
    image: Szymon,
    name: 'Szymon Cichy',
    role: 'team.szymon',
  },
  {
    image: Jacek,
    name: 'Jacek Poziemski',
    role: 'team.jacek',
  },
  {
    image: '',
    name: 'Natalia Konopka',
    role: 'team.natalia',
  },
  {
    image: Kamil,
    name: 'Kamil Tomasikiewicz',
    role: 'team.kamil',
  },
  {
    image: Felix,
    name: 'Felix Zieliński',
    role: 'team.felix',
  },
  {
    image: '',
    name: 'Dariusz Fesser',
    role: 'team.darek',
  },
];
