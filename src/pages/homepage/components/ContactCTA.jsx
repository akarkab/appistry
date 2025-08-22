import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const contactMethods = [
    {
      icon: "Phone",
      title: "Appelez-nous",
      description: "Discutons de votre projet",
      value: "+212 7 77 38 51 75",
      action: "tel:+33123456789"
    },
    {
      icon: "Mail",
      title: "Écrivez-nous",
      description: "Réponse sous 24h",
      value: "appistry.developer@gmail.com",
      action: "mailto:appistry.developer@gmail.com"
    },
    {
      icon: "MapPin",
      title: "Visitez-nous",
      description: "Paris, France",
      value: "123 Rue de la Tech, 75001",
      action: "#"
    }
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6">
                Prêt à transformer votre <span className="text-white/80">vision digitale</span> ?
              </h2>
              <p className="text-xl text-white/80 font-inter leading-relaxed">
                Rejoignez plus de 200 entreprises qui nous font confiance pour leur transformation digitale. 
                Commençons par une consultation gratuite pour définir votre stratégie.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-brand group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-brand">
                    <Icon name={method.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-semibold mb-1">
                      {method.title}
                    </h4>
                    <p className="text-white/70 text-sm font-inter mb-1">
                      {method.description}
                    </p>
                    <p className="text-white font-inter">
                      {method.value}
                    </p>
                  </div>
                  <Icon name="ExternalLink" size={20} className="text-white/60 group-hover:text-white transition-brand" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-poppins font-semibold mb-2 flex items-center">
                <Icon name="Bell" size={20} className="mr-2" />
                Restez informé
              </h3>
              <p className="text-white/80 text-sm font-inter mb-4">
                Recevez nos dernières actualités et conseils en transformation digitale
              </p>
              
              {isSubscribed ? (
                <div className="flex items-center space-x-2 text-green-300">
                  <Icon name="CheckCircle" size={20} />
                  <span className="font-inter">Merci pour votre inscription !</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="votre@email.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/60"
                    required
                  />
                  <Button
                    type="submit"
                    variant="default"
                    className="bg-white text-primary hover:bg-white/90"
                    iconName="Send"
                    iconPosition="right"
                  >
                    S'inscrire
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right Content - CTA Cards */}
          <div className="space-y-6">
            {/* Primary CTA */}
            <div className="bg-gradient-to-br from-secondary to-accent p-8 rounded-2xl shadow-brand-lg">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Calendar" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-poppins font-bold mb-2">
                    Consultation Gratuite
                  </h3>
                  <p className="text-white/90 font-inter">
                    30 minutes pour analyser vos besoins et définir votre stratégie digitale
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-white/80">
                    <Icon name="Clock" size={16} />
                    <span>Disponible sous 48h</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-white/80">
                    <Icon name="Shield" size={16} />
                    <span>Sans engagement</span>
                  </div>
                </div>
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  className="bg-white text-primary hover:bg-white/90 hover:shadow-brand-lg transition-brand font-poppins font-semibold"
                  iconName="ArrowRight"
                  iconPosition="right"
                  asChild
                >
                  <Link to="/contact-consultation">
                    Réserver ma consultation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-center space-y-4">
                <Icon name="FileText" size={32} className="mx-auto text-white/80" />
                <div>
                  <h4 className="font-poppins font-semibold mb-2">
                    Guide de Transformation Digitale
                  </h4>
                  <p className="text-white/80 text-sm font-inter">
                    Téléchargez notre guide complet pour réussir votre transformation
                  </p>
                </div>
                <Button
                  variant="outline"
                  fullWidth
                  className="border-white/30 text-white hover:bg-white hover:text-primary transition-brand"
                  iconName="Download"
                  iconPosition="left"
                >
                  Télécharger gratuitement
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-poppins font-bold mb-1">24h</div>
                <div className="text-white/70 text-sm font-inter">Temps de réponse</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-poppins font-bold mb-1">98%</div>
                <div className="text-white/70 text-sm font-inter">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-16 border-t border-white/20 text-center">
          <p className="text-white/60 font-inter mb-4">
            Vous préférez nous rencontrer ? Nous sommes basés à Paris
          </p>
          <div className="w-full h-64 bg-white/10 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Appistry Office Location"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=48.8566,2.3522&z=14&output=embed"
              className="grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;