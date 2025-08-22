import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services-overview', icon: 'Briefcase' },
    { name: 'About', path: '/about-us', icon: 'Users' },
    { name: 'Case Studies', path: '/client-success-stories', icon: 'Trophy' },
    { name: 'Blog', path: '/blog-insights', icon: 'BookOpen' },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-brand border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group transition-brand"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand group-hover:shadow-brand-lg transition-brand">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-brand rounded-lg opacity-0 group-hover:opacity-20 transition-brand blur"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-poppins font-bold text-primary group-hover:gradient-text transition-brand">
                Appistry
              </h1>
              <p className="text-xs text-text-secondary font-inter -mt-1">
                Digital Agency
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`relative px-4 py-2 rounded-lg font-inter font-medium transition-brand group ${
                  isActivePath(item?.path)
                    ? 'text-secondary bg-secondary/10' :'text-text-primary hover:text-secondary hover:bg-secondary/5'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.name}</span>
                </span>
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-brand rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block">
              <Button
                variant="default"
                className="bg-gradient-brand hover:shadow-brand-lg transition-brand font-poppins font-semibold"
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
                asChild
              >
                <Link to="/contact-consultation">
                  Start Your Project
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-text-primary hover:text-secondary hover:bg-secondary/5 transition-brand"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? 'X' : 'Menu'} 
                size={24} 
                className="transition-brand"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-4 bg-white/95 backdrop-blur-md border-t border-border">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-inter font-medium transition-brand ${
                    isActivePath(item?.path)
                      ? 'text-secondary bg-secondary/10 border-l-4 border-secondary' :'text-text-primary hover:text-secondary hover:bg-secondary/5'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                  {isActivePath(item?.path) && (
                    <div className="ml-auto w-2 h-2 bg-gradient-brand rounded-full"></div>
                  )}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-gradient-brand hover:shadow-brand-lg transition-brand font-poppins font-semibold"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={16}
                  asChild
                >
                  <Link to="/contact-consultation" onClick={closeMenu}>
                    Start Your Project
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;