import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SearchBar = ({ onSearch, placeholder = "Rechercher des articles..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e?.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" 
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-brand"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-primary transition-brand"
          >
            <Icon name="X" size={18} />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;