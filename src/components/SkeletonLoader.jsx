import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <div className="container">
        <div className="skeleton skeleton-nav"></div>
        <div className="skeleton skeleton-profile"></div>
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-post"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;