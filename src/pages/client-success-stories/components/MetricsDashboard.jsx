import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsDashboard = () => {
  const aggregateMetrics = [
    {
      icon: 'TrendingUp',
      label: 'Average Performance Improvement',
      value: '247%',
      description: 'Across all client projects',
      color: 'text-success'
    },
    {
      icon: 'Star',
      label: 'Client Satisfaction Score',
      value: '4.9/5',
      description: 'Based on 150+ reviews',
      color: 'text-warning'
    },
    {
      icon: 'Clock',
      label: 'Average Project Delivery',
      value: '12 weeks',
      description: 'From concept to launch',
      color: 'text-secondary'
    },
    {
      icon: 'Users',
      label: 'Long-term Partnerships',
      value: '89%',
      description: 'Clients with ongoing relationships',
      color: 'text-accent'
    },
    {
      icon: 'Target',
      label: 'Project Success Rate',
      value: '98.5%',
      description: 'On-time and on-budget delivery',
      color: 'text-primary'
    },
    {
      icon: 'Repeat',
      label: 'Repeat Client Rate',
      value: '76%',
      description: 'Clients who return for more projects',
      color: 'text-success'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-poppins font-bold text-white mb-4">
          Our Track Record Speaks for Itself
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Aggregate results from 200+ successful projects across diverse industries and company sizes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aggregateMetrics?.map((metric, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-brand"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name={metric?.icon} size={24} className="text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-2xl font-poppins font-bold text-white mb-1">
                  {metric?.value}
                </div>
                <div className="text-white font-medium mb-1">
                  {metric?.label}
                </div>
                <div className="text-white/70 text-sm">
                  {metric?.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Additional Stats */}
      <div className="mt-8 pt-8 border-t border-white/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-poppins font-bold text-white mb-2">200+</div>
            <div className="text-white/80 text-sm">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-poppins font-bold text-white mb-2">50+</div>
            <div className="text-white/80 text-sm">Industries Served</div>
          </div>
          <div>
            <div className="text-3xl font-poppins font-bold text-white mb-2">15+</div>
            <div className="text-white/80 text-sm">Countries Reached</div>
          </div>
          <div>
            <div className="text-3xl font-poppins font-bold text-white mb-2">5 years</div>
            <div className="text-white/80 text-sm">Average Partnership</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsDashboard;