import React, { useEffect, useState } from 'react';
import Image from '../../../components/AppImage';

const ClientCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clients = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      industry: "Technology"
    },
    {
      id: 2,
      name: "FinanceFirst",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
      industry: "Finance"
    },
    {
      id: 3,
      name: "HealthPlus",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop",
      industry: "Healthcare"
    },
    {
      id: 4,
      name: "EduLearn",
      logo: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=200&h=100&fit=crop",
      industry: "Education"
    },
    {
      id: 5,
      name: "RetailMax",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop",
      industry: "Retail"
    },
    {
      id: 6,
      name: "GreenEnergy",
      logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=100&fit=crop",
      industry: "Energy"
    },
    {
      id: 7,
      name: "FoodieDelight",
      logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=100&fit=crop",
      industry: "Food & Beverage"
    },
    {
      id: 8,
      name: "TravelWise",
      logo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200&h=100&fit=crop",
      industry: "Travel"
    }
  ];

  // Duplicate clients for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % clients?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients?.length]);

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-primary mb-4">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-text-secondary font-inter max-w-2xl mx-auto">
            Plus de 200 entreprises nous ont choisis pour leur transformation digitale
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / clients?.length)}%)`,
              width: `${duplicatedClients?.length * (100 / clients?.length)}%`
            }}
          >
            {duplicatedClients?.map((client, index) => (
              <div
                key={`${client?.id}-${index}`}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / clients?.length}%` }}
              >
                <div className="bg-white rounded-lg p-6 shadow-brand hover:shadow-brand-lg transition-brand group cursor-pointer">
                  <div className="aspect-video flex items-center justify-center mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={client?.logo}
                      alt={`${client?.name} logo`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-brand"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-poppins font-semibold text-primary text-sm mb-1">
                      {client?.name}
                    </h3>
                    <p className="text-xs text-text-secondary font-inter">
                      {client?.industry}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {clients?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-brand ${
                currentSlide === index
                  ? 'bg-gradient-brand' :'bg-border hover:bg-secondary/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-poppins font-bold gradient-text mb-2">200+</div>
            <div className="text-text-secondary font-inter">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-poppins font-bold gradient-text mb-2">500+</div>
            <div className="text-text-secondary font-inter">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-poppins font-bold gradient-text mb-2">98%</div>
            <div className="text-text-secondary font-inter">Taux de satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-poppins font-bold gradient-text mb-2">5 ans</div>
            <div className="text-text-secondary font-inter">D'expérience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;