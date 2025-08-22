import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, isExpanded, onToggleExpand }) => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const {
    id,
    title,
    subtitle,
    description,
    icon,
    gradient,
    technologies,
    features,
    pricing,
    timeline,
    caseStudies,
    metrics,
    process
  } = service;

  return (
    <div className="bg-white rounded-2xl shadow-brand border border-border overflow-hidden hover-lift transition-brand">
      {/* Header */}
      <div className={`p-6 bg-gradient-to-br ${gradient} text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <Icon name={icon} size={128} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Icon name={icon} size={24} className="text-white" />
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {pricing?.startingFrom}
              </span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {timeline}
              </span>
            </div>
          </div>
          
          <h3 className="text-2xl font-poppins font-bold mb-2">{title}</h3>
          <p className="text-white/80 text-sm mb-4">{subtitle}</p>
          
          <div className="flex flex-wrap gap-2">
            {technologies?.slice(0, 4)?.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {tech}
              </span>
            ))}
            {technologies?.length > 4 && (
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                +{technologies?.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <p className="text-text-primary mb-6 leading-relaxed">{description}</p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="font-poppins font-semibold text-primary mb-3 flex items-center">
            <Icon name="CheckCircle" size={16} className="text-success mr-2" />
            Key Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features?.slice(0, isExpanded ? features?.length : 4)?.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          {features?.length > 4 && !isExpanded && (
            <button
              onClick={() => onToggleExpand(id)}
              className="text-secondary text-sm font-medium mt-2 hover:underline"
            >
              +{features?.length - 4} more features
            </button>
          )}
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-6 border-t border-border pt-6">
            {/* Process Timeline */}
            <div>
              <h4 className="font-poppins font-semibold text-primary mb-3 flex items-center">
                <Icon name="GitBranch" size={16} className="text-secondary mr-2" />
                Our Process
              </h4>
              <div className="space-y-3">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary/10 text-secondary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-primary text-sm">{step?.title}</div>
                      <div className="text-text-secondary text-xs">{step?.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div>
              <h4 className="font-poppins font-semibold text-primary mb-3 flex items-center">
                <Icon name="TrendingUp" size={16} className="text-success mr-2" />
                Success Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {metrics?.map((metric, index) => (
                  <div key={index} className="text-center p-3 bg-surface rounded-lg">
                    <div className="text-lg font-poppins font-bold text-secondary">{metric?.value}</div>
                    <div className="text-xs text-text-secondary">{metric?.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies Preview */}
            <div>
              <h4 className="font-poppins font-semibold text-primary mb-3 flex items-center">
                <Icon name="BookOpen" size={16} className="text-accent mr-2" />
                Related Case Studies
              </h4>
              <div className="space-y-2">
                {caseStudies?.map((study, index) => (
                  <Link
                    key={index}
                    to="/client-success-stories"
                    className="block p-3 bg-surface rounded-lg hover:bg-secondary/5 transition-brand group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-primary text-sm group-hover:text-secondary transition-brand">
                          {study?.title}
                        </div>
                        <div className="text-text-secondary text-xs">{study?.industry} • {study?.result}</div>
                      </div>
                      <Icon name="ArrowRight" size={14} className="text-text-secondary group-hover:text-secondary transition-brand" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-border">
          <Button
            variant="default"
            className="bg-gradient-brand hover:shadow-brand-lg font-poppins font-semibold flex-1"
            iconName="MessageCircle"
            iconPosition="left"
            asChild
          >
            <Link to="/contact-consultation">
              Discuss Project
            </Link>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => onToggleExpand(id)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            className="sm:w-auto"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;