import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CompanyStory from './components/CompanyStory';
import TeamProfiles from './components/TeamProfiles';
import ValuesShowcase from './components/ValuesShowcase';
import CultureInsights from './components/CultureInsights';
import ExpertiseMatrix from './components/ExpertiseMatrix';
import InnovationCommitment from './components/InnovationCommitment';
import CallToAction from './components/CallToAction';

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'About Us - Appistry Digital Agency | Where Artistry Meets Technology';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Discover Appistry Digital Agency - a team of passionate professionals combining creative vision with technical excellence. Learn about our story, values, culture, and commitment to innovation in digital transformation.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Company Story */}
        <CompanyStory />
        
        {/* Team Profiles */}
        <TeamProfiles />
        
        {/* Values Showcase */}
        <ValuesShowcase />
        
        {/* Culture Insights */}
        <CultureInsights />
        
        {/* Expertise Matrix */}
        <ExpertiseMatrix />
        
        {/* Innovation Commitment */}
        <InnovationCommitment />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-bold">Appistry</h3>
            </div>
            <p className="text-white/70 mb-6">
              Where artistry meets technology to create exceptional digital experiences.
            </p>
            <p className="text-white/50 text-sm">
              © {new Date()?.getFullYear()} Appistry Digital Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;