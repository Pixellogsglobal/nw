import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import UniversityPartnerships from './components/UniversityPartnerships';
import ReviewSystem from './components/ReviewSystem';
import ContactSupport from './components/ContactSupport';
import Footer from './components/Footer';

const App = () => {
  return (
    <ParallaxProvider>
      <div className="relative min-h-screen bg-[#0A0A0B] text-white">
        <Navbar />
        <main className="md:ml-[80px] lg:ml-[240px]">
          <div className="space-y-0">
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <AboutUs />
            </section>
            <section id="universities">
              <UniversityPartnerships />
            </section>
            <section id="reviews">
              <ReviewSystem />
            </section>
            <section id="contact">
              <ContactSupport />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default App;