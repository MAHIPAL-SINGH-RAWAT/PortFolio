import React from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';

const PostCard = ({ post }) => {
  const GeometricIllustration = () => (
    <div className="post-illustration">
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        
        <div className="central-element">
          <div className="inner-element"></div>
          <div className="corner-element"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="glass-card post-card">
      <div className="post-content">
        <div className="post-info">
          <h3 className="post-title">{post.title}</h3>
          
          <p className="post-excerpt">{post.excerpt}</p>
          
          <div className="post-meta">
            <div className="meta-item">
              <FiCalendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="meta-item">
              <FiClock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        
        <GeometricIllustration />
      </div>
    </div>
  );
};

export default PostCard;