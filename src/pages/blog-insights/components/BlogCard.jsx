import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BlogCard = ({ post, featured = false }) => {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })?.format(new Date(date));
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content?.split(' ')?.length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (featured) {
    return (
      <article className="group relative bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-brand overflow-hidden">
        <div className="aspect-[16/9] overflow-hidden">
          <Image
            src={post?.image}
            alt={post?.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-brand"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-white border border-white/20">
              <Icon name="Star" size={12} className="mr-1" />
              Article vedette
            </span>
            <span className="text-white/80 text-sm">
              {getReadingTime(post?.content)} min de lecture
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-poppins font-bold text-white mb-3 group-hover:gradient-text transition-brand">
            {post?.title}
          </h2>
          <p className="text-white/90 text-lg mb-4 line-clamp-2">
            {post?.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src={post?.author?.avatar}
                alt={post?.author?.name}
                className="w-10 h-10 rounded-full border-2 border-white/20"
              />
              <div>
                <p className="text-white font-medium">{post?.author?.name}</p>
                <p className="text-white/70 text-sm">{post?.author?.role}</p>
              </div>
            </div>
            <Link
              to={`/blog-insights/${post?.slug}`}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-brand"
            >
              Lire l'article
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-brand overflow-hidden hover-lift">
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={post?.image}
          alt={post?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-brand"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            post?.category === 'Technical Deep-Dive' ? 'bg-blue-100 text-blue-800' :
            post?.category === 'Industry Analysis' ? 'bg-green-100 text-green-800' :
            post?.category === 'Case Study'? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'
          }`}>
            {post?.category}
          </span>
          <span className="text-text-secondary text-sm">
            {getReadingTime(post?.content)} min
          </span>
        </div>
        <h3 className="text-xl font-poppins font-semibold text-primary mb-3 group-hover:text-secondary transition-brand line-clamp-2">
          {post?.title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-3">
          {post?.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src={post?.author?.avatar}
              alt={post?.author?.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-primary">{post?.author?.name}</p>
              <p className="text-xs text-text-secondary">{formatDate(post?.publishedAt)}</p>
            </div>
          </div>
          <Link
            to={`/blog-insights/${post?.slug}`}
            className="inline-flex items-center text-secondary hover:text-primary transition-brand"
          >
            <span className="text-sm font-medium">Lire plus</span>
            <Icon name="ArrowRight" size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;