import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServiceShowcase from './components/ServiceShowcase';
import ClientCarousel from './components/ClientCarousel';
import DigitalMaturityAssessment from './components/DigitalMaturityAssessment';
import InnovationSpotlight from './components/InnovationSpotlight';
import ContactCTA from './components/ContactCTA';

const Homepage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Appistry - Agence Digitale | Intelligence meets creativity';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Appistry transforme vos défis digitaux en solutions élégantes. Développement web, mobile, UI/UX et IA. Plus de 200 clients nous font confiance.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Appistry transforme vos défis digitaux en solutions élégantes. Développement web, mobile, UI/UX et IA. Plus de 200 clients nous font confiance.';
      document.getElementsByTagName('head')?.[0]?.appendChild(meta);
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with animated gradient background */}
        <HeroSection />
        
        {/* Interactive Service Demonstration */}
        <ServiceShowcase />
        
        {/* Client Logo Carousel with Stats */}
        <ClientCarousel />
        
        {/* Digital Maturity Assessment Tool */}
        <DigitalMaturityAssessment />
        
        {/* Innovation Spotlight with Case Studies */}
        <InnovationSpotlight />
        
        {/* Contact CTA with Multiple Touchpoints */}
        <ContactCTA />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold">Appistry</h3>
                  <p className="text-white/70 text-sm">Digital Agency</p>
                </div>
              </div>
              <p className="text-white/80 font-inter">
                Transforming digital challenges into elegant solutions that drive real business transformation.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-poppins font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80 font-inter">
                <li><a href="/services-overview" className="hover:text-white transition-brand">Développement Web</a></li>
                <li><a href="/services-overview" className="hover:text-white transition-brand">Applications Mobile</a></li>
                <li><a href="/services-overview" className="hover:text-white transition-brand">Design UI/UX</a></li>
                <li><a href="/services-overview" className="hover:text-white transition-brand">Solutions IA</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-poppins font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-white/80 font-inter">
                <li><a href="/about-us" className="hover:text-white transition-brand">À propos</a></li>
                <li><a href="/client-success-stories" className="hover:text-white transition-brand">Projets</a></li>
                <li><a href="/blog-insights" className="hover:text-white transition-brand">Blog</a></li>
                <li><a href="/contact-consultation" className="hover:text-white transition-brand">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-poppins font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/80 font-inter">
                <p>Casablanca,Maroc</p>
                <p>+212 7 77 38 51 75</p>
                <p>appistry.developer@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 font-inter">
              © {new Date()?.getFullYear()} Appistry. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white transition-brand">Mentions légales</a>
              <a href="#" className="text-white/60 hover:text-white transition-brand">RGPD</a>
              <a href="#" className="text-white/60 hover:text-white transition-brand">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;