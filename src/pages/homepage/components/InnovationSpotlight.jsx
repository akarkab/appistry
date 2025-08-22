import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InnovationSpotlight = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Transformation E-commerce",
      client: "RetailMax",
      industry: "Commerce de détail",
      challenge: "Site web obsolète avec taux de conversion faible",
      solution: "Refonte complète avec UX optimisée et intégration IA",
      results: {
        conversion: "+156%",
        revenue: "+89%",
        performance: "+200%"
      },
      beforeImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "AI/ML", "AWS"],
      duration: "4 mois",
      testimonial: "Appistry a transformé notre vision en réalité digitale. Les résultats dépassent nos attentes.",
      clientRole: "Directeur Digital"
    },
    {
      id: 2,
      title: "Application Mobile Santé",
      client: "HealthPlus",
      industry: "Santé",
      challenge: "Besoin d\'une app pour le suivi patient à distance",
      solution: "Application mobile native avec téléconsultation intégrée",
      results: {
        users: "50K+",
        satisfaction: "4.8/5",
        consultations: "+300%"
      },
      beforeImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "WebRTC", "HL7"],
      duration: "6 mois",
      testimonial: "Une solution qui révolutionne notre approche du soin patient.",
      clientRole: "Directeur Médical"
    },
    {
      id: 3,
      title: "Plateforme FinTech",
      client: "FinanceFirst",
      industry: "Finance",
      challenge: "Digitalisation des services bancaires traditionnels",
      solution: "Plateforme complète avec IA pour l\'analyse de risque",
      results: {
        processing: "+400%",
        accuracy: "99.2%",
        costs: "-45%"
      },
      beforeImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Python", "TensorFlow", "Blockchain"],
      duration: "8 mois",
      testimonial: "L\'expertise d\'Appistry en IA a révolutionné nos processus financiers.",
      clientRole: "CTO"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase(prev => (prev + 1) % caseStudies?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [caseStudies?.length]);

  const currentCase = caseStudies?.[activeCase];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6">
            Projets <span className="text-white/90">Innovants</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-inter">
            Découvrez comment nous transformons les défis en succès digitaux
          </p>
        </div>

        {/* Case Study Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Before/After Images */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Before */}
              <div className="space-y-2">
                <h4 className="text-sm font-poppins font-semibold text-white/70 uppercase tracking-wide">
                  Avant
                </h4>
                <div className="aspect-video rounded-lg overflow-hidden shadow-brand-lg">
                  <Image
                    src={currentCase?.beforeImage}
                    alt={`${currentCase?.title} - Avant`}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>

              {/* After */}
              <div className="space-y-2">
                <h4 className="text-sm font-poppins font-semibold text-white/70 uppercase tracking-wide">
                  Après
                </h4>
                <div className="aspect-video rounded-lg overflow-hidden shadow-brand-lg">
                  <Image
                    src={currentCase?.afterImage}
                    alt={`${currentCase?.title} - Après`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Results Metrics */}
            <div className="grid grid-cols-3 gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              {Object.entries(currentCase?.results)?.map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-poppins font-bold text-white mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-white/70 capitalize font-inter">
                    {key === 'conversion' ? 'Conversion' :
                     key === 'revenue' ? 'Revenus' :
                     key === 'performance' ? 'Performance' :
                     key === 'users' ? 'Utilisateurs' :
                     key === 'satisfaction' ? 'Satisfaction' :
                     key === 'consultations' ? 'Consultations' :
                     key === 'processing' ? 'Traitement' :
                     key === 'accuracy' ? 'Précision' :
                     key === 'costs' ? 'Coûts' : key}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-inter">
                  {currentCase?.industry}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-inter">
                  {currentCase?.duration}
                </span>
              </div>
              <h3 className="text-3xl font-poppins font-bold mb-2">
                {currentCase?.title}
              </h3>
              <p className="text-xl text-white/80 font-inter">
                {currentCase?.client}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-poppins font-semibold mb-2 flex items-center">
                  <Icon name="AlertCircle" size={20} className="mr-2" />
                  Défi
                </h4>
                <p className="text-white/80 font-inter">
                  {currentCase?.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-poppins font-semibold mb-2 flex items-center">
                  <Icon name="Lightbulb" size={20} className="mr-2" />
                  Solution
                </h4>
                <p className="text-white/80 font-inter">
                  {currentCase?.solution}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-poppins font-semibold mb-3 flex items-center">
                <Icon name="Code" size={20} className="mr-2" />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentCase?.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-inter"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Icon name="Quote" size={24} className="text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/90 font-inter italic mb-2">
                    "{currentCase?.testimonial}"
                  </p>
                  <p className="text-white/70 text-sm font-inter">
                    — {currentCase?.clientRole}, {currentCase?.client}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          {caseStudies?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`w-3 h-3 rounded-full transition-brand ${
                activeCase === index
                  ? 'bg-white' :'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="bg-white text-primary hover:bg-white/90 hover:shadow-brand-lg transition-brand font-poppins font-semibold px-8 py-4"
            iconName="ArrowRight"
            iconPosition="right"
            asChild
          >
            <Link to="/client-success-stories">
              Voir tous nos projets
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InnovationSpotlight;