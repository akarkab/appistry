import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Link } from 'react-router-dom';

const ConsultationCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-development', label: 'Mobile Development' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'ai-solutions', label: 'AI Solutions' },
    { value: 'full-stack', label: 'Full Stack Solution' },
    { value: 'consulting', label: 'Technical Consulting' }
  ];

  const budgetOptions = [
    { value: '10k-25k', label: '€10,000 - €25,000' },
    { value: '25k-50k', label: '€25,000 - €50,000' },
    { value: '50k-100k', label: '€50,000 - €100,000' },
    { value: '100k+', label: '€100,000+' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush project)' },
    { value: '1-2-months', label: '1-2 months' },
    { value: '3-4-months', label: '3-4 months' },
    { value: '6-months+', label: '6+ months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const consultationBenefits = [
    {
      icon: 'Users',
      title: 'Expert Consultation',
      description: 'Meet with our senior developers and designers to discuss your vision'
    },
    {
      icon: 'FileText',
      title: 'Detailed Proposal',
      description: 'Receive a comprehensive project proposal with timeline and pricing'
    },
    {
      icon: 'Shield',
      title: 'Risk Assessment',
      description: 'Identify potential challenges and mitigation strategies early'
    },
    {
      icon: 'Zap',
      title: 'Quick Turnaround',
      description: 'Get your proposal within 48 hours of our consultation'
    }
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-success/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" size={40} className="text-white" />
          </div>
          
          <h2 className="text-3xl font-poppins font-bold text-primary mb-4">
            Thank You for Your Interest!
          </h2>
          
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            We've received your consultation request and will get back to you within 24 hours. 
            Our team is excited to discuss your project and explore how we can help bring your vision to life.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg border border-border">
              <Icon name="Clock" size={24} className="text-secondary mx-auto mb-2" />
              <div className="font-medium text-primary">Response Time</div>
              <div className="text-sm text-text-secondary">Within 24 hours</div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <Icon name="Calendar" size={24} className="text-secondary mx-auto mb-2" />
              <div className="font-medium text-primary">Consultation</div>
              <div className="text-sm text-text-secondary">Free 60-min session</div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <Icon name="FileText" size={24} className="text-secondary mx-auto mb-2" />
              <div className="font-medium text-primary">Proposal</div>
              <div className="text-sm text-text-secondary">Detailed within 48h</div>
            </div>
          </div>

          <Button
            variant="outline"
            size="lg"
            iconName="ArrowLeft"
            iconPosition="left"
            asChild
          >
            <Link to="/services-overview">
              Back to Services
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-4">
                <Icon name="MessageCircle" size={16} />
                <span>Free Consultation</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-poppins font-bold leading-tight mb-4">
                Ready to Start
                <span className="block">Your Project?</span>
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Book a free consultation with our experts. We'll discuss your project requirements, 
                provide technical guidance, and create a customized proposal that fits your budget and timeline.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {consultationBenefits?.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={benefit?.icon} size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-white mb-1">
                      {benefit?.title}
                    </h4>
                    <p className="text-sm text-white/70">
                      {benefit?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold">24h</div>
                <div className="text-sm text-white/70">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold">Free</div>
                <div className="text-sm text-white/70">Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold">No</div>
                <div className="text-sm text-white/70">Commitment</div>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-poppins font-bold text-white mb-6">
              Get Your Free Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Your name"
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-white/60"
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-white/60"
                />
              </div>

              <Input
                label="Company Name"
                type="text"
                placeholder="Your company"
                value={formData?.company}
                onChange={(e) => handleInputChange('company', e?.target?.value)}
                className="bg-white/10 border-white/20 text-white placeholder-white/60"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  label="Service Needed"
                  placeholder="Select service"
                  options={serviceOptions}
                  value={formData?.service}
                  onChange={(value) => handleInputChange('service', value)}
                  required
                />
                
                <Select
                  label="Project Budget"
                  placeholder="Select budget range"
                  options={budgetOptions}
                  value={formData?.budget}
                  onChange={(value) => handleInputChange('budget', value)}
                />
              </div>

              <Select
                label="Timeline"
                placeholder="When do you need this completed?"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
              />

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Project Description
                </label>
                <textarea
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  value={formData?.message}
                  onChange={(e) => handleInputChange('message', e?.target?.value)}
                  rows={4}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                className="bg-white text-primary hover:bg-white/90 font-poppins font-semibold"
                iconName="Send"
                iconPosition="right"
              >
                {isSubmitting ? 'Sending Request...' : 'Book Free Consultation'}
              </Button>

              <p className="text-xs text-white/60 text-center">
                By submitting this form, you agree to our privacy policy. 
                We'll never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;