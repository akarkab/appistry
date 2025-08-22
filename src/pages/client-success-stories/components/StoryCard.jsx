import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StoryCard = ({ story, featured = false }) => {
  return (
    <div className={`group relative bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-brand overflow-hidden ${
      featured ? 'lg:col-span-2 lg:row-span-2' : ''
    }`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'h-64 lg:h-80' : 'h-48'}`}>
        <Image
          src={story?.image}
          alt={`${story?.clientName} project showcase`}
          className="w-full h-full object-cover group-hover:scale-105 transition-brand"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Industry Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary backdrop-blur-sm">
            <Icon name={story?.industryIcon} size={14} className="mr-1" />
            {story?.industry}
          </span>
        </div>

        {/* Project Type Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/90 text-white backdrop-blur-sm">
            {story?.projectType}
          </span>
        </div>

        {/* Client Logo */}
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 bg-white rounded-lg p-2 shadow-brand">
            <Image
              src={story?.clientLogo}
              alt={`${story?.clientName} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-poppins font-semibold text-primary group-hover:gradient-text transition-brand">
            {story?.clientName}
          </h3>
          <div className="flex items-center space-x-1 text-warning">
            {[...Array(5)]?.map((_, i) => (
              <Icon key={i} name="Star" size={14} className="fill-current" />
            ))}
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {story?.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {story?.metrics?.slice(0, 2)?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-xl font-poppins font-bold text-secondary">
                {metric?.value}
              </div>
              <div className="text-xs text-text-secondary">
                {metric?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {story?.technologies?.slice(0, 3)?.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {story?.technologies?.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-text-secondary">
              +{story?.technologies?.length - 3} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={14}
          className="group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-brand"
        >
          View Full Story
        </Button>
      </div>
      {/* Video Testimonial Indicator */}
      {story?.hasVideo && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-brand">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-brand">
            <Icon name="Play" size={24} className="text-secondary ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryCard;