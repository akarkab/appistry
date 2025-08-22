import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const ServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary/20 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>Premium Digital Solutions</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight">
                Services That
                <span className="block gradient-text bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Transform
                </span>
                Your Business
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                From concept to launch, we deliver comprehensive digital solutions that combine technical excellence with creative innovation. Discover how our expertise can accelerate your digital transformation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-poppins font-semibold"
                iconName="ArrowRight"
                iconPosition="right"
                asChild
              >
                <Link to="/contact-consultation">
                  Start Your Project
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-poppins font-semibold"
                iconName="Play"
                iconPosition="left"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-poppins font-bold">200+</div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-poppins font-bold">98%</div>
                <div className="text-sm text-white/70">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-poppins font-bold">5+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-white/60 text-sm">appistry.com</div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-1/2"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-20 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-lg flex items-center justify-center">
                      <Icon name="Code" size={24} className="text-white/80" />
                    </div>
                    <div className="h-20 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-lg flex items-center justify-center">
                      <Icon name="Smartphone" size={24} className="text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shadow-brand-lg">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-brand-lg">
              <Icon name="Star" size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;