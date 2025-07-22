import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Process from '../components/ProcessTimeline'

export default function Home() {
  return (
    <>
      <Hero />
      <Process />  
      <Benefits />   {/* ← nuevo bloque */}
      {/* Servicios, Portafolio, etc. irán después */}
    </>
  );
}
