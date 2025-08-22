import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-brand rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-brand rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-brand rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-6">
              <Icon name="Users" size={16} className="mr-2" />
              Meet the Appistry Team
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-primary mb-6 leading-tight">
              Where <span className="gradient-text">Artistry</span> Meets{' '}
              <span className="gradient-text">Technology</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Founded on the belief that exceptional digital experiences emerge from the perfect fusion of creative vision and technical excellence. We're not just developers and designers—we're digital craftspeople passionate about transforming your ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center text-text-primary">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Calendar" size={20} className="text-success" />
                </div>
                <div>
                  <p className="font-semibold">Founded 2019</p>
                  <p className="text-sm text-text-secondary">5+ Years of Excellence</p>
                </div>
              </div>
              
              <div className="flex items-center text-text-primary">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <Icon name="MapPin" size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">Casablanca, Maroc</p>
                  <p className="text-sm text-text-secondary">Global Reach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-brand-lg hover-lift">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Appistry team collaborating in modern office"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-brand-lg p-6 border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <Icon name="Trophy" size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">150+</p>
                  <p className="text-sm text-text-secondary">Projects Delivered</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-brand-lg p-6 border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-sm text-text-secondary">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;