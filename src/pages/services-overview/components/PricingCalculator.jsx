import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Link } from 'react-router-dom';

const PricingCalculator = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedComplexity, setSelectedComplexity] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedTimeline, setSelectedTimeline] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const serviceOptions = [
    { value: 'web-app', label: 'Web Application', basePrice: 15000 },
    { value: 'mobile-app', label: 'Mobile Application', basePrice: 25000 },
    { value: 'ui-ux-design', label: 'UI/UX Design', basePrice: 8000 },
    { value: 'ai-solution', label: 'AI Solution', basePrice: 35000 },
    { value: 'full-stack', label: 'Full Stack Solution', basePrice: 45000 }
  ];

  const complexityOptions = [
    { value: 'simple', label: 'Simple', multiplier: 1, description: 'Basic functionality, standard features' },
    { value: 'moderate', label: 'Moderate', multiplier: 1.5, description: 'Custom features, integrations' },
    { value: 'complex', label: 'Complex', multiplier: 2.2, description: 'Advanced features, multiple integrations' },
    { value: 'enterprise', label: 'Enterprise', multiplier: 3, description: 'Highly complex, scalable architecture' }
  ];

  const featureOptions = [
    { id: 'auth', name: 'User Authentication', price: 2000 },
    { id: 'payment', name: 'Payment Integration', price: 3500 },
    { id: 'admin', name: 'Admin Dashboard', price: 4000 },
    { id: 'api', name: 'Custom API Development', price: 5000 },
    { id: 'cms', name: 'Content Management', price: 3000 },
    { id: 'analytics', name: 'Analytics Integration', price: 2500 },
    { id: 'notifications', name: 'Push Notifications', price: 2000 },
    { id: 'chat', name: 'Real-time Chat', price: 4500 },
    { id: 'search', name: 'Advanced Search', price: 3000 },
    { id: 'multi-language', name: 'Multi-language Support', price: 2500 }
  ];

  const timelineOptions = [
    { value: 'rush', label: 'Rush (2-4 weeks)', multiplier: 1.5 },
    { value: 'standard', label: 'Standard (6-8 weeks)', multiplier: 1 },
    { value: 'extended', label: 'Extended (10-12 weeks)', multiplier: 0.9 }
  ];

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures(prev => 
      prev?.includes(featureId)
        ? prev?.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const calculateEstimate = () => {
    if (!selectedService || !selectedComplexity || !selectedTimeline) return;

    setIsCalculating(true);
    
    setTimeout(() => {
      const service = serviceOptions?.find(s => s?.value === selectedService);
      const complexity = complexityOptions?.find(c => c?.value === selectedComplexity);
      const timeline = timelineOptions?.find(t => t?.value === selectedTimeline);
      
      let basePrice = service?.basePrice;
      let complexityPrice = basePrice * complexity?.multiplier;
      
      let featuresPrice = selectedFeatures?.reduce((total, featureId) => {
        const feature = featureOptions?.find(f => f?.id === featureId);
        return total + (feature ? feature?.price : 0);
      }, 0);
      
      let totalPrice = (complexityPrice + featuresPrice) * timeline?.multiplier;
      
      setEstimatedCost({
        basePrice,
        complexityPrice,
        featuresPrice,
        timelineMultiplier: timeline?.multiplier,
        totalPrice: Math.round(totalPrice),
        breakdown: {
          service: service?.label,
          complexity: complexity?.label,
          features: selectedFeatures?.length,
          timeline: timeline?.label
        }
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    if (selectedService && selectedComplexity && selectedTimeline) {
      calculateEstimate();
    }
  }, [selectedService, selectedComplexity, selectedFeatures, selectedTimeline]);

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Calculator" size={16} />
            <span>Project Cost Calculator</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Get an Instant
            <span className="gradient-text"> Price Estimate</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Use our interactive calculator to get a personalized estimate for your project. All estimates include consultation and project planning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-brand border border-border p-8">
            <h3 className="text-xl font-poppins font-bold text-primary mb-6 flex items-center">
              <Icon name="Settings" size={20} className="text-secondary mr-3" />
              Project Configuration
            </h3>

            <div className="space-y-6">
              {/* Service Type */}
              <div>
                <Select
                  label="Service Type"
                  description="Choose the primary service you need"
                  placeholder="Select a service"
                  options={serviceOptions}
                  value={selectedService}
                  onChange={setSelectedService}
                  required
                />
              </div>

              {/* Complexity Level */}
              <div>
                <Select
                  label="Project Complexity"
                  description="Select the complexity level that best matches your needs"
                  placeholder="Choose complexity"
                  options={complexityOptions?.map(option => ({
                    value: option?.value,
                    label: option?.label,
                    description: option?.description
                  }))}
                  value={selectedComplexity}
                  onChange={setSelectedComplexity}
                  required
                />
              </div>

              {/* Timeline */}
              <div>
                <Select
                  label="Project Timeline"
                  description="When do you need the project completed?"
                  placeholder="Select timeline"
                  options={timelineOptions}
                  value={selectedTimeline}
                  onChange={setSelectedTimeline}
                  required
                />
              </div>

              {/* Additional Features */}
              <div>
                <label className="block text-sm font-medium text-primary mb-3">
                  Additional Features
                </label>
                <p className="text-xs text-text-secondary mb-4">
                  Select any additional features you need for your project
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto">
                  {featureOptions?.map((feature) => (
                    <label
                      key={feature?.id}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-surface cursor-pointer transition-brand"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFeatures?.includes(feature?.id)}
                        onChange={() => handleFeatureToggle(feature?.id)}
                        className="w-4 h-4 text-secondary border-border rounded focus:ring-secondary focus:ring-2"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-primary">{feature?.name}</div>
                        <div className="text-xs text-secondary">+€{feature?.price?.toLocaleString()}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Estimate Results */}
          <div className="bg-white rounded-2xl shadow-brand border border-border p-8">
            <h3 className="text-xl font-poppins font-bold text-primary mb-6 flex items-center">
              <Icon name="Euro" size={20} className="text-success mr-3" />
              Price Estimate
            </h3>

            {isCalculating ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Icon name="Calculator" size={32} className="text-white" />
                </div>
                <p className="text-text-secondary">Calculating your estimate...</p>
              </div>
            ) : estimatedCost ? (
              <div className="space-y-6">
                {/* Total Price */}
                <div className="text-center p-6 bg-gradient-to-br from-success/10 to-secondary/10 rounded-xl border border-success/20">
                  <div className="text-3xl font-poppins font-bold text-success mb-2">
                    €{estimatedCost?.totalPrice?.toLocaleString()}
                  </div>
                  <p className="text-sm text-text-secondary">Estimated Project Cost</p>
                </div>

                {/* Breakdown */}
                <div className="space-y-4">
                  <h4 className="font-poppins font-semibold text-primary">Cost Breakdown</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
                      <span className="text-sm text-text-primary">Base Service</span>
                      <span className="font-medium text-primary">€{estimatedCost?.basePrice?.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
                      <span className="text-sm text-text-primary">Complexity Adjustment</span>
                      <span className="font-medium text-primary">€{(estimatedCost?.complexityPrice - estimatedCost?.basePrice)?.toLocaleString()}</span>
                    </div>
                    
                    {estimatedCost?.featuresPrice > 0 && (
                      <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
                        <span className="text-sm text-text-primary">Additional Features</span>
                        <span className="font-medium text-primary">€{estimatedCost?.featuresPrice?.toLocaleString()}</span>
                      </div>
                    )}
                    
                    {estimatedCost?.timelineMultiplier !== 1 && (
                      <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
                        <span className="text-sm text-text-primary">Timeline Adjustment</span>
                        <span className={`font-medium ${estimatedCost?.timelineMultiplier > 1 ? 'text-warning' : 'text-success'}`}>
                          {estimatedCost?.timelineMultiplier > 1 ? '+' : ''}
                          {Math.round((estimatedCost?.timelineMultiplier - 1) * 100)}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Summary */}
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h5 className="font-poppins font-semibold text-primary mb-2">Project Summary</h5>
                  <div className="space-y-1 text-sm text-text-secondary">
                    <div>Service: {estimatedCost?.breakdown?.service}</div>
                    <div>Complexity: {estimatedCost?.breakdown?.complexity}</div>
                    <div>Features: {estimatedCost?.breakdown?.features} additional</div>
                    <div>Timeline: {estimatedCost?.breakdown?.timeline}</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Button
                    variant="default"
                    fullWidth
                    className="bg-gradient-brand hover:shadow-brand-lg font-poppins font-semibold"
                    iconName="MessageCircle"
                    iconPosition="left"
                    asChild
                  >
                    <Link to="/contact-consultation">
                      Discuss This Estimate
                    </Link>
                  </Button>
                  
                  <p className="text-xs text-text-secondary text-center">
                    This is an estimated range. Final pricing will be determined after detailed consultation.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calculator" size={32} className="text-text-secondary" />
                </div>
                <p className="text-text-secondary mb-2">Configure Your Project</p>
                <p className="text-sm text-text-secondary">
                  Select service type, complexity, and timeline to see your estimate
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-border">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-text-secondary">
              <p className="font-medium text-primary mb-1">Important Note</p>
              <p>
                These estimates are based on typical project requirements and serve as a starting point for discussion. 
                Final pricing will be determined after a detailed consultation where we'll understand your specific needs, 
                technical requirements, and business objectives. All projects include consultation, planning, and post-launch support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;