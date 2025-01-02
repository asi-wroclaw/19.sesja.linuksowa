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

export default function Page() {
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
}
