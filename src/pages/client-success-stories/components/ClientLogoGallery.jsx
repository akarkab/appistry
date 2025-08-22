import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientLogoGallery = () => {
  const [hoveredClient, setHoveredClient] = useState(null);

  const clients = [
    {
      id: 1,
      name: 'TechFlow Solutions',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
      industry: 'SaaS Platform',
      projectType: 'Full Stack Development',
      year: '2024',
      description: 'Complete platform redesign and mobile app development'
    },
    {
      id: 2,
      name: 'HealthCare Plus',
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop',
      industry: 'Healthcare',
      projectType: 'UI/UX Design',
      year: '2023',
      description: 'Patient portal and telemedicine platform'
    },
    {
      id: 3,
      name: 'EcoMart',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop',
      industry: 'E-commerce',
      projectType: 'Web Development',
      year: '2024',
      description: 'Sustainable shopping platform with AI recommendations'
    },
    {
      id: 4,
      name: 'FinanceForward',
      logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=100&fit=crop',
      industry: 'FinTech',
      projectType: 'Mobile App',
      year: '2023',
      description: 'Personal finance management and investment tracking'
    },
    {
      id: 5,
      name: 'EduTech Academy',
      logo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=100&fit=crop',
      industry: 'Education',
      projectType: 'AI Solutions',
      year: '2024',
      description: 'Adaptive learning platform with AI tutoring'
    },
    {
      id: 6,
      name: 'GreenEnergy Co',
      logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=100&fit=crop',
      industry: 'Energy',
      projectType: 'Web Development',
      year: '2023',
      description: 'Smart grid monitoring and analytics dashboard'
    },
    {
      id: 7,
      name: 'FoodieConnect',
      logo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=100&fit=crop',
      industry: 'Food & Beverage',
      projectType: 'Mobile App',
      year: '2024',
      description: 'Restaurant discovery and food delivery platform'
    },
    {
      id: 8,
      name: 'PropertyPro',
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=100&fit=crop',
      industry: 'Real Estate',
      projectType: 'Full Stack',
      year: '2023',
      description: 'Property management and virtual tour platform'
    },
    {
      id: 9,
      name: 'SportsTech',
      logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=100&fit=crop',
      industry: 'Sports',
      projectType: 'Mobile App',
      year: '2024',
      description: 'Athlete performance tracking and team management'
    },
    {
      id: 10,
      name: 'TravelWise',
      logo: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200&h=100&fit=crop',
      industry: 'Travel',
      projectType: 'Web Development',
      year: '2023',
      description: 'Smart travel planning with AI recommendations'
    },
    {
      id: 11,
      name: 'ArtisanCraft',
      logo: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=200&h=100&fit=crop',
      industry: 'Marketplace',
      projectType: 'E-commerce',
      year: '2024',
      description: 'Handmade goods marketplace with creator tools'
    },
    {
      id: 12,
      name: 'MindfulMed',
      logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop',
      industry: 'Mental Health',
      projectType: 'Mobile App',
      year: '2023',
      description: 'Mental wellness tracking and therapy platform'
    }
  ];

  return (
    <div className="bg-muted rounded-xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-poppins font-bold text-primary mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          From startups to enterprises, we've partnered with companies across diverse industries to deliver exceptional digital experiences
        </p>
      </div>
      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
        {clients?.map((client) => (
          <div
            key={client?.id}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredClient(client?.id)}
            onMouseLeave={() => setHoveredClient(null)}
          >
            <div className="bg-white rounded-lg p-6 shadow-brand hover:shadow-brand-lg transition-brand border border-border group-hover:border-secondary/20">
              <div className="aspect-[2/1] flex items-center justify-center">
                <Image
                  src={client?.logo}
                  alt={`${client?.name} logo`}
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-brand"
                />
              </div>
            </div>

            {/* Hover Card */}
            {hoveredClient === client?.id && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white rounded-lg shadow-brand-lg border border-border p-4 z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden">
                    <Image
                      src={client?.logo}
                      alt={`${client?.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-primary text-sm">
                      {client?.name}
                    </div>
                    <div className="text-text-secondary text-xs">
                      {client?.industry} • {client?.year}
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary text-xs mb-3">
                  {client?.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary/10 text-secondary">
                    {client?.projectType}
                  </span>
                  <Icon name="ArrowUpRight" size={14} className="text-text-secondary" />
                </div>

                {/* Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-poppins font-bold text-secondary mb-2">150+</div>
          <div className="text-text-secondary text-sm">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-poppins font-bold text-secondary mb-2">25+</div>
          <div className="text-text-secondary text-sm">Industries</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-poppins font-bold text-secondary mb-2">89%</div>
          <div className="text-text-secondary text-sm">Long-term Partners</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-poppins font-bold text-secondary mb-2">4.9★</div>
          <div className="text-text-secondary text-sm">Average Rating</div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogoGallery;