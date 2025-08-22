import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ConsultationBooking from './components/ConsultationBooking';
import ContactMethods from './components/ContactMethods';
import OfficeLocations from './components/OfficeLocations';
import ProcessPreview from './components/ProcessPreview';
import TestimonialsSection from './components/TestimonialsSection';

const ContactConsultation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        <ContactHero />
        <ConsultationBooking />
        <ContactMethods />
        <OfficeLocations />
        <ProcessPreview />
        <TestimonialsSection />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-bold">Appistry</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Votre partenaire digital pour transformer vos idées en solutions innovantes.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-white/60">
              <span>appistry.developer@gmail.com</span>
              <span>•</span>
              <span>+212 7 77 38 51 75</span>
              <span>•</span>
              <span>Casablanca,Morocco</span>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-sm text-white/60">
              <p>&copy; {new Date()?.getFullYear()} Appistry. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactConsultation;