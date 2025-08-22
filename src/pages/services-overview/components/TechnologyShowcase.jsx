import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: 'Frontend Excellence',
      icon: 'Monitor',
      description: 'Modern, responsive interfaces built with cutting-edge frameworks',
      technologies: [
        { name: 'React 18', icon: 'Code', proficiency: 95, projects: 120 },
        { name: 'Next.js', icon: 'Zap', proficiency: 92, projects: 85 },
        { name: 'TypeScript', icon: 'FileCode', proficiency: 88, projects: 95 },
        { name: 'Tailwind CSS', icon: 'Palette', proficiency: 96, projects: 110 },
        { name: 'Framer Motion', icon: 'Play', proficiency: 85, projects: 65 }
      ]
    },
    backend: {
      title: 'Backend Power',
      icon: 'Server',
      description: 'Scalable, secure server solutions with modern architectures',
      technologies: [
        { name: 'Node.js', icon: 'Cpu', proficiency: 90, projects: 100 },
        { name: 'Python', icon: 'Code2', proficiency: 85, projects: 75 },
        { name: 'PostgreSQL', icon: 'Database', proficiency: 88, projects: 90 },
        { name: 'MongoDB', icon: 'HardDrive', proficiency: 82, projects: 70 },
        { name: 'Redis', icon: 'Zap', proficiency: 80, projects: 55 }
      ]
    },
    mobile: {
      title: 'Mobile Innovation',
      icon: 'Smartphone',
      description: 'Cross-platform mobile apps with native performance',
      technologies: [
        { name: 'React Native', icon: 'Smartphone', proficiency: 90, projects: 60 },
        { name: 'Expo', icon: 'Rocket', proficiency: 88, projects: 45 },
        { name: 'Flutter', icon: 'Layers', proficiency: 75, projects: 30 },
        { name: 'iOS Native', icon: 'Apple', proficiency: 70, projects: 25 },
        { name: 'Android Native', icon: 'Android', proficiency: 72, projects: 28 }
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: 'Brain',
      description: 'Intelligent solutions powered by cutting-edge AI technologies',
      technologies: [
        { name: 'OpenAI GPT', icon: 'MessageSquare', proficiency: 85, projects: 35 },
        { name: 'TensorFlow', icon: 'Cpu', proficiency: 78, projects: 25 },
        { name: 'PyTorch', icon: 'Zap', proficiency: 75, projects: 20 },
        { name: 'Langchain', icon: 'Link', proficiency: 82, projects: 30 },
        { name: 'Computer Vision', icon: 'Eye', proficiency: 70, projects: 18 }
      ]
    }
  };

  const currentCategory = techCategories?.[activeCategory];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Cpu" size={16} />
            <span>Technology Stack</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4">
            Powered by Modern
            <span className="gradient-text"> Technology</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build scalable, performant, and future-ready digital solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(techCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-brand ${
                activeCategory === key
                  ? 'bg-gradient-brand text-white shadow-brand-lg'
                  : 'bg-white text-text-primary hover:bg-secondary/5 hover:text-secondary border border-border'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.title}</span>
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="bg-white rounded-2xl shadow-brand border border-border p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name={currentCategory?.icon} size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-poppins font-bold text-primary mb-2">
              {currentCategory?.title}
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {currentCategory?.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory?.technologies?.map((tech, index) => (
              <div
                key={index}
                className="group p-6 bg-surface rounded-xl hover:bg-white hover:shadow-brand transition-brand border border-transparent hover:border-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center group-hover:scale-110 transition-brand">
                      <Icon name={tech?.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-primary group-hover:text-secondary transition-brand">
                        {tech?.name}
                      </h4>
                      <p className="text-xs text-text-secondary">
                        {tech?.projects} projects
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-poppins font-bold text-secondary">
                      {tech?.proficiency}%
                    </div>
                    <div className="text-xs text-text-secondary">proficiency</div>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div className="w-full bg-border rounded-full h-2 mb-3">
                  <div
                    className="bg-gradient-brand h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech?.proficiency}%` }}
                  ></div>
                </div>

                {/* Project Count Indicator */}
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>Experience Level</span>
                  <div className="flex space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < Math.floor(tech?.proficiency / 20)
                            ? 'bg-secondary' :'bg-border'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Code Example */}
          <div className="mt-12 p-6 bg-primary rounded-xl text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Icon name="Code" size={20} />
                <h4 className="font-poppins font-semibold">Live Code Example</h4>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="font-mono text-sm text-white/80 space-y-2">
              <div><span className="text-blue-300">import</span> React <span className="text-blue-300">from</span> <span className="text-green-300">'react'</span>;</div>
              <div><span className="text-blue-300">import</span> &#123; motion &#125; <span className="text-blue-300">from</span> <span className="text-green-300">'framer-motion'</span>;</div>
              <div className="mt-4">
                <span className="text-blue-300">const</span> <span className="text-yellow-300">ServiceCard</span> = () => &#123;
              </div>
              <div className="ml-4">
                <span className="text-blue-300">return</span> (
              </div>
              <div className="ml-8">
                &lt;<span className="text-red-300">motion.div</span> <span className="text-green-300">whileHover</span>=&#123;&#123; <span className="text-yellow-300">scale</span>: 1.05 &#125;&#125;&gt;
              </div>
              <div className="ml-12">
                &lt;<span className="text-red-300">h3</span>&gt;{currentCategory?.title}&lt;/<span className="text-red-300">h3</span>&gt;
              </div>
              <div className="ml-8">
                &lt;/<span className="text-red-300">motion.div</span>&gt;
              </div>
              <div className="ml-4">);</div>
              <div>&#125;;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;