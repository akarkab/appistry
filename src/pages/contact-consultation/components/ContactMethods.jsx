import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Téléphone',
      description: 'Appelez-nous directement pour une réponse immédiate',
      value: '+212 7 77 38 51 75',
      action: 'Appeler maintenant',
      available: 'Lun-Ven 9h-18h',
      color: 'text-success'
    },
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Envoyez-nous un message détaillé',
      value: 'appistry.developer@gmail.com',
      action: 'Envoyer un email',
      available: 'Réponse sous 24h',
      color: 'text-secondary'
    },
    {
      icon: 'MessageCircle',
      title: 'Chat en direct',
      description: 'Discutez avec notre équipe en temps réel',
      value: 'Chat disponible',
      action: 'Démarrer le chat',
      available: 'Lun-Ven 9h-18h',
      color: 'text-accent'
    },
    {
      icon: 'MapPin',
      title: 'Bureau Paris',
      description: 'Rencontrez-nous dans nos locaux',
      value: '15 Rue de la Paix, 75002 Paris',
      action: 'Voir sur la carte',
      available: 'Sur rendez-vous',
      color: 'text-warning'
    }
  ];

  const emergencyContact = {
    title: 'Support d\'urgence',
    description: 'Pour nos clients existants uniquement',
    phone: '+33 6 12 34 56 78',
    available: '24h/24, 7j/7'
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Plusieurs façons de nous contacter
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choisissez le moyen de communication qui vous convient le mieux. Notre équipe est là pour vous accompagner.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods?.map((method, index) => (
            <div key={index} className="bg-surface rounded-xl p-6 hover-lift transition-brand">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${method?.color} bg-current/10`}>
                <Icon name={method?.icon} size={24} className={method?.color} />
              </div>
              
              <h3 className="text-lg font-semibold text-primary mb-2">
                {method?.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-4">
                {method?.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <p className="font-medium text-primary">
                  {method?.value}
                </p>
                <p className="text-xs text-text-secondary">
                  {method?.available}
                </p>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                fullWidth
                className="text-sm"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={14}
              >
                {method?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-destructive/5 to-warning/5 border border-destructive/20 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="AlertTriangle" size={24} className="text-destructive" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {emergencyContact?.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {emergencyContact?.description}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="font-medium text-primary">
                      {emergencyContact?.phone}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {emergencyContact?.available}
                    </p>
                  </div>
                  
                  <Button
                    variant="destructive"
                    size="sm"
                    iconName="Phone"
                    iconPosition="left"
                  >
                    Appel d'urgence
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Commitment */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full">
            <Icon name="Clock" size={16} />
            <span className="text-sm font-medium">
              Engagement : Réponse garantie sous 24h maximum
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;