import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ValuesShowcase = () => {
  const values = [
    {
      id: 1,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges and stay ahead of industry trends.",
      icon: "Lightbulb",
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      examples: [
        "AI-powered user experience optimization",
        "Blockchain integration for secure transactions",
        "Progressive Web App development"
      ]
    },
    {
      id: 2,
      title: "Quality Excellence",
      description: "Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail and quality.",
      icon: "Award",
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      examples: [
        "Comprehensive testing and QA processes",
        "Code review and best practices enforcement",
        "Performance optimization and monitoring"
      ]
    },
    {
      id: 3,
      title: "Client Partnership",
      description: "We build lasting relationships based on trust, transparency, and mutual success, treating every project as a collaborative journey.",
      icon: "Handshake",
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      examples: [
        "Regular communication and progress updates",
        "Collaborative design and development process",
        "Post-launch support and maintenance"
      ]
    },
    {
      id: 4,
      title: "Continuous Learning",
      description: "We invest in our team\'s growth and stay current with emerging technologies to deliver the most effective solutions.",
      icon: "BookOpen",
      color: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      examples: [
        "Regular training and certification programs",
        "Conference attendance and knowledge sharing",
        "Internal innovation projects and experiments"
      ]
    },
    {
      id: 5,
      title: "Sustainable Impact",
      description: "We create digital solutions that not only drive business success but also contribute positively to society and the environment.",
      icon: "Leaf",
      color: "bg-emerald-500",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      examples: [
        "Green hosting and energy-efficient solutions",
        "Accessibility-first design principles",
        "Digital solutions for social good"
      ]
    },
    {
      id: 6,
      title: "Creative Excellence",
      description: "We believe that exceptional design and user experience are fundamental to creating digital products that truly resonate.",
      icon: "Palette",
      color: "bg-pink-500",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      examples: [
        "User-centered design methodology",
        "Brand identity and visual storytelling",
        "Interactive and engaging user interfaces"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-6">
            <Icon name="Heart" size={16} className="mr-2" />
            Our Values
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
            What <span className="gradient-text">Drives</span> Us
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our core values shape every decision we make, every project we undertake, 
            and every relationship we build. They're not just words on a wall—they're 
            the foundation of our culture and the promise we make to our clients.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {values?.map((value, index) => (
            <div
              key={value?.id}
              className={`group relative overflow-hidden rounded-2xl shadow-brand hover-lift transition-brand ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="bg-white p-8 lg:p-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 ${value?.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon name={value?.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-primary mb-3">
                      {value?.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {value?.description}
                    </p>
                  </div>
                </div>

                <div className="relative mb-6">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={value?.image}
                      alt={value?.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-4">How we apply this:</h4>
                  <div className="space-y-3">
                    {value?.examples?.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-gradient-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={12} className="text-white" />
                        </div>
                        <p className="text-text-secondary text-sm">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values in Action */}
        <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-primary mb-4">
              Values in Action
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              See how our values translate into real results and meaningful impact for our clients and community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Target" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-poppins font-bold text-primary mb-4">Client Success Rate</h4>
              <p className="text-3xl font-bold text-secondary mb-2">98%</p>
              <p className="text-text-secondary">
                Of our clients report exceeding their project goals and continue working with us on future initiatives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Recycle" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-poppins font-bold text-primary mb-4">Sustainable Projects</h4>
              <p className="text-3xl font-bold text-success mb-2">75%</p>
              <p className="text-text-secondary">
                Of our projects incorporate sustainable practices and contribute to positive environmental impact.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-poppins font-bold text-primary mb-4">Innovation Index</h4>
              <p className="text-3xl font-bold text-accent mb-2">95%</p>
              <p className="text-text-secondary">
                Of our solutions incorporate cutting-edge technologies and innovative approaches to problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesShowcase;