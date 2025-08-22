import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProspectMatcher = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [selectedCompanySize, setSelectedCompanySize] = useState('');
  const [matchedStories, setMatchedStories] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const industries = [
    { value: 'ecommerce', label: 'E-commerce & Retail', icon: 'ShoppingCart' },
    { value: 'healthcare', label: 'Healthcare & Medical', icon: 'Heart' },
    { value: 'fintech', label: 'FinTech & Banking', icon: 'CreditCard' },
    { value: 'education', label: 'Education & E-learning', icon: 'GraduationCap' },
    { value: 'saas', label: 'SaaS & Technology', icon: 'Cloud' },
    { value: 'nonprofit', label: 'Non-profit & Social', icon: 'Users' }
  ];

  const projectTypes = [
    { value: 'web-development', label: 'Web Development', icon: 'Globe' },
    { value: 'mobile-app', label: 'Mobile App Development', icon: 'Smartphone' },
    { value: 'ui-ux-design', label: 'UI/UX Design', icon: 'Palette' },
    { value: 'ai-solutions', label: 'AI & Machine Learning', icon: 'Brain' },
    { value: 'full-stack', label: 'Full Stack Solution', icon: 'Layers' }
  ];

  const companySizes = [
    { value: 'startup', label: 'Startup (1-50 employees)', icon: 'Rocket' },
    { value: 'growing', label: 'Growing Business (51-200)', icon: 'TrendingUp' },
    { value: 'enterprise', label: 'Enterprise (200+ employees)', icon: 'Building2' }
  ];

  const sampleMatches = [
    {
      id: 1,
      clientName: 'EcoMart',
      industry: 'E-commerce',
      projectType: 'Full Stack Development',
      companySize: 'Growing Business',
      matchScore: 95,
      keyResults: ['300% increase in conversions', '50% faster load times', '40% mobile engagement boost'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      clientName: 'TechFlow Solutions',
      industry: 'SaaS',
      projectType: 'Web Development',
      companySize: 'Growing Business',
      matchScore: 88,
      keyResults: ['200% user growth', '60% reduction in churn', '45% faster onboarding'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
    }
  ];

  const handleFindMatches = () => {
    if (selectedIndustry && selectedProjectType && selectedCompanySize) {
      setMatchedStories(sampleMatches);
      setShowResults(true);
    }
  };

  const resetMatcher = () => {
    setSelectedIndustry('');
    setSelectedProjectType('');
    setSelectedCompanySize('');
    setMatchedStories([]);
    setShowResults(false);
  };

  return (
    <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-poppins font-bold text-primary mb-4">
          Find Stories Like Yours
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Tell us about your project and we'll show you relevant success stories from similar companies
        </p>
      </div>
      {!showResults ? (
        <div className="max-w-4xl mx-auto">
          {/* Industry Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-poppins font-semibold text-primary mb-4 flex items-center">
              <Icon name="Building2" size={20} className="mr-2" />
              What's your industry?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries?.map((industry) => (
                <button
                  key={industry?.value}
                  onClick={() => setSelectedIndustry(industry?.value)}
                  className={`p-4 rounded-lg border-2 transition-brand text-left ${
                    selectedIndustry === industry?.value
                      ? 'border-secondary bg-secondary/10 text-secondary' :'border-border bg-white hover:border-secondary/50 text-text-primary'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name={industry?.icon} size={20} />
                    <span className="font-medium">{industry?.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Project Type Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-poppins font-semibold text-primary mb-4 flex items-center">
              <Icon name="Layers" size={20} className="mr-2" />
              What type of project do you need?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectTypes?.map((type) => (
                <button
                  key={type?.value}
                  onClick={() => setSelectedProjectType(type?.value)}
                  className={`p-4 rounded-lg border-2 transition-brand text-left ${
                    selectedProjectType === type?.value
                      ? 'border-secondary bg-secondary/10 text-secondary' :'border-border bg-white hover:border-secondary/50 text-text-primary'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name={type?.icon} size={20} />
                    <span className="font-medium">{type?.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Company Size Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-poppins font-semibold text-primary mb-4 flex items-center">
              <Icon name="Users" size={20} className="mr-2" />
              What's your company size?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {companySizes?.map((size) => (
                <button
                  key={size?.value}
                  onClick={() => setSelectedCompanySize(size?.value)}
                  className={`p-4 rounded-lg border-2 transition-brand text-left ${
                    selectedCompanySize === size?.value
                      ? 'border-secondary bg-secondary/10 text-secondary' :'border-border bg-white hover:border-secondary/50 text-text-primary'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name={size?.icon} size={20} />
                    <span className="font-medium">{size?.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Find Matches Button */}
          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              onClick={handleFindMatches}
              disabled={!selectedIndustry || !selectedProjectType || !selectedCompanySize}
              className="bg-gradient-brand hover:shadow-brand-lg transition-brand font-poppins font-semibold px-8"
              iconName="Search"
              iconPosition="left"
              iconSize={20}
            >
              Find Matching Success Stories
            </Button>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-poppins font-semibold text-primary mb-2">
                Perfect Matches Found
              </h3>
              <p className="text-text-secondary">
                Based on your selections: {industries?.find(i => i?.value === selectedIndustry)?.label}, {' '}
                {projectTypes?.find(p => p?.value === selectedProjectType)?.label}, {' '}
                {companySizes?.find(s => s?.value === selectedCompanySize)?.label}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={resetMatcher}
              iconName="RotateCcw"
              iconPosition="left"
              iconSize={16}
            >
              Start Over
            </Button>
          </div>

          {/* Matched Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {matchedStories?.map((story) => (
              <div key={story?.id} className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-brand overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={story?.image}
                    alt={`${story?.clientName} project`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success text-white">
                      <Icon name="Target" size={12} className="mr-1" />
                      {story?.matchScore}% Match
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-poppins font-semibold text-primary mb-2">
                    {story?.clientName}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary/10 text-secondary">
                      {story?.industry}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-accent/10 text-accent">
                      {story?.projectType}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">
                      {story?.companySize}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {story?.keyResults?.map((result, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                        <span className="text-text-secondary">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={14}
                  >
                    View Full Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProspectMatcher;