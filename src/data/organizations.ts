import antmicro from '@/assets/logo/antmicro.svg';
import asi from '@/assets/logo/asi-logo-trans.svg';
import clug from '@/assets/logo/clug.png';
import fossgralnia from '@/assets/logo/fossgralnia.png';
import ftdl from '@/assets/logo/ftdl.webp';
import futureconf from '@/assets/logo/futureconf.svg';
import gynvael from '@/assets/logo/gynvael.png';
import hspoz from '@/assets/logo/knyfyrtel_logo_nocircle_lightbg.webp';
import lpi from '@/assets/logo/LPI_Logo-Colour.svg';
import manus from '@/assets/logo/manus.png';
import meetjs from '@/assets/logo/meetjs.png';
import mikrus from '@/assets/logo/mikrus.png';
import nokia from '@/assets/logo/nokia.jpg';
import plug from '@/assets/logo/plugo-cienie-url.svg';
import programistamag from '@/assets/logo/programistamag.jpg';
import pwr from '@/assets/logo/pwr.png';
import reszka from '@/assets/logo/reszka.png';
import sekurak from '@/assets/logo/sekurak.png';
import slido from '@/assets/logo/slido.svg';
import strefalinux from '@/assets/logo/strefa-linux.png';
import tryit from '@/assets/logo/tryit.png';
import wit from '@/assets/logo/wit.png';
import zaufana from '@/assets/logo/z3s.png';
import type { SponsorshipEntity } from '@/components/sponsorship/types';

export const ORGANIZATIONS = [
  {
    title: 'organizers',
    logos: [
      { image: asi, href: 'https://asi.wroclaw.pl/' },
      { image: clug, href: 'https://clug.space/' },
    ],
  },
  {
    title: 'sponsors',
    logos: [
      { image: nokia, href: 'https://www.nokia.com/' },
      { image: antmicro, href: 'https://antmicro.com/' },
    ],
  },
  {
    title: 'honorary-patrons',
    logos: [
      { image: pwr, href: 'https://pwr.edu.pl/' },
      { image: wit, href: 'https://wit.pwr.edu.pl/' },
    ],
  },
  {
    title: 'partners',
    logos: [
      { image: ftdl, href: 'https://ftdl.pl/' },
      { image: hspoz, href: 'https://hspoz.pl/' },
      { image: plug, href: 'https://linux.org.pl/' },
      { image: mikrus, href: 'https://mikr.us' },
      { image: programistamag, href: 'https://programistamag.pl/' },
      { image: manus, href: 'https://manus.pl/' },
      { image: lpi, href: 'https://www.lpi.org/' },
      { image: zaufana, href: 'https://zaufanatrzeciastrona.pl/' },
      { image: sekurak, href: 'https://sekurak.pl/' },
      { image: futureconf, href: 'https://futureconf.tech/' },
      { image: reszka, href: 'https://reszka.org/' },
      { image: slido, href: 'https://www.slido.com/' },
      { image: fossgralnia, href: 'https://fossgralnia.pl/' },
      { image: meetjs, href: 'https://meetjs.pl/' },
      { image: gynvael, href: 'https://gynvael.coldwind.pl/' },
      { image: strefalinux, href: 'https://strefalinux.pl/' },
      { image: tryit, href: 'https://www.tryit.org.pl/' },
    ],
  },
] as SponsorshipEntity[];
