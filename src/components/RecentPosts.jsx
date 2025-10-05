import React from 'react';
import { FiArrowRight, FiFileText, FiHome, FiFolder, FiUser } from 'react-icons/fi';
import PostCard from './PostCard';

const RecentPosts = ({ setActiveSection }) => {
  const handleNavigation = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const posts = [
    {
      id: 1,
      title: 'Building Dynamic Food Ordering Platform with React & Vite.js',
      excerpt: 'Learn how to create a modern food ordering website with dynamic menu categories, cart functionality, and responsive design. Explore React components, state management, and performance optimization techniques used in Foodie Express 24x7.',
      date: 'December 15, 2024',
      readTime: '6 minutes',
      tags: ['React', 'Vite.js', 'JavaScript', 'Frontend', 'UI/UX'],
    },
    {
      id: 2,
      title: 'Integrating GraphQL APIs in React Applications',
      excerpt: 'Master the art of fetching and displaying data from GraphQL APIs in React. Learn about API integration, loading states, error handling, and creating smooth user experiences with real-time data from AniList API.',
      date: 'December 10, 2024',
      readTime: '5 minutes',
      tags: ['React', 'GraphQL', 'API Integration', 'JavaScript', 'AniList'],
    },
    {
      id: 3,
      title: 'Modern CSS Techniques for Responsive Web Design',
      excerpt: 'Explore advanced CSS techniques for creating beautiful, responsive layouts. Learn about CSS Grid, Flexbox, animations, and modern design patterns for professional web development and portfolio websites.',
      date: 'December 5, 2024',
      readTime: '4 minutes',
      tags: ['CSS', 'Responsive Design', 'Web Design', 'Frontend', 'Portfolio'],
    },
  ];

  return (
    <div className="posts-section slide-up" style={{ animationDelay: '0.2s' }}>
      <h2 className="section-title">Recent Posts</h2>
      
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="view-all-section">
        <div className="navigation-buttons">
          <button className="view-all-btn" onClick={() => handleNavigation('posts')}>
            <FiFileText size={18} />
            <span>View All Posts</span>
            <FiArrowRight size={16} />
          </button>
          
          <div className="quick-nav">
            <button onClick={() => handleNavigation('home')} className="quick-nav-btn">
              <FiHome size={16} />
              <span>Home</span>
            </button>
            <button onClick={() => handleNavigation('projects')} className="quick-nav-btn">
              <FiFolder size={16} />
              <span>Projects</span>
            </button>
            <button onClick={() => handleNavigation('resume')} className="quick-nav-btn">
              <FiUser size={16} />
              <span>Resume</span>
            </button>
          </div>
        </div>
        
        <div className="section-border"></div>
      </div>
    </div>
  );
};

export default RecentPosts;