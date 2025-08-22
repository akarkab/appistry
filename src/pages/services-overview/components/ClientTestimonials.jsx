import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sophie Dubois",
      position: "CTO",
      company: "TechFlow Solutions",
      industry: "FinTech",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "Web Development",
      project: "Financial Dashboard Platform",
      testimonial: `Appistry transformed our complex financial data into an intuitive, powerful dashboard that our clients absolutely love. Their React expertise and attention to detail exceeded our expectations. The platform handles millions of transactions seamlessly.`,
      results: [
        { metric: "User Engagement", value: "+340%" },
        { metric: "Load Time", value: "1.2s" },
        { metric: "Client Satisfaction", value: "98%" }
      ],
      timeline: "8 weeks",
      budget: "€45,000"
    },
    {
      id: 2,
      name: "Marc Lefebvre",
      position: "Founder & CEO",
      company: "EcoMarket",
      industry: "E-commerce",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "Mobile Development",
      project: "Sustainable Shopping App",
      testimonial: `The mobile app Appistry built for us revolutionized how our customers shop sustainably. The React Native solution works flawlessly across platforms, and the AI-powered recommendations have increased our sales by 280%. Outstanding work!`,
      results: [
        { metric: "Sales Increase", value: "+280%" },
        { metric: "App Store Rating", value: "4.9/5" },
        { metric: "Daily Active Users", value: "25K+" }
      ],
      timeline: "12 weeks",
      budget: "€65,000"
    },
    {
      id: 3,
      name: "Camille Martin",
      position: "Head of Digital",
      company: "MedCare Plus",
      industry: "Healthcare",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "UI/UX Design",
      project: "Patient Portal Redesign",
      testimonial: `Appistry's design team created a patient portal that's both beautiful and incredibly functional. They understood our complex healthcare workflows and simplified them into an intuitive interface. Patient satisfaction scores have never been higher.`,
      results: [
        { metric: "Patient Satisfaction", value: "+95%" },
        { metric: "Task Completion", value: "+60%" },
        { metric: "Support Tickets", value: "-75%" }
      ],
      timeline: "6 weeks",
      budget: "€28,000"
    },
    {
      id: 4,
      name: "Thomas Rousseau",
      position: "Innovation Director",
      company: "AutoTech Industries",
      industry: "Automotive",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "AI Solutions",
      project: "Predictive Maintenance System",
      testimonial: `The AI solution Appistry developed for our manufacturing line has saved us millions in prevented downtime. Their machine learning algorithms predict equipment failures with 94% accuracy. It's transformed our entire maintenance strategy.`,
      results: [
        { metric: "Downtime Reduction", value: "-85%" },
        { metric: "Prediction Accuracy", value: "94%" },
        { metric: "Cost Savings", value: "€2.3M" }
      ],
      timeline: "16 weeks",
      budget: "€120,000"
    }
  ];

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Star" size={16} />
            <span>Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            What Our Clients
            <span className="gradient-text"> Say About Us</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with Appistry and the results we've delivered together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Testimonial Navigation */}
          <div className="lg:col-span-1">
            <h3 className="font-poppins font-semibold text-primary mb-4">Featured Clients</h3>
            <div className="space-y-3">
              {testimonials?.map((testimonial, index) => (
                <button
                  key={testimonial?.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-brand ${
                    activeTestimonial === index
                      ? 'bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/30 shadow-brand'
                      : 'bg-surface border-border hover:border-secondary/30 hover:bg-secondary/5'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial?.avatar}
                      alt={testimonial?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-primary text-sm truncate">
                        {testimonial?.name}
                      </div>
                      <div className="text-text-secondary text-xs truncate">
                        {testimonial?.position} at {testimonial?.company}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                          {testimonial?.service}
                        </span>
                        <div className="flex items-center">
                          {[...Array(testimonial?.rating)]?.map((_, i) => (
                            <Icon key={i} name="Star" size={12} className="text-warning fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Testimonial */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
              {/* Client Info */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-poppins font-bold text-primary">
                      {currentTestimonial?.name}
                    </h4>
                    <p className="text-text-secondary">
                      {currentTestimonial?.position} at {currentTestimonial?.company}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded-full">
                        {currentTestimonial?.industry}
                      </span>
                      <div className="flex items-center">
                        {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <Icon name="Quote" size={32} className="text-secondary/30" />
              </div>

              {/* Project Details */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                    <Icon name="Briefcase" size={20} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-poppins font-semibold text-primary">
                      {currentTestimonial?.project}
                    </h5>
                    <p className="text-sm text-text-secondary">
                      {currentTestimonial?.service} • {currentTestimonial?.timeline} • {currentTestimonial?.budget}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg text-text-primary leading-relaxed mb-6 italic">
                "{currentTestimonial?.testimonial}"
              </blockquote>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {currentTestimonial?.results?.map((result, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg border border-border">
                    <div className="text-2xl font-poppins font-bold text-success mb-1">
                      {result?.value}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {result?.metric}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex items-center justify-center space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-brand ${
                      activeTestimonial === index
                        ? 'bg-gradient-brand' :'bg-border hover:bg-secondary/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border border-border">
                <div className="text-2xl font-poppins font-bold text-primary">200+</div>
                <div className="text-xs text-text-secondary">Projects Delivered</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-border">
                <div className="text-2xl font-poppins font-bold text-primary">98%</div>
                <div className="text-xs text-text-secondary">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-border">
                <div className="text-2xl font-poppins font-bold text-primary">4.9/5</div>
                <div className="text-xs text-text-secondary">Average Rating</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-border">
                <div className="text-2xl font-poppins font-bold text-primary">85%</div>
                <div className="text-xs text-text-secondary">Repeat Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;