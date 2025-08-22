import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RelatedPosts = ({ posts, currentPostId }) => {
  const relatedPosts = posts?.filter(post => post?.id !== currentPostId)?.slice(0, 3);

  if (relatedPosts?.length === 0) return null;

  return (
    <div className="bg-surface rounded-2xl p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="BookOpen" size={24} className="text-secondary" />
        <h3 className="text-xl font-poppins font-semibold text-primary">
          Articles connexes
        </h3>
      </div>
      <div className="grid gap-6">
        {relatedPosts?.map((post) => (
          <Link
            key={post?.id}
            to={`/blog-insights/${post?.slug}`}
            className="group flex space-x-4 p-4 bg-white rounded-lg hover:shadow-brand transition-brand"
          >
            <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={post?.image}
                alt={post?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-brand"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                post?.category === 'Technical Deep-Dive' ? 'bg-blue-100 text-blue-800' :
                post?.category === 'Industry Analysis' ? 'bg-green-100 text-green-800' :
                post?.category === 'Case Study'? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'
              }`}>
                {post?.category}
              </span>
              <h4 className="font-medium text-primary group-hover:text-secondary transition-brand line-clamp-2 mb-1">
                {post?.title}
              </h4>
              <p className="text-sm text-text-secondary line-clamp-2">
                {post?.excerpt}
              </p>
            </div>
            <div className="flex-shrink-0 self-center">
              <Icon 
                name="ArrowRight" 
                size={16} 
                className="text-text-secondary group-hover:text-secondary transition-brand" 
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;