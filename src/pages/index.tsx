import Navbar from '@/components/Navbar';
import ParticlesBackground from '@/components/ParticlesBackground';
import config from '@/config';
import { ORGANIZERS } from '@/data/organizers';
import { SPEAKERS } from '@/data/speakers';
import AboutUs from '@/slices/AboutUs';
import CallForPapers from '@/slices/CallForPapers';
import CodeOfConduct from '@/slices/CodeOfConduct';
import Hero from '@/slices/Hero';
import MapSection from '@/slices/MapSection';
import Organizers from '@/slices/Organizers';
import PreviousEdition from '@/slices/PreviousEdition';
import Speakers from '@/slices/Speakers';
import Sponsorship from '@/slices/Sponsorship';
import Tickets from '@/slices/Tickets';
import Agenda from '@/slices/agenda/Index';
import { Html } from 'next/document';
import Head from 'next/head';

const Main = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      {config.SHOW_CALL_FOR_PAPERS && <CallForPapers />}
      {config.SHOW_SPEAKERS && <Speakers speakersData={SPEAKERS} />}
      {config.SHOW_AGENDA && <Agenda />}
      <PreviousEdition />
      <Tickets />
      <MapSection />
      <Organizers organizersData={ORGANIZERS} />
      <Sponsorship />
      <CodeOfConduct />
      <ParticlesBackground />
    </main>
  );
};

export default function Home() {
  return (
    <Html suppressHydrationWarning>
      <Head>
        <title>19. Sesja Linuksowa</title>
        <meta name="description" content="19. Sesja Linuksowa" />
        <meta content="19. Sesja Linuksowa" property="og:site_name" />
        <meta content="pl_PL" property="og:locale" />
        <meta
          content="19. Sesja Linuksowa | Wrocław, Polska"
          property="og:title"
        />
        <meta content="http://sesja.linuksowa.pl/" property="og:url" />
        <meta
          content="Sesja Linuksowa to największa w Polsce konferencja poświęcona rozwiązaniom Open Source oraz najnowszym trendom w systemach z rodziny GNU/Linux."
          property="og:description"
        />
        <meta content="website" property="og:type" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="me" href="https://fosstodon.org/@ASI" />
      </Head>
      <Main />
    </Html>
  );
}
