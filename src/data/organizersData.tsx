import { OrganizerProps } from '@/slices/Organizers';
import blankAvatar from '../assets/organizers/blank-avatar.jpg';
import Felix from '../assets/organizers/felix.png';
import Jacek from '../assets/organizers/jackek.png';
import Kamil from '../assets/organizers/kamil.jpg';
import Michal from '../assets/organizers/michal.jpg';
import Przemek from '../assets/organizers/przemek.jpg';
import Tomek from '../assets/organizers/rikardo.png';

export const ORGANIZERS: OrganizerProps[] = [
  {
    image: Michal,
    name: 'Michał Korczak',
    role: 'michal',
  },
  {
    image: Tomek,
    name: 'Tomasz Świątek',
    role: 'tomek',
  },
  {
    image: blankAvatar,
    name: 'Szymon Cichy',
    role: 'szymon',
  },
  {
    image: Jacek,
    name: 'Jacek Poziemski',
    role: 'jacek',
  },
  {
    image: blankAvatar,
    name: 'Natalia Konopka',
    role: 'natalia',
  },
  {
    image: Kamil,
    name: 'Kamil Tomasikiewicz',
    role: 'kamil',
  },
  {
    image: Felix,
    name: 'Felix Zieliński',
    role: 'felix',
  },
  {
    image: Przemek,
    name: 'Przemysław Jamontt',
    role: 'przemek',
  },
];
