import blankAvatar from './blank-avatar.jpg';
import { OrganizerProps } from '@/slices/Organizers';
import Michal from "./michal.jpg";
import Tomek from "./rikardo.png";
import Jakub from "./sylwek.png";
import Jacek from "./jackek.png";
import Kamil from "./kamil.jpg";
import Felix from "./felix.png";
import Ola from "./ola.jpeg";
import Wiktor from "./wiktor.png";
import Przemek from "./przemek.jpg"


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
