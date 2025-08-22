import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamProfiles = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sophie Dubois",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Visionary leader with 10+ years in digital transformation. Sophie founded Appistry with the mission to bridge creativity and technology.",
      specializations: ["Strategic Planning", "Digital Transformation", "Team Leadership"],
      certifications: ["PMP", "Agile Certified", "Digital Marketing"],
      interests: ["Photography", "Sustainable Tech", "Mentoring"],
      linkedin: "#",
      email: "sophie@appistry.fr"
    },
    {
      id: 2,
      name: "Marc Lefevre",
      role: "CTO & Lead Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Full-stack architect passionate about scalable solutions and emerging technologies. Leads our technical innovation initiatives.",
      specializations: ["React/Node.js", "Cloud Architecture", "AI Integration"],
      certifications: ["AWS Solutions Architect", "Google Cloud Professional", "React Expert"],
      interests: ["Open Source", "Machine Learning", "Rock Climbing"],
      linkedin: "#",
      email: "marc@appistry.fr"
    },
    {
      id: 3,
      name: "Camille Martin",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Award-winning designer with expertise in user experience and brand identity. Creates digital experiences that captivate and convert.",
      specializations: ["UI/UX Design", "Brand Identity", "Design Systems"],
      certifications: ["Adobe Certified Expert", "UX Design Institute", "Design Thinking"],
      interests: ["Art Galleries", "Typography", "Sustainable Design"],
      linkedin: "#",
      email: "camille@appistry.fr"
    },
    {
      id: 4,
      name: "Thomas Rousseau",
      role: "Senior Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Mobile development specialist with a passion for creating seamless cross-platform experiences and performance optimization.",
      specializations: ["React Native", "iOS/Android", "Performance Optimization"],
      certifications: ["React Native Certified", "iOS Developer", "Android Developer"],
      interests: ["Mobile Gaming", "Cycling", "Tech Podcasts"],
      linkedin: "#",
      email: "thomas@appistry.fr"
    },
    {
      id: 5,
      name: "Élise Moreau",
      role: "Project Manager",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Agile methodology expert ensuring smooth project delivery and exceptional client communication throughout the development process.",
      specializations: ["Agile/Scrum", "Client Relations", "Quality Assurance"],
      certifications: ["Scrum Master", "PMP", "Agile Coach"],
      interests: ["Team Building", "Travel", "Cooking"],
      linkedin: "#",
      email: "elise@appistry.fr"
    },
    {
      id: 6,
      name: "Antoine Durand",
      role: "DevOps Engineer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Infrastructure and deployment specialist focused on scalable, secure, and efficient cloud solutions for modern applications.",
      specializations: ["AWS/Azure", "Docker/Kubernetes", "CI/CD Pipelines"],
      certifications: ["AWS DevOps Professional", "Kubernetes Administrator", "Docker Certified"],
      interests: ["Automation", "Security", "Hiking"],
      linkedin: "#",
      email: "antoine@appistry.fr"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-6">
            <Icon name="Users" size={16} className="mr-2" />
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our diverse team of passionate professionals brings together years of experience, 
            creative vision, and technical expertise to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers?.map((member) => (
            <div
              key={member?.id}
              className="bg-white rounded-2xl p-6 shadow-brand hover-lift cursor-pointer border border-border transition-brand"
              onClick={() => setSelectedMember(member)}
            >
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <Image
                    src={member?.avatar}
                    alt={member?.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-poppins font-bold text-primary mb-2">{member?.name}</h3>
                <p className="text-secondary font-medium mb-4">{member?.role}</p>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                {member?.bio}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">Specializations</p>
                  <div className="flex flex-wrap gap-2">
                    {member?.specializations?.slice(0, 2)?.map((spec, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                    {member?.specializations?.length > 2 && (
                      <span className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full">
                        +{member?.specializations?.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex space-x-3">
                    <a
                      href={member?.linkedin}
                      className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-brand"
                      onClick={(e) => e?.stopPropagation()}
                    >
                      <Icon name="Linkedin" size={14} />
                    </a>
                    <a
                      href={`mailto:${member?.email}`}
                      className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-brand"
                      onClick={(e) => e?.stopPropagation()}
                    >
                      <Icon name="Mail" size={14} />
                    </a>
                  </div>
                  <button className="text-secondary text-sm font-medium hover:text-primary transition-brand">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={20} className="text-white" />
            </div>
            <p className="text-2xl font-bold text-primary mb-2">25+</p>
            <p className="text-sm text-text-secondary">Team Members</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={20} className="text-white" />
            </div>
            <p className="text-2xl font-bold text-primary mb-2">50+</p>
            <p className="text-sm text-text-secondary">Certifications</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Globe" size={20} className="text-white" />
            </div>
            <p className="text-2xl font-bold text-primary mb-2">15+</p>
            <p className="text-sm text-text-secondary">Countries Served</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={20} className="text-white" />
            </div>
            <p className="text-2xl font-bold text-primary mb-2">24/7</p>
            <p className="text-sm text-text-secondary">Support Available</p>
          </div>
        </div>
      </div>
      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-poppins font-bold text-primary">Team Member Details</h3>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-text-secondary hover:bg-destructive hover:text-white transition-brand"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>

              <div className="text-center mb-8">
                <Image
                  src={selectedMember?.avatar}
                  alt={selectedMember?.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="text-2xl font-poppins font-bold text-primary mb-2">{selectedMember?.name}</h4>
                <p className="text-secondary font-medium text-lg mb-4">{selectedMember?.role}</p>
                <p className="text-text-secondary leading-relaxed">{selectedMember?.bio}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-primary mb-3">Specializations</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.specializations?.map((spec, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-secondary/10 text-secondary rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-primary mb-3">Certifications</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.certifications?.map((cert, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-success/10 text-success rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-primary mb-3">Interests</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.interests?.map((interest, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-accent/10 text-accent rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4 border-t border-border">
                  <a
                    href={selectedMember?.linkedin}
                    className="flex-1 bg-secondary text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-secondary/90 transition-brand"
                  >
                    <Icon name="Linkedin" size={16} className="inline mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${selectedMember?.email}`}
                    className="flex-1 bg-primary text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-primary/90 transition-brand"
                  >
                    <Icon name="Mail" size={16} className="inline mr-2" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamProfiles;