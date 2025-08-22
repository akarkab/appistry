import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ExpertiseMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('technologies');

  const expertiseData = {
    technologies: {
      title: "Technologies & Frameworks",
      description: "Our technical expertise spans across modern web and mobile technologies",
      items: [
        { name: "React & Next.js", level: 95, projects: 45, icon: "Code" },
        { name: "Node.js & Express", level: 92, projects: 38, icon: "Server" },
        { name: "React Native", level: 88, projects: 25, icon: "Smartphone" },
        { name: "Python & Django", level: 85, projects: 22, icon: "Terminal" },
        { name: "AWS & Cloud Services", level: 90, projects: 35, icon: "Cloud" },
        { name: "AI & Machine Learning", level: 78, projects: 15, icon: "Brain" },
        { name: "Blockchain & Web3", level: 72, projects: 12, icon: "Link" },
        { name: "DevOps & CI/CD", level: 87, projects: 40, icon: "GitBranch" }
      ]
    },
    industries: {
      title: "Industry Experience",
      description: "Deep domain knowledge across various industry verticals",
      items: [
        { name: "E-commerce & Retail", level: 94, projects: 28, icon: "ShoppingCart" },
        { name: "FinTech & Banking", level: 89, projects: 18, icon: "CreditCard" },
        { name: "Healthcare & MedTech", level: 82, projects: 15, icon: "Heart" },
        { name: "Education & EdTech", level: 86, projects: 20, icon: "GraduationCap" },
        { name: "Real Estate & PropTech", level: 78, projects: 12, icon: "Home" },
        { name: "Travel & Hospitality", level: 85, projects: 16, icon: "Plane" },
        { name: "Media & Entertainment", level: 80, projects: 14, icon: "Play" },
        { name: "SaaS & Enterprise", level: 92, projects: 25, icon: "Building" }
      ]
    },
    services: {
      title: "Service Capabilities",
      description: "Comprehensive digital services from strategy to implementation",
      items: [
        { name: "Web Development", level: 96, projects: 65, icon: "Globe" },
        { name: "Mobile App Development", level: 91, projects: 35, icon: "Smartphone" },
        { name: "UI/UX Design", level: 93, projects: 55, icon: "Palette" },
        { name: "Digital Strategy", level: 87, projects: 30, icon: "Target" },
        { name: "API Development", level: 89, projects: 42, icon: "Zap" },
        { name: "Database Design", level: 85, projects: 38, icon: "Database" },
        { name: "Quality Assurance", level: 92, projects: 50, icon: "Shield" },
        { name: "Maintenance & Support", level: 94, projects: 60, icon: "Settings" }
      ]
    }
  };

  const categories = [
    { id: 'technologies', label: 'Technologies', icon: 'Code' },
    { id: 'industries', label: 'Industries', icon: 'Building' },
    { id: 'services', label: 'Services', icon: 'Briefcase' }
  ];

  const getColorByLevel = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-orange-500';
    return 'bg-gray-500';
  };

  const getGradientByLevel = (level) => {
    if (level >= 90) return 'from-green-500 to-emerald-600';
    if (level >= 80) return 'from-blue-500 to-indigo-600';
    if (level >= 70) return 'from-orange-500 to-red-600';
    return 'from-gray-500 to-slate-600';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-6">
            <Icon name="BarChart3" size={16} className="mr-2" />
            Expertise Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
            Our <span className="gradient-text">Technical</span> Capabilities
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive expertise across technologies, industries, and services. 
            Our team's diverse skill set ensures we can tackle any digital challenge with confidence and precision.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-xl p-2">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setActiveCategory(category?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-brand ${
                  activeCategory === category?.id
                    ? 'bg-white text-primary shadow-brand'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                <Icon name={category?.icon} size={16} />
                <span>{category?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Expertise Content */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
              {expertiseData?.[activeCategory]?.title}
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {expertiseData?.[activeCategory]?.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {expertiseData?.[activeCategory]?.items?.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${getColorByLevel(item?.level)} rounded-lg flex items-center justify-center`}>
                      <Icon name={item?.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-primary">{item?.name}</h4>
                      <p className="text-sm text-text-secondary">{item?.projects} projects completed</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{item?.level}%</p>
                    <p className="text-xs text-text-secondary">Proficiency</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`bg-gradient-to-r ${getGradientByLevel(item?.level)} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item?.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-text-secondary mt-2">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-primary mb-4">
              Expertise Summary
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our comprehensive skill matrix demonstrates our ability to deliver 
              exceptional results across diverse technologies and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Code" size={24} className="text-white" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">25+</p>
              <p className="text-text-secondary">Technologies Mastered</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Building" size={24} className="text-white" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">15+</p>
              <p className="text-text-secondary">Industries Served</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Briefcase" size={24} className="text-white" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">12+</p>
              <p className="text-text-secondary">Service Categories</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">89%</p>
              <p className="text-text-secondary">Average Proficiency</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-xl font-medium shadow-brand hover:shadow-brand-lg transition-brand">
              <Icon name="FileText" size={16} className="mr-2" />
              Download Full Capabilities Document
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMatrix;