import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  activeFilters, 
  onFilterChange, 
  searchQuery, 
  onSearchChange,
  sortBy,
  onSortChange 
}) => {
  const filterCategories = [
    {
      key: 'industry',
      label: 'Industry',
      icon: 'Building2',
      options: [
        { value: 'all', label: 'All Industries' },
        { value: 'ecommerce', label: 'E-commerce' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'fintech', label: 'FinTech' },
        { value: 'education', label: 'Education' },
        { value: 'saas', label: 'SaaS' },
        { value: 'nonprofit', label: 'Non-profit' }
      ]
    },
    {
      key: 'projectType',
      label: 'Project Type',
      icon: 'Layers',
      options: [
        { value: 'all', label: 'All Projects' },
        { value: 'web-development', label: 'Web Development' },
        { value: 'mobile-app', label: 'Mobile App' },
        { value: 'ui-ux-design', label: 'UI/UX Design' },
        { value: 'ai-solutions', label: 'AI Solutions' },
        { value: 'full-stack', label: 'Full Stack' }
      ]
    },
    {
      key: 'companySize',
      label: 'Company Size',
      icon: 'Users',
      options: [
        { value: 'all', label: 'All Sizes' },
        { value: 'startup', label: 'Startup (1-50)' },
        { value: 'growing', label: 'Growing (51-200)' },
        { value: 'enterprise', label: 'Enterprise (200+)' }
      ]
    }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First', icon: 'Calendar' },
    { value: 'impact', label: 'Highest Impact', icon: 'TrendingUp' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'alphabetical', label: 'A-Z', icon: 'ArrowUpDown' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-brand p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
        />
        <input
          type="text"
          placeholder="Search client stories, industries, or technologies..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-brand"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-primary transition-brand"
          >
            <Icon name="X" size={16} />
          </button>
        )}
      </div>
      {/* Filter Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {filterCategories?.map((category) => (
          <div key={category?.key}>
            <label className="flex items-center text-sm font-medium text-primary mb-2">
              <Icon name={category?.icon} size={16} className="mr-2" />
              {category?.label}
            </label>
            <select
              value={activeFilters?.[category?.key] || 'all'}
              onChange={(e) => onFilterChange(category?.key, e?.target?.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-brand"
            >
              {category?.options?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      {/* Sort and View Options */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <label className="flex items-center text-sm font-medium text-primary">
            <Icon name="ArrowUpDown" size={16} className="mr-2" />
            Sort by:
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-brand"
          >
            {sortOptions?.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>

        {/* Active Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {Object.entries(activeFilters)?.map(([key, value]) => {
            if (value === 'all') return null;
            const category = filterCategories?.find(cat => cat?.key === key);
            const option = category?.options?.find(opt => opt?.value === value);
            
            return (
              <span
                key={`${key}-${value}`}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary"
              >
                {option?.label}
                <button
                  onClick={() => onFilterChange(key, 'all')}
                  className="ml-2 hover:text-destructive transition-brand"
                >
                  <Icon name="X" size={12} />
                </button>
              </span>
            );
          })}
          
          {Object.values(activeFilters)?.some(value => value !== 'all') && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                Object.keys(activeFilters)?.forEach(key => {
                  onFilterChange(key, 'all');
                });
              }}
              iconName="RotateCcw"
              iconPosition="left"
              iconSize={14}
            >
              Clear All
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;