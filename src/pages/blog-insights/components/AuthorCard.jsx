import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AuthorCard = ({ author, compact = false }) => {
  if (compact) {
    return (
      <div className="flex items-center space-x-3">
        <Image
          src={author?.avatar}
          alt={author?.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-medium text-primary">{author?.name}</p>
          <p className="text-sm text-text-secondary">{author?.role}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-brand">
      <div className="flex items-start space-x-4">
        <Image
          src={author?.avatar}
          alt={author?.name}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex-1">
          <h4 className="text-lg font-poppins font-semibold text-primary mb-1">
            {author?.name}
          </h4>
          <p className="text-secondary font-medium mb-2">{author?.role}</p>
          <p className="text-text-secondary text-sm mb-4 line-clamp-3">
            {author?.bio}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {author?.expertise?.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {author?.social?.linkedin && (
              <a
                href={author?.social?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-secondary transition-brand"
              >
                <Icon name="Linkedin" size={18} />
              </a>
            )}
            {author?.social?.twitter && (
              <a
                href={author?.social?.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-secondary transition-brand"
              >
                <Icon name="Twitter" size={18} />
              </a>
            )}
            {author?.social?.github && (
              <a
                href={author?.social?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-secondary transition-brand"
              >
                <Icon name="Github" size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;