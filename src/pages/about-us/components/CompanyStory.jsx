import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyStory = () => {
  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Founded with a vision to bridge the gap between creative design and technical excellence.",
      icon: "Rocket",
      color: "bg-blue-500"
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Delivered our first enterprise-level digital transformation project, setting new standards.",
      icon: "Building",
      color: "bg-green-500"
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew to 15+ specialists across design, development, and strategy disciplines.",
      icon: "Users",
      color: "bg-purple-500"
    },
    {
      year: "2022",
      title: "Innovation Lab",
      description: "Launched our R&D division focusing on AI integration and emerging technologies.",
      icon: "Lightbulb",
      color: "bg-orange-500"
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Received industry awards for excellence in digital innovation and client satisfaction.",
      icon: "Award",
      color: "bg-red-500"
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Continuing to push boundaries with AI-powered solutions and sustainable digital practices.",
      icon: "Zap",
      color: "bg-indigo-500"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: "CheckCircle" },
    { number: "50+", label: "Happy Clients", icon: "Smile" },
    { number: "25+", label: "Team Members", icon: "Users" },
    { number: "5+", label: "Years Experience", icon: "Calendar" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-6">
            <Icon name="BookOpen" size={16} className="mr-2" />
            Our Story
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
            The Journey of <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From a small team with big dreams to a recognized leader in digital transformation, 
            our story is one of continuous growth, learning, and pushing the boundaries of what's possible.
          </p>
        </div>

        {/* Company Mission */}
        <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-primary mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                To empower businesses through intelligent digital solutions that combine artistic vision 
                with technical precision. We believe that exceptional user experiences are born from the 
                perfect harmony of creativity and technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                  <p className="text-text-primary">Deliver solutions that exceed expectations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                  <p className="text-text-primary">Foster long-term partnerships built on trust</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                  <p className="text-text-primary">Stay at the forefront of technological innovation</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats?.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-brand text-center hover-lift">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat?.icon} size={20} className="text-white" />
                  </div>
                  <p className="text-2xl font-bold text-primary mb-2">{stat?.number}</p>
                  <p className="text-sm text-text-secondary">{stat?.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-brand rounded-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-brand hover-lift border border-border">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${milestone?.color} rounded-lg flex items-center justify-center mr-4`}>
                        <Icon name={milestone?.icon} size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{milestone?.year}</p>
                        <p className="text-lg font-semibold text-text-primary">{milestone?.title}</p>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{milestone?.description}</p>
                  </div>
                </div>
                
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-gradient-brand rounded-full border-4 border-white shadow-brand"></div>
                </div>
                
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;