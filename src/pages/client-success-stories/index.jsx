import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import StoryCard from './components/StoryCard';
import FilterBar from './components/FilterBar';
import MetricsDashboard from './components/MetricsDashboard';
import VideoTestimonial from './components/VideoTestimonial';
import ClientLogoGallery from './components/ClientLogoGallery';
import ProspectMatcher from './components/ProspectMatcher';

const ClientSuccessStories = () => {
  const [activeFilters, setActiveFilters] = useState({
    industry: 'all',
    projectType: 'all',
    companySize: 'all'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredStories, setFilteredStories] = useState([]);

  // Mock success stories data
  const successStories = [
    {
      id: 1,
      clientName: 'EcoMart',
      clientLogo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      industry: 'E-commerce',
      industryIcon: 'ShoppingCart',
      projectType: 'Full Stack Development',
      companySize: 'growing',
      description: `Transformed EcoMart's online presence with a sustainable shopping platform featuring AI-powered product recommendations and carbon footprint tracking. The new platform increased user engagement by 300% and established EcoMart as a leader in conscious commerce.`,
      technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL', 'AWS', 'Stripe'],
      metrics: [
        { label: 'Conversion Rate', value: '+300%' },
        { label: 'Page Load Speed', value: '2.1s' },
        { label: 'Mobile Traffic', value: '+250%' },
        { label: 'Customer Retention', value: '+180%' }
      ],
      hasVideo: true,
      timeline: '16 weeks',
      year: 2024
    },
    {
      id: 2,
      clientName: 'HealthCare Plus',clientLogo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop',image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',industry: 'Healthcare',industryIcon: 'Heart',projectType: 'UI/UX Design',companySize: 'enterprise',
      description: `Redesigned patient portal and telemedicine platform for HealthCare Plus, focusing on accessibility and user experience. The new design reduced appointment booking time by 70% and improved patient satisfaction scores significantly.`,
      technologies: ['Figma', 'React', 'TypeScript', 'FHIR', 'WebRTC'],
      metrics: [
        { label: 'Booking Time', value: '-70%' },
        { label: 'Patient Satisfaction', value: '4.8/5' },
        { label: 'Accessibility Score', value: '98%' },
        { label: 'Support Tickets', value: '-45%' }
      ],
      hasVideo: false,
      timeline: '12 weeks',
      year: 2023
    },
    {
      id: 3,
      clientName: 'TechFlow Solutions',clientLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',industry: 'SaaS',industryIcon: 'Cloud',projectType: 'Web Development',companySize: 'growing',
      description: `Built a comprehensive project management platform for TechFlow Solutions with real-time collaboration features, advanced analytics, and seamless integrations. The platform now serves over 10,000 active users daily.`,
      technologies: ['Vue.js', 'Python', 'Django', 'Redis', 'Docker', 'Kubernetes'],
      metrics: [
        { label: 'Daily Active Users', value: '10K+' },
        { label: 'System Uptime', value: '99.9%' },
        { label: 'User Productivity', value: '+85%' },
        { label: 'Integration APIs', value: '50+' }
      ],
      hasVideo: true,
      timeline: '20 weeks',
      year: 2024
    },
    {
      id: 4,
      clientName: 'FinanceForward',clientLogo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop',image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',industry: 'FinTech',industryIcon: 'CreditCard',projectType: 'Mobile App',companySize: 'startup',
      description: `Developed a secure personal finance management app with AI-powered insights, investment tracking, and budgeting tools. The app achieved 100K downloads in its first quarter and maintains a 4.9-star rating.`,
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Plaid API', 'Machine Learning'],
      metrics: [
        { label: 'App Downloads', value: '100K+' },
        { label: 'App Store Rating', value: '4.9★' },
        { label: 'User Engagement', value: '92%' },
        { label: 'Transaction Volume', value: '$50M+' }
      ],
      hasVideo: true,
      timeline: '14 weeks',
      year: 2023
    },
    {
      id: 5,
      clientName: 'EduTech Academy',clientLogo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=100&h=100&fit=crop',image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',industry: 'Education',industryIcon: 'GraduationCap',projectType: 'AI Solutions',companySize: 'growing',
      description: `Created an adaptive learning platform with AI tutoring capabilities, personalized learning paths, and comprehensive progress tracking. The platform improved student performance by 60% and reduced dropout rates significantly.`,
      technologies: ['Python', 'TensorFlow', 'React', 'GraphQL', 'PostgreSQL', 'AWS'],
      metrics: [
        { label: 'Student Performance', value: '+60%' },
        { label: 'Dropout Rate', value: '-40%' },
        { label: 'Learning Efficiency', value: '+75%' },
        { label: 'Teacher Satisfaction', value: '4.7/5' }
      ],
      hasVideo: false,
      timeline: '18 weeks',
      year: 2024
    },
    {
      id: 6,
      clientName: 'GreenEnergy Co',clientLogo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=100&h=100&fit=crop',image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',industry: 'Energy',industryIcon: 'Zap',projectType: 'Web Development',companySize: 'enterprise',
      description: `Developed a smart grid monitoring and analytics dashboard for GreenEnergy Co, enabling real-time energy distribution optimization and predictive maintenance. The system now manages over 500MW of renewable energy capacity.`,
      technologies: ['Angular', 'C#', '.NET Core', 'SignalR', 'Azure', 'Power BI'],
      metrics: [
        { label: 'Energy Capacity', value: '500MW+' },
        { label: 'Efficiency Gain', value: '+25%' },
        { label: 'Downtime Reduction', value: '-60%' },
        { label: 'Cost Savings', value: '$2.5M' }
      ],
      hasVideo: true,
      timeline: '22 weeks',
      year: 2023
    }
  ];

  // Mock video testimonials data
  const videoTestimonials = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      clientTitle: 'CEO, EcoMart',
      clientAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
      companyName: 'EcoMart',
      companyLogo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop',
      industry: 'E-commerce',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      duration: '3:45',
      quote: `Appistry transformed our vision into reality. Their technical expertise combined with creative innovation delivered results beyond our expectations. The platform they built has become the foundation of our success.`,
      projectType: 'Full Stack Development',
      timeline: '16 weeks',
      keyResults: ['+300% conversions', '2.1s load time', '+250% mobile traffic']
    },
    {
      id: 2,
      clientName: 'Dr. Michael Chen',
      clientTitle: 'CTO, HealthCare Plus',
      clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      companyName: 'HealthCare Plus',
      companyLogo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop',
      industry: 'Healthcare',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      duration: '4:12',
      quote: `The team at Appistry understood our complex healthcare requirements and delivered a solution that prioritizes both functionality and patient experience. Their attention to accessibility and compliance was exceptional.`,
      projectType: 'UI/UX Design',
      timeline: '12 weeks',
      keyResults: ['-70% booking time', '4.8/5 satisfaction', '98% accessibility']
    }
  ];

  // Filter and sort stories
  useEffect(() => {
    let filtered = successStories?.filter(story => {
      const matchesIndustry = activeFilters?.industry === 'all' || 
        story?.industry?.toLowerCase()?.includes(activeFilters?.industry);
      const matchesProjectType = activeFilters?.projectType === 'all' || story?.projectType?.toLowerCase()?.replace(/\s+/g,'-')?.includes(activeFilters?.projectType);
      const matchesCompanySize = activeFilters?.companySize === 'all' || 
        story?.companySize === activeFilters?.companySize;
      const matchesSearch = searchQuery === '' || 
        story?.clientName?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        story?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        story?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()));

      return matchesIndustry && matchesProjectType && matchesCompanySize && matchesSearch;
    });

    // Sort stories
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b?.year - a?.year;
        case 'impact':
          return b?.metrics?.[0]?.value?.localeCompare(a?.metrics?.[0]?.value);
        case 'rating':
          return 0; // All have 5 stars in mock data
        case 'alphabetical':
          return a?.clientName?.localeCompare(b?.clientName);
        default:
          return 0;
      }
    });

    setFilteredStories(filtered);
  }, [activeFilters, searchQuery, sortBy]);

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <Icon name="Trophy" size={16} className="mr-2" />
              200+ Success Stories
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white mb-6">
              Client Success Stories
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses across industries transform their digital presence, 
              drive growth, and achieve measurable results through innovative solutions and strategic partnerships.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-poppins font-semibold"
                iconName="Play"
                iconPosition="left"
                iconSize={20}
              >
                Watch Video Stories
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-poppins font-semibold"
                iconName="Download"
                iconPosition="left"
                iconSize={20}
              >
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Metrics Dashboard */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MetricsDashboard />
        </div>
      </section>
      {/* Prospect Matcher */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProspectMatcher />
        </div>
      </section>
      {/* Filter Bar */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterBar
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>
      </section>
      {/* Success Stories Grid */}
      <section className="pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStories?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories?.map((story, index) => (
                <StoryCard
                  key={story?.id}
                  story={story}
                  featured={index === 0}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary mb-2">
                No stories found
              </h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your filters or search terms to find relevant success stories.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveFilters({ industry: 'all', projectType: 'all', companySize: 'all' });
                  setSearchQuery('');
                }}
                iconName="RotateCcw"
                iconPosition="left"
                iconSize={16}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      {/* Video Testimonials */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
              Hear From Our Clients
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Real testimonials from real clients sharing their experience working with Appistry
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videoTestimonials?.map((testimonial, index) => (
              <VideoTestimonial
                key={testimonial?.id}
                testimonial={testimonial}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Client Logo Gallery */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientLogoGallery />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join the growing list of successful businesses that have transformed their digital presence with Appistry. 
            Let's discuss how we can help you achieve similar results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 font-poppins font-semibold"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
              asChild
            >
              <Link to="/contact-consultation">
                Schedule Free Consultation
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-secondary font-poppins font-semibold"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={20}
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold">Appistry</h3>
                  <p className="text-white/70 text-sm">Digital Agency</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Transforming businesses through innovative digital solutions. 
                Where artistry meets technology to create exceptional experiences.
              </p>
              <div className="flex space-x-4">
                <Icon name="Twitter" size={20} className="text-white/60 hover:text-white cursor-pointer transition-brand" />
                <Icon name="Linkedin" size={20} className="text-white/60 hover:text-white cursor-pointer transition-brand" />
                <Icon name="Github" size={20} className="text-white/60 hover:text-white cursor-pointer transition-brand" />
                <Icon name="Mail" size={20} className="text-white/60 hover:text-white cursor-pointer transition-brand" />
              </div>
            </div>
            
            <div>
              <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/homepage" className="text-white/70 hover:text-white transition-brand">Home</Link></li>
                <li><Link to="/services-overview" className="text-white/70 hover:text-white transition-brand">Services</Link></li>
                <li><Link to="/about-us" className="text-white/70 hover:text-white transition-brand">About</Link></li>
                <li><Link to="/blog-insights" className="text-white/70 hover:text-white transition-brand">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-poppins font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>hello@appistry.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © {new Date()?.getFullYear()} Appistry. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClientSuccessStories;