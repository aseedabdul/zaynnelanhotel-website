import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import Rooms from './components/Rooms.jsx';
import Services from './components/Services.jsx';
import Dining from './components/Dining.jsx';
import Spa from './components/Spa.jsx';
import Experiences from './components/Experiences.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Signature from './components/Signature.jsx';
import Testimonials from './components/Testimonials.jsx';
import Gallery from './components/Gallery.jsx';
import Location from './components/Location.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Intro />
        <Rooms />
        <Services />
        <Dining />
        <Spa />
        <Experiences />
        <WhyChoose />
        <Signature />
        <Testimonials />
        <Gallery />
        <Location />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
