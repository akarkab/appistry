import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocations = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const offices = [
    {
      id: 0,
      name: 'Bureau Principal - Paris',
      address: '15 Rue de la Paix, 75002 Paris',
      phone: '+212 7 77 38 51 75',
      email: 'paris@appistry.fr',
      hours: 'Lun-Ven: 9h-18h',
      coordinates: { lat: 48.8698, lng: 2.3316 },
      description: 'Notre siège social au cœur de Paris, proche de l\'Opéra et des Grands Boulevards.',
      amenities: ['Parking visiteurs', 'Accès PMR', 'Salle de réunion', 'WiFi gratuit'],
      team: 'Équipe complète - Design, Développement, Stratégie'
    },
    {
      id: 1,
      name: 'Bureau Lyon',
      address: '42 Cours Franklin Roosevelt, 69006 Lyon',
      phone: '+33 4 78 52 41 63',
      email: 'lyon@appistry.fr',
      hours: 'Lun-Ven: 9h-17h30',
      coordinates: { lat: 45.7640, lng: 4.8357 },
      description: 'Notre antenne lyonnaise dans le quartier des affaires de la Part-Dieu.',
      amenities: ['Métro à 2 min', 'Parking partenaire', 'Espace coworking'],
      team: 'Équipe développement et support client'
    },
    {
      id: 2,
      name: 'Bureau Marseille',
      address: '8 Boulevard Charles Livon, 13007 Marseille',
      phone: '+33 4 91 33 27 85',
      email: 'marseille@appistry.fr',
      hours: 'Lun-Ven: 9h-17h30',
      coordinates: { lat: 43.2965, lng: 5.3698 },
      description: 'Notre bureau méditerranéen avec vue sur le Vieux-Port.',
      amenities: ['Vue mer', 'Terrasse', 'Parking sécurisé'],
      team: 'Équipe design et marketing digital'
    }
  ];

  const currentOffice = offices?.[activeLocation];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Nos bureaux en France
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Rencontrez nos équipes dans l'un de nos bureaux ou planifiez une visite de nos locaux.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Office Selection */}
          <div className="space-y-4">
            {offices?.map((office, index) => (
              <div
                key={office?.id}
                onClick={() => setActiveLocation(index)}
                className={`p-4 rounded-xl cursor-pointer transition-brand ${
                  activeLocation === index
                    ? 'bg-white shadow-brand border-2 border-secondary/20'
                    : 'bg-white hover:shadow-brand-lg'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeLocation === index ? 'bg-secondary text-white' : 'bg-secondary/10 text-secondary'
                  }`}>
                    <Icon name="MapPin" size={20} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary mb-1">
                      {office?.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">
                      {office?.address}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{office?.hours}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Phone" size={12} />
                        <span>{office?.phone}</span>
                      </span>
                    </div>
                  </div>
                  
                  {activeLocation === index && (
                    <Icon name="Check" size={20} className="text-success" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Office Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-brand">
              <div className="h-64 bg-muted relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={currentOffice?.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${currentOffice?.coordinates?.lat},${currentOffice?.coordinates?.lng}&z=15&output=embed`}
                  className="border-0"
                ></iframe>
              </div>
            </div>

            {/* Office Information */}
            <div className="bg-white rounded-xl p-6 shadow-brand">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {currentOffice?.name}
              </h3>
              
              <p className="text-text-secondary mb-6">
                {currentOffice?.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-primary mb-3">Informations de contact</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="MapPin" size={16} className="text-text-secondary" />
                      <span>{currentOffice?.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Phone" size={16} className="text-text-secondary" />
                      <span>{currentOffice?.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Mail" size={16} className="text-text-secondary" />
                      <span>{currentOffice?.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Clock" size={16} className="text-text-secondary" />
                      <span>{currentOffice?.hours}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-3">Équipe & Services</h4>
                  <p className="text-sm text-text-secondary mb-3">
                    {currentOffice?.team}
                  </p>
                  
                  <h5 className="font-medium text-primary mb-2 text-sm">Commodités</h5>
                  <ul className="space-y-1">
                    {currentOffice?.amenities?.map((amenity, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="Check" size={14} className="text-success" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  className="bg-gradient-brand"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Planifier une visite
                </Button>
                
                <Button
                  variant="outline"
                  iconName="Navigation"
                  iconPosition="left"
                >
                  Itinéraire
                </Button>
                
                <Button
                  variant="ghost"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Appeler ce bureau
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-6 shadow-brand max-w-2xl mx-auto">
            <Icon name="Info" size={24} className="text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-primary mb-2">
              Rendez-vous sur site
            </h3>
            <p className="text-text-secondary mb-4">
              Tous nos bureaux sont accessibles sur rendez-vous. Nous vous recommandons de planifier votre visite à l'avance pour garantir la disponibilité de nos équipes.
            </p>
            <Button
              variant="outline"
              iconName="Calendar"
              iconPosition="left"
            >
              Réserver un créneau
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;