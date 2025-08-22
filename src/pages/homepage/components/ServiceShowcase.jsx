import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceShowcase = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Développement Web",
      description: "Applications web modernes et performantes avec React, Next.js et technologies de pointe",
      icon: "Code",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      metrics: { projects: "150+", satisfaction: "98%", performance: "99.9%" },
      technologies: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      id: 2,
      title: "Développement Mobile",
      description: "Applications mobiles natives et cross-platform pour iOS et Android",
      icon: "Smartphone",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      metrics: { projects: "80+", downloads: "2M+", rating: "4.8/5" },
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      id: 3,
      title: "Design UI/UX",
      description: "Expériences utilisateur exceptionnelles et interfaces intuitives",
      icon: "Palette",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      metrics: { projects: "200+", conversion: "+45%", users: "5M+" },
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"]
    },
    {
      id: 4,
      title: "Solutions IA",
      description: "Intelligence artificielle et machine learning pour automatiser vos processus",
      icon: "Brain",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      metrics: { projects: "45+", efficiency: "+60%", accuracy: "94%" },
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Python"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
            Nos <span className="gradient-text">Expertises</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-inter">
            Découvrez nos services à travers des démonstrations interactives de nos réalisations
          </p>
        </div>

        {/* Interactive Service Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Cards */}
          <div className="space-y-4">
            {services?.map((service, index) => (
              <div
                key={service?.id}
                className={`p-6 rounded-xl cursor-pointer transition-brand border-2 ${
                  activeService === index
                    ? 'bg-white border-secondary shadow-brand-lg'
                    : 'bg-surface border-transparent hover:border-secondary/30 hover:shadow-brand'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg transition-brand ${
                    activeService === index
                      ? 'bg-gradient-brand text-white' :'bg-secondary/10 text-secondary'
                  }`}>
                    <Icon name={service?.icon} size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-poppins font-semibold text-primary mb-2">
                      {service?.title}
                    </h3>
                    <p className="text-text-secondary font-inter mb-4">
                      {service?.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {service?.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-inter rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    className={`transition-brand ${
                      activeService === index ? 'text-secondary' : 'text-text-secondary'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={services?.[activeService]?.image}
                alt={services?.[activeService]?.title}
                className="w-full h-full object-cover transition-brand hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-brand cursor-pointer">
                  <Icon name="Play" size={24} className="text-white ml-1" />
                </div>
              </div>
            </div>
            
            {/* Metrics */}
            <div className="p-6">
              <h4 className="text-lg font-poppins font-semibold text-primary mb-4">
                Résultats Clés
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(services?.[activeService]?.metrics)?.map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-poppins font-bold gradient-text">
                      {value}
                    </div>
                    <div className="text-sm text-text-secondary capitalize font-inter">
                      {key === 'projects' ? 'Projets' : 
                       key === 'satisfaction' ? 'Satisfaction' :
                       key === 'performance' ? 'Performance' :
                       key === 'downloads' ? 'Téléchargements' :
                       key === 'rating' ? 'Note' :
                       key === 'conversion' ? 'Conversion' :
                       key === 'users' ? 'Utilisateurs' :
                       key === 'efficiency' ? 'Efficacité' :
                       key === 'accuracy' ? 'Précision' : key}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services-overview"
            className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 font-poppins font-semibold transition-brand"
          >
            <span>Découvrir tous nos services</span>
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;