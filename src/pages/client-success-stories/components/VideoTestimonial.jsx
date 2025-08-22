import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VideoTestimonial = ({ testimonial, featured = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`group relative bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-brand overflow-hidden ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      {/* Video Thumbnail */}
      <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-64'}`}>
        <Image
          src={testimonial?.thumbnail}
          alt={`${testimonial?.clientName} video testimonial`}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-brand"></div>
        
        {/* Play Button */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-brand shadow-brand-lg"
          >
            <Icon name="Play" size={32} className="text-secondary ml-1" />
          </button>
        )}

        {/* Duration Badge */}
        <div className="absolute bottom-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
            <Icon name="Clock" size={12} className="mr-1" />
            {testimonial?.duration}
          </span>
        </div>

        {/* Client Info Overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-brand">
              <Image
                src={testimonial?.clientAvatar}
                alt={testimonial?.clientName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white font-medium text-sm">
                {testimonial?.clientName}
              </div>
              <div className="text-white/80 text-xs">
                {testimonial?.clientTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <Image
                src={testimonial?.companyLogo}
                alt={`${testimonial?.companyName} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-medium text-primary text-sm">
                {testimonial?.companyName}
              </div>
              <div className="text-text-secondary text-xs">
                {testimonial?.industry}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-warning">
            {[...Array(5)]?.map((_, i) => (
              <Icon key={i} name="Star" size={14} className="fill-current" />
            ))}
          </div>
        </div>

        <blockquote className="text-text-secondary text-sm mb-4 italic">
          "{testimonial?.quote}"
        </blockquote>

        {/* Project Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-xs text-text-secondary mb-1">Project Type</div>
            <div className="text-sm font-medium text-primary">
              {testimonial?.projectType}
            </div>
          </div>
          <div>
            <div className="text-xs text-text-secondary mb-1">Timeline</div>
            <div className="text-sm font-medium text-primary">
              {testimonial?.timeline}
            </div>
          </div>
        </div>

        {/* Key Results */}
        <div className="flex flex-wrap gap-2">
          {testimonial?.keyResults?.map((result, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-success/10 text-success"
            >
              <Icon name="TrendingUp" size={10} className="mr-1" />
              {result}
            </span>
          ))}
        </div>
      </div>
      {/* Video Modal would be implemented here */}
      {isPlaying && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-white text-center">
            <Icon name="Play" size={48} className="mx-auto mb-4" />
            <p>Video player would be implemented here</p>
            <button
              onClick={() => setIsPlaying(false)}
              className="mt-4 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-brand"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTestimonial;