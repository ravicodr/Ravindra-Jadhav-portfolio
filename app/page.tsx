'use client';

import Starfield from '@/components/Starfield';
import Galaxies from '@/components/Galaxies';
import ShootingStars from '@/components/ShootingStars';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Effects */}
      <Starfield />
      <Galaxies />
      <ShootingStars />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
