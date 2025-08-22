import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const contactOptions = [
    {
      title: "Start a Project",
      description: "Ready to transform your digital presence? Let\'s discuss your vision and create something extraordinary together.",
      icon: "Rocket",
      action: "Get Started",
      link: "/contact-consultation",
      color: "bg-gradient-brand"
    },
    {
      title: "Join Our Team",
      description: "Passionate about innovation and excellence? Explore career opportunities and become part of our growing family.",
      icon: "Users",
      action: "View Careers",
      link: "#",
      color: "bg-gradient-to-r from-green-500 to-emerald-600"
    },
    {
      title: "Partnership Opportunities",
      description: "Looking to collaborate or partner with us? Let\'s explore how we can create mutual value and success.",
      icon: "Handshake",
      action: "Partner With Us",
      link: "#",
      color: "bg-gradient-to-r from-purple-500 to-pink-600"
    }
  ];

  const quickStats = [
    { number: "150+", label: "Projects Delivered", icon: "CheckCircle" },
    { number: "50+", label: "Happy Clients", icon: "Smile" },
    { number: "98%", label: "Client Satisfaction", icon: "Heart" },
    { number: "5+", label: "Years Experience", icon: "Calendar" }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white font-medium text-sm mb-6">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Ready to Get Started?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
            Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Amazing</span> Together
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to start a new project, join our team, or explore partnership opportunities, 
            we're here to help you achieve your goals. Take the next step with Appistry.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickStats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-white" />
              </div>
              <p className="text-3xl font-bold text-white mb-2">{stat?.number}</p>
              <p className="text-white/70 text-sm">{stat?.label}</p>
            </div>
          ))}
        </div>

        {/* Contact Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactOptions?.map((option, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover-lift border border-white/20">
              <div className={`w-16 h-16 ${option?.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <Icon name={option?.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-white mb-4">
                {option?.title}
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                {option?.description}
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-brand"
                asChild
              >
                <Link to={option?.link}>
                  {option?.action}
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts and discover how we can help 
              bring your vision to life with cutting-edge technology and creative excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                className="bg-white text-primary hover:bg-white/90 font-poppins font-semibold"
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
                asChild
              >
                <Link to="/contact-consultation">
                  Schedule Free Consultation
                </Link>
              </Button>
              
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-brand"
                iconName="Phone"
                iconPosition="left"
                iconSize={16}
              >
                Call Us Now
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-8 text-white/60 text-sm">
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                <span>Free 30-min consultation</span>
              </div>
              <div className="flex items-center">
                <Icon name="Shield" size={16} className="mr-2" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center">
                <Icon name="Zap" size={16} className="mr-2" />
                <span>Quick response time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;