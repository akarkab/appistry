import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InnovationCommitment = () => {
  const [activeProject, setActiveProject] = useState(0);

  const experimentalProjects = [
    {
      id: 1,
      title: "AI-Powered Design Assistant",
      description: "Developing an intelligent design tool that uses machine learning to suggest optimal UI/UX patterns based on user behavior data and industry best practices.",
      status: "In Development",
      progress: 75,
      technologies: ["TensorFlow", "React", "Python", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      impact: "Reduce design time by 40% while improving user engagement metrics"
    },
    {
      id: 2,
      title: "Blockchain Identity Verification",
      description: "Creating a decentralized identity verification system that ensures user privacy while providing secure authentication for web applications.",
      status: "Beta Testing",
      progress: 90,
      technologies: ["Ethereum", "Solidity", "Web3.js", "IPFS"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      impact: "Enhanced security and privacy for user authentication processes"
    },
    {
      id: 3,
      title: "Voice-Controlled Development Environment",
      description: "Building a voice-activated coding assistant that allows developers to write and modify code using natural language commands.",
      status: "Research Phase",
      progress: 35,
      technologies: ["Speech Recognition", "NLP", "VS Code API", "OpenAI"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      impact: "Improve developer productivity and accessibility for coding"
    },
    {
      id: 4,
      title: "Sustainable Web Analytics",
      description: "Developing carbon-neutral analytics platform that measures and optimizes website environmental impact while providing comprehensive user insights.",
      status: "Prototype",
      progress: 60,
      technologies: ["Green Computing", "Edge Computing", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      impact: "Reduce digital carbon footprint by 30% for client websites"
    }
  ];

  const emergingTechnologies = [
    {
      name: "Artificial Intelligence",
      adoption: 85,
      description: "Integrating AI/ML capabilities into web and mobile applications",
      icon: "Brain",
      color: "bg-purple-500"
    },
    {
      name: "Web3 & Blockchain",
      adoption: 70,
      description: "Exploring decentralized applications and smart contracts",
      icon: "Link",
      color: "bg-blue-500"
    },
    {
      name: "Edge Computing",
      adoption: 65,
      description: "Optimizing performance with edge-based processing",
      icon: "Zap",
      color: "bg-yellow-500"
    },
    {
      name: "AR/VR Integration",
      adoption: 55,
      description: "Creating immersive digital experiences",
      icon: "Eye",
      color: "bg-green-500"
    },
    {
      name: "Quantum Computing",
      adoption: 25,
      description: "Researching quantum algorithms for complex problems",
      icon: "Atom",
      color: "bg-red-500"
    },
    {
      name: "IoT Integration",
      adoption: 75,
      description: "Connecting devices and creating smart ecosystems",
      icon: "Wifi",
      color: "bg-indigo-500"
    }
  ];

  const thoughtLeadership = [
    {
      title: "The Future of Web Development: AI-First Approach",
      type: "Article",
      date: "2024-01-15",
      readTime: "8 min read",
      views: "2.3K",
      icon: "FileText"
    },
    {
      title: "Building Sustainable Digital Products",
      type: "Webinar",
      date: "2024-01-10",
      readTime: "45 min",
      views: "1.8K",
      icon: "Video"
    },
    {
      title: "Blockchain in Enterprise Applications",
      type: "Podcast",
      date: "2024-01-05",
      readTime: "32 min",
      views: "1.2K",
      icon: "Mic"
    },
    {
      title: "UX Design in the Age of AI",
      type: "Conference Talk",
      date: "2023-12-20",
      readTime: "25 min",
      views: "3.1K",
      icon: "Presentation"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development': return 'bg-blue-500';
      case 'Beta Testing': return 'bg-green-500';
      case 'Research Phase': return 'bg-orange-500';
      case 'Prototype': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-6">
            <Icon name="Rocket" size={16} className="mr-2" />
            Innovation Lab
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
            Pioneering <span className="gradient-text">Tomorrow's</span> Technology
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our commitment to innovation drives us to explore emerging technologies, 
            conduct experimental projects, and share our insights with the global tech community. 
            We don't just follow trends—we help create them.
          </p>
        </div>

        {/* Experimental Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-primary mb-4">
              Experimental Projects
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Cutting-edge research and development projects that push the boundaries of what's possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project List */}
            <div className="space-y-4">
              {experimentalProjects?.map((project, index) => (
                <div
                  key={project?.id}
                  onClick={() => setActiveProject(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-brand ${
                    activeProject === index
                      ? 'bg-white shadow-brand-lg border-2 border-secondary'
                      : 'bg-white/70 shadow-brand hover:shadow-brand-lg border border-border'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-poppins font-bold text-primary mb-2">
                        {project?.title}
                      </h4>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 ${getStatusColor(project?.status)} text-white text-xs rounded-full`}>
                          {project?.status}
                        </span>
                        <span className="text-sm text-text-secondary">
                          {project?.progress}% Complete
                        </span>
                      </div>
                    </div>
                    <Icon 
                      name={activeProject === index ? "ChevronDown" : "ChevronRight"} 
                      size={20} 
                      className="text-text-secondary" 
                    />
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-brand h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project?.progress}%` }}
                    ></div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project?.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Project Details */}
            <div className="bg-white rounded-2xl p-8 shadow-brand-lg">
              <div className="mb-6">
                <Image
                  src={experimentalProjects?.[activeProject]?.image}
                  alt={experimentalProjects?.[activeProject]?.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              <h4 className="text-xl font-poppins font-bold text-primary mb-4">
                {experimentalProjects?.[activeProject]?.title}
              </h4>

              <p className="text-text-secondary leading-relaxed mb-6">
                {experimentalProjects?.[activeProject]?.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-primary mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {experimentalProjects?.[activeProject]?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-primary mb-2">Expected Impact</h5>
                  <p className="text-text-secondary text-sm">
                    {experimentalProjects?.[activeProject]?.impact}
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Progress</span>
                    <span className="text-lg font-bold text-primary">
                      {experimentalProjects?.[activeProject]?.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emerging Technologies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-primary mb-4">
              Emerging Technology Adoption
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our investment in cutting-edge technologies ensures we stay ahead of the curve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergingTechnologies?.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-brand hover-lift">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${tech?.color} rounded-lg flex items-center justify-center mr-4`}>
                    <Icon name={tech?.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-primary">{tech?.name}</h4>
                    <p className="text-sm text-text-secondary">{tech?.adoption}% Adoption</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${tech?.color?.replace('bg-', 'from-')} to-opacity-80 h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${tech?.adoption}%` }}
                    ></div>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {tech?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Thought Leadership */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-brand">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-primary mb-4">
              Thought Leadership
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Sharing our insights and expertise with the global tech community through various channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {thoughtLeadership?.map((content, index) => (
              <div key={index} className="flex items-center p-6 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl hover-lift">
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name={content?.icon} size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                      {content?.type}
                    </span>
                    <span className="text-xs text-text-secondary">{content?.date}</span>
                  </div>
                  <h4 className="font-poppins font-bold text-primary mb-1">
                    {content?.title}
                  </h4>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <span>{content?.readTime}</span>
                    <span>{content?.views} views</span>
                  </div>
                </div>
                <Icon name="ExternalLink" size={16} className="text-text-secondary" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-brand text-white rounded-xl font-medium hover:shadow-brand-lg transition-brand">
              <Icon name="BookOpen" size={16} className="mr-2" />
              View All Publications
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationCommitment;