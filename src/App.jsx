import React, { useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import MaintenancePlans from './components/MaintenancePlans';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const plansRef = useRef(null);
  const contactFormRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header 
        onServicesClick={() => scrollToSection(servicesRef)} 
        onAboutUsClick={() => scrollToSection(aboutUsRef)} 
        onPlansClick={() => scrollToSection(plansRef)}
        onContactClick={() => scrollToSection(contactFormRef)} 
      />
      <HeroSection 
        onContactClick={() => scrollToSection(contactFormRef)} 
        onServicesClick={() => scrollToSection(servicesRef)} 
      />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={plansRef}>
        <MaintenancePlans />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
