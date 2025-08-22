import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CultureInsights = () => {
  const [activeTab, setActiveTab] = useState('workspace');

  const cultureHighlights = [
    {
      id: 'workspace',
      title: 'Our Workspace',
      description: 'A collaborative environment designed to inspire creativity and foster innovation.',
      images: [
        {
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          alt: "Modern open office space with collaborative areas"
        },
        {
          src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          alt: "Creative meeting room with whiteboard and modern furniture"
        },
        {
          src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          alt: "Relaxation area with comfortable seating and plants"
        }
      ]
    },
    {
      id: 'collaboration',
      title: 'Team Collaboration',
      description: 'Cross-functional teams working together to deliver exceptional results.',
      images: [
        {
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          alt: "Team brainstorming session around a table"
        },
        {
          src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          alt: "Developers pair programming on laptops"
        },
        {
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          alt: "Design team reviewing mockups and prototypes"
        }
      ]
    },
    {
      id: 'celebrations',
      title: 'Celebrations',
      description: 'We celebrate every milestone, achievement, and moment of success together.',
      images: [
        {
          src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          alt: "Team celebrating project completion with cake"
        },
        {
          src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          alt: "Office party with team members socializing"
        },
        {
          src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          alt: "Award ceremony recognizing team achievements"
        }
      ]
    }
  ];

  const perks = [
    {
      icon: "Coffee",
      title: "Premium Coffee & Snacks",
      description: "Unlimited artisan coffee, healthy snacks, and catered lunches to fuel creativity."
    },
    {
      icon: "Clock",
      title: "Flexible Working Hours",
      description: "Work when you\'re most productive with flexible schedules and remote work options."
    },
    {
      icon: "BookOpen",
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs."
    },
    {
      icon: "Heart",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, gym membership, and mental health support."
    },
    {
      icon: "Plane",
      title: "Vacation & Time Off",
      description: "Generous PTO policy, sabbatical opportunities, and travel allowances."
    },
    {
      icon: "Users",
      title: "Team Building",
      description: "Regular team outings, hackathons, and social events to strengthen bonds."
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Senior Designer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quote: "Appistry isn\'t just a workplace—it\'s a community where creativity thrives and everyone\'s voice matters. The collaborative culture here has helped me grow both professionally and personally."
    },
    {
      name: "Pierre Martin",
      role: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quote: "The learning opportunities here are incredible. From cutting-edge projects to mentorship programs, Appistry invests in our growth and encourages us to push boundaries."
    },
    {
      name: "Sarah Leroy",
      role: "Project Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quote: "What I love most about our culture is the perfect balance of professionalism and fun. We deliver exceptional work while maintaining a supportive, enjoyable environment."
    }
  ];

  const tabs = [
    { id: 'workspace', label: 'Workspace', icon: 'Building' },
    { id: 'collaboration', label: 'Collaboration', icon: 'Users' },
    { id: 'celebrations', label: 'Celebrations', icon: 'PartyPopper' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-6">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Our Culture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
            Life at <span className="gradient-text">Appistry</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our culture is built on collaboration, creativity, and continuous growth. 
            We believe that happy teams create exceptional work, and we've designed 
            every aspect of our workplace to support both professional excellence and personal fulfillment.
          </p>
        </div>

        {/* Culture Gallery */}
        <div className="mb-16">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-2 shadow-brand">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-brand ${
                    activeTab === tab?.id
                      ? 'bg-gradient-brand text-white shadow-brand'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Content */}
          {cultureHighlights?.map((highlight) => (
            <div
              key={highlight?.id}
              className={`${activeTab === highlight?.id ? 'block' : 'hidden'}`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
                  {highlight?.title}
                </h3>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  {highlight?.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {highlight?.images?.map((image, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-xl shadow-brand hover-lift">
                    <Image
                      src={image?.src}
                      alt={image?.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-brand"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-primary mb-4">
              What Our Team Says
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Hear directly from our team members about what makes Appistry a special place to work.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-brand hover-lift">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-poppins font-bold text-primary">{testimonial?.name}</h4>
                    <p className="text-secondary text-sm">{testimonial?.role}</p>
                  </div>
                </div>
                <blockquote className="text-text-secondary leading-relaxed italic">
                  "{testimonial?.quote}"
                </blockquote>
                <div className="flex text-warning mt-4">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perks & Benefits */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-brand">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-primary mb-4">
              Perks & Benefits
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and perks 
              that support both work and life balance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks?.map((perk, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={perk?.icon} size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-poppins font-bold text-primary mb-3">
                  {perk?.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {perk?.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-brand text-white rounded-xl font-medium hover:shadow-brand-lg transition-brand">
              <Icon name="Users" size={16} className="mr-2" />
              Join Our Team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureInsights;