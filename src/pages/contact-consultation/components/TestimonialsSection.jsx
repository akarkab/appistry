import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      name: 'Marie Dubois',
      position: 'Directrice Marketing',
      company: 'TechStart Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: `L'équipe d'Appistry a transformé notre vision en une plateforme web exceptionnelle. Leur approche consultative dès le premier contact nous a mis en confiance. Le processus était transparent et les délais respectés.`,
      rating: 5,
      project: 'Plateforme SaaS',
      result: '+150% de conversions'
    },
    {
      id: 1,
      name: 'Thomas Martin',
      position: 'CEO',
      company: 'InnovaCorp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: `La consultation initiale avec Appistry a été un véritable déclic. Ils ont su comprendre nos enjeux métier et proposer des solutions techniques innovantes. Le résultat dépasse nos attentes.`,
      rating: 5,
      project: 'Application mobile',
      result: '4.8/5 sur les stores'
    },
    {
      id: 2,
      name: 'Sophie Leroy',
      position: 'Responsable Digital',
      company: 'Retail Plus',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: `Dès notre premier échange, j'ai été impressionnée par leur professionnalisme et leur capacité d'écoute. Ils ont su traduire nos besoins complexes en solutions simples et efficaces.`,
      rating: 5,
      project: 'E-commerce',
      result: '+200% de ventes en ligne'
    }
  ];

  const stats = [
    { value: '200+', label: 'Projets réalisés', icon: 'Briefcase' },
    { value: '98%', label: 'Clients satisfaits', icon: 'Heart' },
    { value: '24h', label: 'Temps de réponse', icon: 'Clock' },
    { value: '5 ans', label: 'D\'expérience', icon: 'Award' }
  ];

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients sur leur expérience de collaboration avec Appistry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Testimonial Content */}
          <div className="space-y-8">
            {/* Main Testimonial */}
            <div className="bg-white rounded-2xl p-8 shadow-brand-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Image
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-primary">
                    {currentTestimonial?.name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {currentTestimonial?.position} • {currentTestimonial?.company}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-warning fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-text-primary leading-relaxed mb-6">
                "{currentTestimonial?.content}"
              </blockquote>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-sm font-medium text-primary">
                    {currentTestimonial?.project}
                  </p>
                  <p className="text-xs text-text-secondary">
                    Type de projet
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-success">
                    {currentTestimonial?.result}
                  </p>
                  <p className="text-xs text-text-secondary">
                    Résultat obtenu
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-brand ${
                    activeTestimonial === index
                      ? 'bg-secondary' :'bg-border hover:bg-secondary/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats & Trust Signals */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats?.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-brand hover-lift transition-brand">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name={stat?.icon} size={24} className="text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat?.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-xl p-6 shadow-brand">
              <h3 className="font-semibold text-primary mb-4 text-center">
                Certifications & Partenariats
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-surface rounded-lg">
                  <Icon name="Award" size={24} className="text-warning mx-auto mb-2" />
                  <p className="text-xs font-medium text-primary">Google Partner</p>
                </div>
                <div className="text-center p-3 bg-surface rounded-lg">
                  <Icon name="Shield" size={24} className="text-success mx-auto mb-2" />
                  <p className="text-xs font-medium text-primary">ISO 27001</p>
                </div>
                <div className="text-center p-3 bg-surface rounded-lg">
                  <Icon name="Star" size={24} className="text-accent mx-auto mb-2" />
                  <p className="text-xs font-medium text-primary">Top Agency</p>
                </div>
                <div className="text-center p-3 bg-surface rounded-lg">
                  <Icon name="CheckCircle" size={24} className="text-secondary mx-auto mb-2" />
                  <p className="text-xs font-medium text-primary">RGPD</p>
                </div>
              </div>
            </div>

            {/* Process Guarantee */}
            <div className="bg-gradient-to-r from-success/10 to-secondary/10 rounded-xl p-6 border border-success/20">
              <div className="flex items-start space-x-3">
                <Icon name="ShieldCheck" size={24} className="text-success mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">
                    Garantie satisfaction
                  </h3>
                  <p className="text-sm text-text-secondary mb-3">
                    Si vous n'êtes pas entièrement satisfait de notre première consultation, nous nous engageons à vous rembourser intégralement.
                  </p>
                  <div className="text-xs text-success font-medium">
                    ✓ Consultation gratuite • ✓ Devis sans engagement • ✓ Support inclus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-brand-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-text-secondary mb-6">
              Commencez votre projet avec une consultation gratuite et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-brand text-white px-6 py-3 rounded-lg font-semibold hover:shadow-brand-lg transition-brand flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>Réserver ma consultation</span>
              </button>
              <button className="border border-border text-primary px-6 py-3 rounded-lg font-semibold hover:bg-surface transition-brand flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>Discuter avec un expert</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;