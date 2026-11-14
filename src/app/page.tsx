import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import MotionLab from "@/components/MotionLab";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import { PlayerProvider } from "@/components/Player";

export default function Home() {
  return (
    <PlayerProvider>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <MotionLab />
        <Services />
        <Process />
        <Contact />
      </main>
      <Reveal />
    </PlayerProvider>
  );
}
