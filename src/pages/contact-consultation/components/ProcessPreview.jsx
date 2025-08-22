import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessPreview = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Premier contact',
      description: 'Vous nous contactez via le formulaire, téléphone ou email',
      duration: 'Immédiat',
      icon: 'MessageSquare',
      details: [
        'Réception de votre demande',
        'Accusé de réception automatique',
        'Attribution d\'un chef de projet'
      ]
    },
    {
      step: '02',
      title: 'Consultation découverte',
      description: 'Appel ou réunion pour comprendre vos besoins et objectifs',
      duration: '30-60 min',
      icon: 'Users',
      details: [
        'Analyse de vos besoins',
        'Présentation de nos services',
        'Questions/réponses détaillées'
      ]
    },
    {
      step: '03',
      title: 'Proposition personnalisée',
      description: 'Élaboration d\'une solution sur-mesure avec devis détaillé',
      duration: '2-5 jours',
      icon: 'FileText',
      details: [
        'Cahier des charges détaillé',
        'Proposition technique et créative',
        'Devis transparent et détaillé'
      ]
    },
    {
      step: '04',
      title: 'Validation et lancement',
      description: 'Finalisation des détails et démarrage officiel du projet',
      duration: '1-2 jours',
      icon: 'Rocket',
      details: [
        'Signature du contrat',
        'Planification détaillée',
        'Kick-off meeting'
      ]
    }
  ];

  const commitments = [
    {
      icon: 'Clock',
      title: 'Réponse rapide',
      description: 'Première réponse sous 24h maximum',
      color: 'text-success'
    },
    {
      icon: 'Shield',
      title: 'Confidentialité',
      description: 'Vos informations sont protégées',
      color: 'text-secondary'
    },
    {
      icon: 'Users',
      title: 'Accompagnement',
      description: 'Un interlocuteur dédié à votre projet',
      color: 'text-accent'
    },
    {
      icon: 'CheckCircle',
      title: 'Transparence',
      description: 'Devis détaillé sans surprise',
      color: 'text-warning'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Comment ça se passe après votre demande ?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Découvrez notre processus transparent et structuré pour transformer votre idée en projet concret.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-accent to-warning"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps?.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-surface rounded-xl p-6 hover-lift transition-brand relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step?.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-brand">
                    <Icon name={step?.icon} size={24} className="text-secondary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {step?.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-4">
                    {step?.description}
                  </p>
                  
                  {/* Duration */}
                  <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium mb-4">
                    <Icon name="Clock" size={12} />
                    <span>{step?.duration}</span>
                  </div>
                  
                  {/* Details */}
                  <ul className="space-y-1">
                    {step?.details?.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-xs text-text-secondary">
                        <Icon name="Check" size={12} className="text-success" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments */}
        <div className="bg-surface rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-bold text-primary mb-2">
              Nos engagements
            </h3>
            <p className="text-text-secondary">
              Ce que vous pouvez attendre de notre collaboration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments?.map((commitment, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${commitment?.color} bg-current/10`}>
                  <Icon name={commitment?.icon} size={28} className={commitment?.color} />
                </div>
                
                <h4 className="font-semibold text-primary mb-2">
                  {commitment?.title}
                </h4>
                
                <p className="text-sm text-text-secondary">
                  {commitment?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-bold text-primary mb-2">
              Questions fréquentes
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-brand">
              <div className="flex items-start space-x-3">
                <Icon name="HelpCircle" size={20} className="text-secondary mt-1" />
                <div>
                  <h4 className="font-medium text-primary mb-1">
                    La consultation est-elle vraiment gratuite ?
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Oui, absolument ! Notre première consultation est entièrement gratuite et sans engagement. C'est l'occasion pour nous de nous connaître et de voir si nous pouvons vous aider.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-brand">
              <div className="flex items-start space-x-3">
                <Icon name="HelpCircle" size={20} className="text-secondary mt-1" />
                <div>
                  <h4 className="font-medium text-primary mb-1">
                    Combien de temps faut-il pour recevoir un devis ?
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Après notre consultation, nous vous envoyons généralement une proposition détaillée sous 2 à 5 jours ouvrés, selon la complexité de votre projet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;