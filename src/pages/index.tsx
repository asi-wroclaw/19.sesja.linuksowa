import Navbar from '@/components/navbar';
import ParticlesBackground from '@/components/common/ParticlesBackground';
import config from '@/config';
import { ORGANIZERS } from '@/data/organizers';
import { SPEAKERS } from '@/data/speakers';
import AboutUs from '@/components/about-us';
import CallForPapers from '@/components/call-for-papers';
import CodeOfConduct from '@/components/code-of-conduct';
import Hero from '@/components/hero';
import MapSection from '@/components/map-section';
import Organizers from '@/components/organizers';
import PreviousEdition from '@/components/previous-edition';
import Speakers from '@/components/speakers';
import Sponsorship from '@/components/sponsorship';
import Tickets from '@/components/tickets/Tickets';
import Agenda from '@/components/agenda';

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
