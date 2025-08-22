import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceFilter from './components/ServiceFilter';
import ServiceCard from './components/ServiceCard';
import TechnologyShowcase from './components/TechnologyShowcase';
import ProcessTimeline from './components/ProcessTimeline';
import PricingCalculator from './components/PricingCalculator';
import ClientTestimonials from './components/ClientTestimonials';
import ConsultationCTA from './components/ConsultationCTA';

const ServicesOverview = () => {
  const [activeFilters, setActiveFilters] = useState({});
  const [expandedServices, setExpandedServices] = useState({});

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      subtitle: 'Modern, scalable web applications built with cutting-edge technologies',
      description: 'We create powerful web applications using React, Next.js, and modern JavaScript frameworks. Our solutions are designed for performance, scalability, and exceptional user experience across all devices.',
      icon: 'Code',
      gradient: 'from-blue-600 to-purple-600',
      technologies: ['React 18', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'],
      features: [
        'Responsive design for all devices',
        'Server-side rendering (SSR)',
        'Progressive Web App (PWA) capabilities',
        'Advanced SEO optimization',
        'Real-time data synchronization',
        'Secure authentication systems',
        'API integration and development',
        'Performance optimization',
        'Cross-browser compatibility',
        'Automated testing and deployment'
      ],
      pricing: {
        startingFrom: 'From €15K'
      },
      timeline: '6-12 weeks',
      caseStudies: [
        {
          title: 'TechFlow Financial Dashboard',
          industry: 'FinTech',
          result: '+340% user engagement'
        },
        {
          title: 'EcoMarket E-commerce Platform',
          industry: 'E-commerce',
          result: '€2.3M revenue increase'
        }
      ],
      metrics: [
        { value: '99.9%', label: 'Uptime' },
        { value: '<2s', label: 'Load Time' },
        { value: '95+', label: 'Lighthouse Score' },
        { value: '100%', label: 'Mobile Ready' }
      ],
      process: [
        {
          title: 'Requirements Analysis',
          description: 'Deep dive into your business needs and technical requirements'
        },
        {
          title: 'Architecture Design',
          description: 'Create scalable system architecture and technology stack'
        },
        {
          title: 'Development Sprint',
          description: 'Agile development with regular demos and feedback'
        },
        {
          title: 'Testing & Optimization',
          description: 'Comprehensive testing and performance optimization'
        },
        {
          title: 'Deployment & Launch',
          description: 'Smooth deployment with monitoring and support'
        }
      ]
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      subtitle: 'Cross-platform mobile apps with native performance and user experience',
      description: 'Build stunning mobile applications using React Native and Flutter. Our apps deliver native performance while maintaining code efficiency across iOS and Android platforms.',
      icon: 'Smartphone',
      gradient: 'from-green-600 to-teal-600',
      technologies: ['React Native', 'Flutter', 'Expo', 'Firebase', 'Redux', 'Native APIs', 'Push Notifications', 'App Store Optimization'],
      features: [
        'Cross-platform compatibility',
        'Native device integration',
        'Offline functionality',
        'Push notifications',
        'In-app purchases',
        'Social media integration',
        'Real-time messaging',
        'Biometric authentication',
        'Location-based services',
        'App store optimization'
      ],
      pricing: {
        startingFrom: 'From €25K'
      },
      timeline: '8-16 weeks',
      caseStudies: [
        {
          title: 'EcoMarket Shopping App',
          industry: 'E-commerce',
          result: '4.9/5 app store rating'
        },
        {
          title: 'MedCare Patient Portal',
          industry: 'Healthcare',
          result: '25K+ daily active users'
        }
      ],
      metrics: [
        { value: '4.8/5', label: 'Avg Rating' },
        { value: '95%', label: 'Crash-Free' },
        { value: '60%', label: 'User Retention' },
        { value: '2.1s', label: 'Launch Time' }
      ],
      process: [
        {
          title: 'Platform Strategy',
          description: 'Choose optimal platform approach and technology stack'
        },
        {
          title: 'UI/UX Design',
          description: 'Create intuitive mobile-first user experiences'
        },
        {
          title: 'Development & Testing',
          description: 'Build and test across multiple devices and OS versions'
        },
        {
          title: 'App Store Preparation',
          description: 'Optimize for app store guidelines and approval'
        },
        {
          title: 'Launch & Marketing',
          description: 'Strategic launch with ASO and user acquisition'
        }
      ]
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      subtitle: 'User-centered design that converts visitors into customers',
      description: 'Create exceptional user experiences through research-driven design. Our team combines aesthetic excellence with usability principles to deliver interfaces that users love.',
      icon: 'Palette',
      gradient: 'from-pink-600 to-rose-600',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Miro', 'Hotjar', 'Google Analytics'],
      features: [
        'User research and personas',
        'Information architecture',
        'Wireframing and prototyping',
        'Visual design systems',
        'Usability testing',
        'Accessibility compliance',
        'Design system creation',
        'Brand integration',
        'Responsive design',
        'Conversion optimization'
      ],
      pricing: {
        startingFrom: 'From €8K'
      },
      timeline: '4-8 weeks',
      caseStudies: [
        {
          title: 'MedCare Portal Redesign',
          industry: 'Healthcare',
          result: '+95% patient satisfaction'
        },
        {
          title: 'AutoTech Dashboard',
          industry: 'Automotive',
          result: '-75% support tickets'
        }
      ],
      metrics: [
        { value: '+85%', label: 'Conversion Rate' },
        { value: '4.2s', label: 'Task Completion' },
        { value: '92%', label: 'User Satisfaction' },
        { value: 'AA', label: 'Accessibility' }
      ],
      process: [
        {
          title: 'User Research',
          description: 'Understand your users through interviews and analytics'
        },
        {
          title: 'Design Strategy',
          description: 'Create design principles and user journey maps'
        },
        {
          title: 'Wireframing',
          description: 'Structure content and functionality layouts'
        },
        {
          title: 'Visual Design',
          description: 'Apply brand identity and create stunning interfaces'
        },
        {
          title: 'Testing & Iteration',
          description: 'Validate designs through user testing and feedback'
        }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      subtitle: 'Intelligent automation and machine learning for business transformation',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and create competitive advantages. From chatbots to predictive analytics, we build AI that works.',
      icon: 'Brain',
      gradient: 'from-purple-600 to-indigo-600',
      technologies: ['OpenAI GPT', 'TensorFlow', 'PyTorch', 'Langchain', 'Python', 'Computer Vision', 'NLP', 'Machine Learning'],
      features: [
        'Custom AI model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'Intelligent chatbots',
        'Process automation',
        'Data analysis and insights',
        'AI-powered recommendations',
        'Voice recognition systems',
        'Anomaly detection'
      ],
      pricing: {
        startingFrom: 'From €35K'
      },
      timeline: '12-20 weeks',
      caseStudies: [
        {
          title: 'AutoTech Predictive Maintenance',
          industry: 'Manufacturing',
          result: '€2.3M cost savings'
        },
        {
          title: 'FinTech Fraud Detection',
          industry: 'Financial',
          result: '94% accuracy rate'
        }
      ],
      metrics: [
        { value: '94%', label: 'Accuracy Rate' },
        { value: '85%', label: 'Cost Reduction' },
        { value: '3x', label: 'Efficiency Gain' },
        { value: '24/7', label: 'Availability' }
      ],
      process: [
        {
          title: 'AI Strategy',
          description: 'Identify AI opportunities and define success metrics'
        },
        {
          title: 'Data Preparation',
          description: 'Clean, structure, and prepare data for training'
        },
        {
          title: 'Model Development',
          description: 'Build and train custom AI models for your use case'
        },
        {
          title: 'Integration & Testing',
          description: 'Integrate AI into your systems and validate performance'
        },
        {
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and model improvement'
        }
      ]
    }
  ];

  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);
  };

  const handleToggleExpand = (serviceId) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceId]: !prev?.[serviceId]
    }));
  };

  // Filter services based on active filters
  const filteredServices = services?.filter(service => {
    if (Object.keys(activeFilters)?.length === 0) return true;
    
    // Simple filtering logic - in a real app, this would be more sophisticated
    const hasActiveFilters = Object.values(activeFilters)?.some(filters => filters?.length > 0);
    return hasActiveFilters ? true : true; // For demo, show all services
  });

  return (
    <>
      <Helmet>
        <title>Services Overview - Appistry Digital Agency</title>
        <meta name="description" content="Discover Appistry's comprehensive digital services: Web Development, Mobile Apps, UI/UX Design, and AI Solutions. Transform your business with our expert team." />
        <meta name="keywords" content="web development, mobile apps, UI UX design, AI solutions, digital agency, React development, app development" />
        <meta property="og:title" content="Services Overview - Appistry Digital Agency" />
        <meta property="og:description" content="Comprehensive digital solutions including web development, mobile apps, design, and AI. Get your free consultation today." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://appistry.com/services-overview" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <ServiceHero />

        {/* Services Filter & Grid */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filter Sidebar */}
              <div className="lg:col-span-1">
                <ServiceFilter 
                  onFilterChange={handleFilterChange}
                  activeFilters={activeFilters}
                />
              </div>

              {/* Services Grid */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-poppins font-bold text-primary">
                      Our Services
                    </h3>
                    <p className="text-text-secondary">
                      {filteredServices?.length} service{filteredServices?.length !== 1 ? 's' : ''} available
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {filteredServices?.map((service) => (
                    <ServiceCard
                      key={service?.id}
                      service={service}
                      isExpanded={expandedServices?.[service?.id] || false}
                      onToggleExpand={handleToggleExpand}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Showcase */}
        <TechnologyShowcase />

        {/* Process Timeline */}
        <ProcessTimeline />

        {/* Pricing Calculator */}
        <PricingCalculator />

        {/* Client Testimonials */}
        <ClientTestimonials />

        {/* Consultation CTA */}
        <ConsultationCTA />

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              
              <h3 className="text-2xl font-poppins font-bold mb-2">Appistry</h3>
              <p className="text-white/70 mb-6">Digital Agency</p>
              
              <div className="flex justify-center space-x-6 mb-8">
                <a href="#" className="text-white/70 hover:text-white transition-brand">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-brand">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-brand">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              
              <div className="border-t border-white/20 pt-8">
                <p className="text-white/60 text-sm">
                  © {new Date()?.getFullYear()} Appistry Digital Agency. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServicesOverview;