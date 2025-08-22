import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const serviceOptions = [
    { value: 'web-development', label: 'Développement Web' },
    { value: 'mobile-development', label: 'Développement Mobile' },
    { value: 'ui-ux-design', label: 'Design UI/UX' },
    { value: 'ai-solutions', label: 'Solutions IA' },
    { value: 'digital-strategy', label: 'Stratégie Digitale' },
    { value: 'other', label: 'Autre projet' }
  ];

  const timeSlots = [
    { value: '09:00', label: '09:00 - 10:00' },
    { value: '10:00', label: '10:00 - 11:00' },
    { value: '11:00', label: '11:00 - 12:00' },
    { value: '14:00', label: '14:00 - 15:00' },
    { value: '15:00', label: '15:00 - 16:00' },
    { value: '16:00', label: '16:00 - 17:00' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Mock form submission
    alert('Demande de consultation envoyée avec succès ! Nous vous contacterons sous 24h.');
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Réservez votre consultation gratuite
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choisissez le type de consultation qui correspond le mieux à vos besoins et planifiez un rendez-vous avec nos experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Consultation Types */}
          <div className="bg-white rounded-xl p-6 shadow-brand hover-lift transition-brand">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="MessageSquare" size={24} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Appel Découverte</h3>
            <p className="text-text-secondary mb-4">
              Discussion initiale pour comprendre vos besoins et objectifs (30 min)
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Analyse de vos besoins</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Recommandations initiales</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Estimation budgétaire</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-brand hover-lift transition-brand border-2 border-secondary/20">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Settings" size={24} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Consultation Technique</h3>
            <p className="text-text-secondary mb-4">
              Analyse approfondie des aspects techniques de votre projet (60 min)
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Architecture technique</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Stack technologique</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Plan de développement</span>
              </li>
            </ul>
            <div className="mt-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              <span className="text-xs font-medium text-secondary">Recommandé</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-brand hover-lift transition-brand">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Calendar" size={24} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Planification Projet</h3>
            <p className="text-text-secondary mb-4">
              Définition complète du scope et planning détaillé (90 min)
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Cahier des charges</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Timeline détaillée</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Proposition commerciale</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-brand-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Nom complet"
                  type="text"
                  name="name"
                  placeholder="Votre nom et prénom"
                  value={formData?.name}
                  onChange={handleInputChange}
                  required
                />
                
                <Input
                  label="Email professionnel"
                  type="email"
                  name="email"
                  placeholder="votre.email@entreprise.com"
                  value={formData?.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Entreprise"
                  type="text"
                  name="company"
                  placeholder="Nom de votre entreprise"
                  value={formData?.company}
                  onChange={handleInputChange}
                  required
                />
                
                <Input
                  label="Téléphone"
                  type="tel"
                  name="phone"
                  placeholder="+212 7 77 38 51 75"
                  value={formData?.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Service d'intérêt"
                  options={serviceOptions}
                  value={selectedService}
                  onChange={setSelectedService}
                  placeholder="Sélectionnez un service"
                  required
                />
                
                <Select
                  label="Créneau préféré"
                  options={timeSlots}
                  value={selectedTime}
                  onChange={setSelectedTime}
                  placeholder="Choisissez un horaire"
                  required
                />
              </div>

              <Input
                label="Décrivez votre projet"
                type="text"
                name="message"
                placeholder="Parlez-nous de vos objectifs, défis et attentes..."
                value={formData?.message}
                onChange={handleInputChange}
                description="Plus vous nous en direz, mieux nous pourrons vous conseiller"
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="bg-gradient-brand hover:shadow-brand-lg"
                  iconName="Send"
                  iconPosition="right"
                >
                  Réserver ma consultation
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Appeler directement
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-text-secondary">
                  <Icon name="Shield" size={16} className="inline mr-1 text-success" />
                  Vos données sont protégées et ne seront jamais partagées
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;