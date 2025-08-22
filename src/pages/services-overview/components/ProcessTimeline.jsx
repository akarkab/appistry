import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 'discovery',
      title: 'Discovery & Strategy',
      duration: '1-2 weeks',
      icon: 'Search',
      description: 'We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.',
      activities: [
        'Stakeholder interviews and requirements gathering',
        'Market research and competitive analysis',
        'Technical architecture planning',
        'Project timeline and milestone definition'
      ],
      deliverables: [
        'Project Requirements Document',
        'Technical Specification',
        'Project Timeline & Milestones',
        'Risk Assessment Report'
      ]
    },
    {
      id: 'design',
      title: 'Design & Prototyping',
      duration: '2-3 weeks',
      icon: 'Palette',
      description: 'Our design team creates intuitive user experiences and stunning visual interfaces that align with your brand and user needs.',
      activities: [
        'User journey mapping and wireframing',
        'Visual design and brand integration',
        'Interactive prototype development',
        'Usability testing and iteration'
      ],
      deliverables: [
        'User Experience Wireframes',
        'Visual Design System',
        'Interactive Prototypes',
        'Design Guidelines Document'
      ]
    },
    {
      id: 'development',
      title: 'Development & Integration',
      duration: '4-8 weeks',
      icon: 'Code',
      description: 'Our expert developers bring designs to life using modern technologies, ensuring scalability, security, and performance.',
      activities: [
        'Frontend and backend development',
        'API integration and database setup',
        'Third-party service integration',
        'Code review and quality assurance'
      ],
      deliverables: [
        'Fully Functional Application',
        'API Documentation',
        'Database Schema',
        'Code Repository Access'
      ]
    },
    {
      id: 'testing',
      title: 'Testing & Quality Assurance',
      duration: '1-2 weeks',
      icon: 'CheckCircle',
      description: 'Comprehensive testing ensures your application works flawlessly across all devices, browsers, and user scenarios.',
      activities: [
        'Automated and manual testing',
        'Cross-browser and device testing',
        'Performance and security testing',
        'User acceptance testing'
      ],
      deliverables: [
        'Test Results Report',
        'Performance Metrics',
        'Security Audit Report',
        'Bug Fix Documentation'
      ]
    },
    {
      id: 'launch',
      title: 'Launch & Deployment',
      duration: '1 week',
      icon: 'Rocket',
      description: 'We handle the complete deployment process, ensuring a smooth launch with monitoring and immediate support.',
      activities: [
        'Production environment setup',
        'Domain and SSL configuration',
        'Performance monitoring setup',
        'Launch day support and monitoring'
      ],
      deliverables: [
        'Live Application',
        'Deployment Documentation',
        'Monitoring Dashboard',
        'Launch Support Package'
      ]
    },
    {
      id: 'support',
      title: 'Support & Maintenance',
      duration: 'Ongoing',
      icon: 'Shield',
      description: 'Continuous support and maintenance ensure your application stays secure, updated, and performing optimally.',
      activities: [
        'Regular security updates and patches',
        'Performance monitoring and optimization',
        'Feature enhancements and improvements',
        '24/7 technical support availability'
      ],
      deliverables: [
        'Monthly Performance Reports',
        'Security Update Logs',
        'Feature Enhancement Roadmap',
        'Support Ticket System Access'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="GitBranch" size={16} />
            <span>Our Process</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            From Concept to
            <span className="gradient-text"> Launch</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our proven 6-step process ensures successful project delivery, from initial discovery to ongoing support and maintenance.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {processSteps?.map((step, index) => (
            <button
              key={step?.id}
              onClick={() => setActiveStep(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-brand text-sm ${
                activeStep === index
                  ? 'bg-gradient-brand text-white shadow-brand'
                  : 'bg-surface text-text-primary hover:bg-secondary/5 hover:text-secondary'
              }`}
            >
              <Icon name={step?.icon} size={16} />
              <span className="hidden sm:inline">{step?.title}</span>
              <span className="sm:hidden">{index + 1}</span>
            </button>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="bg-surface rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Step Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center">
                  <Icon name={processSteps?.[activeStep]?.icon} size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-primary">
                    {processSteps?.[activeStep]?.title}
                  </h3>
                  <p className="text-secondary font-medium">
                    Duration: {processSteps?.[activeStep]?.duration}
                  </p>
                </div>
              </div>
              
              <p className="text-text-primary leading-relaxed mb-6">
                {processSteps?.[activeStep]?.description}
              </p>

              {/* Key Activities */}
              <div className="mb-6">
                <h4 className="font-poppins font-semibold text-primary mb-3 flex items-center">
                  <Icon name="Activity" size={16} className="text-secondary mr-2" />
                  Key Activities
                </h4>
                <div className="space-y-2">
                  {processSteps?.[activeStep]?.activities?.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="ArrowRight" size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="font-poppins font-semibold text-primary mb-4 flex items-center">
                <Icon name="Package" size={16} className="text-accent mr-2" />
                Deliverables
              </h4>
              
              <div className="space-y-3">
                {processSteps?.[activeStep]?.deliverables?.map((deliverable, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-border hover:shadow-brand transition-brand"
                  >
                    <div className="w-8 h-8 bg-success/10 text-success rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="FileText" size={16} />
                    </div>
                    <span className="text-sm font-medium text-primary">{deliverable}</span>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 p-4 bg-white rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">Project Progress</span>
                  <span className="text-sm text-secondary font-semibold">
                    {Math.round(((activeStep + 1) / processSteps?.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-gradient-brand h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / processSteps?.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-text-secondary mt-2">
                  <span>Start</span>
                  <span>Step {activeStep + 1} of {processSteps?.length}</span>
                  <span>Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
          
          <div className="space-y-8">
            {processSteps?.map((step, index) => (
              <div
                key={step?.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white transition-brand ${
                      index <= activeStep
                        ? 'bg-gradient-brand text-white shadow-brand-lg'
                        : 'bg-surface text-text-secondary'
                    }`}
                  >
                    <Icon name={step?.icon} size={20} />
                  </div>
                </div>

                {/* Step Card */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                  }`}
                >
                  <div
                    className={`p-4 rounded-lg border transition-brand cursor-pointer ${
                      index === activeStep
                        ? 'bg-white border-secondary shadow-brand'
                        : index < activeStep
                        ? 'bg-success/5 border-success/20' :'bg-surface border-border hover:border-secondary/30'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <h4 className="font-poppins font-semibold text-primary mb-1">
                      {step?.title}
                    </h4>
                    <p className="text-sm text-secondary font-medium mb-2">
                      {step?.duration}
                    </p>
                    <p className="text-xs text-text-secondary line-clamp-2">
                      {step?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;