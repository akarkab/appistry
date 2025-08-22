import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-secondary/20 text-white overflow-hidden">
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
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Icon name="MessageCircle" size={16} className="text-accent" />
                <span className="text-sm font-medium">Commençons votre projet</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight">
                Transformons vos
                <span className="block gradient-text bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">
                  idées en réalité
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Planifiez une consultation gratuite avec nos experts et découvrez comment nous pouvons propulser votre présence digitale vers de nouveaux sommets.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24h</div>
                <div className="text-sm text-white/70">Temps de réponse</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">200+</div>
                <div className="text-sm text-white/70">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-white/70">Clients satisfaits</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                iconName="Calendar"
                iconPosition="left"
              >
                Réserver une consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Phone"
                iconPosition="left"
              >
                Appeler maintenant
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Équipe dédiée</h3>
                    <p className="text-sm text-white/70">Experts à votre service</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Garantie qualité</h3>
                    <p className="text-sm text-white/70">Satisfaction assurée</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-warning" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Livraison rapide</h3>
                    <p className="text-sm text-white/70">Délais respectés</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-warning rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;