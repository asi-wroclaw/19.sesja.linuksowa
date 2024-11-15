import { OrganizerProps } from '@/slices/Organizers';
import blankAvatar from '../assets/organizers/blank-avatar.jpg';
import Felix from '../assets/organizers/felix.png';
import Jacek from '../assets/organizers/jacek.png';
import Kamil from '../assets/organizers/kamil.jpg';
import Michal from '../assets/organizers/michal.jpg';
import Przemek from '../assets/organizers/przemek.jpg';
import Tomek from '../assets/organizers/rikardo.png';

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
    image: blankAvatar,
    name: 'Szymon Cichy',
    role: 'team.szymon',
  },
  {
    image: Jacek,
    name: 'Jacek Poziemski',
    role: 'team.jacek',
  },
  {
    image: blankAvatar,
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
    image: Przemek,
    name: 'Przemysław Jamontt',
    role: 'team.przemek',
  },
];
