import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceFilter = ({ onFilterChange, activeFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const filterCategories = [
    {
      id: 'technology',
      name: 'Technology',
      icon: 'Code',
      options: [
        { id: 'react', name: 'React/Next.js', count: 45 },
        { id: 'mobile', name: 'React Native', count: 32 },
        { id: 'ai', name: 'AI/ML', count: 18 },
        { id: 'blockchain', name: 'Blockchain', count: 12 },
        { id: 'cloud', name: 'Cloud Solutions', count: 28 }
      ]
    },
    {
      id: 'industry',
      name: 'Industry',
      icon: 'Building',
      options: [
        { id: 'fintech', name: 'FinTech', count: 25 },
        { id: 'healthcare', name: 'Healthcare', count: 20 },
        { id: 'ecommerce', name: 'E-commerce', count: 35 },
        { id: 'education', name: 'Education', count: 15 },
        { id: 'startup', name: 'Startups', count: 40 }
      ]
    },
    {
      id: 'project-type',
      name: 'Project Type',
      icon: 'Layers',
      options: [
        { id: 'web-app', name: 'Web Applications', count: 50 },
        { id: 'mobile-app', name: 'Mobile Apps', count: 30 },
        { id: 'design', name: 'UI/UX Design', count: 42 },
        { id: 'consulting', name: 'Consulting', count: 22 },
        { id: 'maintenance', name: 'Maintenance', count: 18 }
      ]
    }
  ];

  const handleFilterToggle = (categoryId, optionId) => {
    const newFilters = { ...activeFilters };
    if (!newFilters?.[categoryId]) {
      newFilters[categoryId] = [];
    }
    
    const index = newFilters?.[categoryId]?.indexOf(optionId);
    if (index > -1) {
      newFilters?.[categoryId]?.splice(index, 1);
    } else {
      newFilters?.[categoryId]?.push(optionId);
    }
    
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    onFilterChange({});
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters)?.reduce((total, filters) => total + filters?.length, 0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand border border-border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
            <Icon name="Filter" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-poppins font-semibold text-primary">
              Service Explorer
            </h3>
            <p className="text-sm text-text-secondary">
              Filter by technology, industry, or project type
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {getActiveFilterCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-text-secondary hover:text-destructive"
            >
              Clear All
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
            iconPosition="right"
            className="lg:hidden"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </Button>
        </div>
      </div>
      {/* Active Filters Summary */}
      {getActiveFilterCount() > 0 && (
        <div className="mb-6 p-4 bg-secondary/5 rounded-lg border border-secondary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="CheckCircle" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">
              {getActiveFilterCount()} filter{getActiveFilterCount() !== 1 ? 's' : ''} active
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters)?.map(([categoryId, filters]) =>
              filters?.map(filterId => {
                const category = filterCategories?.find(cat => cat?.id === categoryId);
                const option = category?.options?.find(opt => opt?.id === filterId);
                return option ? (
                  <span
                    key={`${categoryId}-${filterId}`}
                    className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium"
                  >
                    <span>{option?.name}</span>
                    <button
                      onClick={() => handleFilterToggle(categoryId, filterId)}
                      className="hover:bg-secondary/20 rounded-full p-0.5"
                    >
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                ) : null;
              })
            )}
          </div>
        </div>
      )}
      {/* Filter Categories */}
      <div className={`space-y-6 ${!isExpanded && 'hidden lg:block'}`}>
        {filterCategories?.map((category) => (
          <div key={category?.id} className="space-y-3">
            <div className="flex items-center space-x-2">
              <Icon name={category?.icon} size={16} className="text-text-secondary" />
              <h4 className="font-poppins font-medium text-primary">
                {category?.name}
              </h4>
            </div>
            
            <div className="space-y-2">
              {category?.options?.map((option) => {
                const isActive = activeFilters?.[category?.id]?.includes(option?.id) || false;
                
                return (
                  <label
                    key={option?.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-surface cursor-pointer transition-brand group"
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={isActive}
                        onChange={() => handleFilterToggle(category?.id, option?.id)}
                        className="w-4 h-4 text-secondary border-border rounded focus:ring-secondary focus:ring-2"
                      />
                      <span className={`text-sm font-medium transition-brand ${
                        isActive ? 'text-secondary' : 'text-text-primary group-hover:text-secondary'
                      }`}>
                        {option?.name}
                      </span>
                    </div>
                    <span className="text-xs text-text-secondary bg-surface px-2 py-1 rounded-full">
                      {option?.count}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Quick Actions */}
      <div className={`pt-6 border-t border-border mt-6 ${!isExpanded && 'hidden lg:block'}`}>
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="sm"
            iconName="Calculator"
            iconPosition="left"
            fullWidth
          >
            Cost Calculator
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="HelpCircle"
            iconPosition="left"
            fullWidth
          >
            Tech Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceFilter;