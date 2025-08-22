import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const categoryIcons = {
    'Tous': 'Grid3X3',
    'Technical Deep-Dive': 'Code',
    'Industry Analysis': 'TrendingUp',
    'Case Study': 'FileText',
    'Emerging Technologies': 'Zap'
  };

  return (
    <div className="flex flex-wrap gap-3">
      {categories?.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-brand ${
            activeCategory === category
              ? 'bg-gradient-brand text-white shadow-brand'
              : 'bg-white text-text-primary hover:bg-secondary/10 hover:text-secondary border border-border'
          }`}
        >
          <Icon 
            name={categoryIcons?.[category] || 'Tag'} 
            size={16} 
            className="mr-2" 
          />
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;