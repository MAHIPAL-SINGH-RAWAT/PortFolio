import React from 'react';

const SkeletonLoader = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      padding: '24px'
    }}>
      <div className="container">
        <div style={{
          height: '80px',
          marginBottom: '32px',
          background: 'var(--bg-secondary)',
          borderRadius: '16px',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
        <div style={{
          height: '240px',
          marginBottom: '32px',
          background: 'var(--bg-secondary)',
          borderRadius: '16px',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
        <div style={{
          height: '36px',
          width: '240px',
          marginBottom: '24px',
          background: 'var(--bg-secondary)',
          borderRadius: '16px',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
        <div style={{
          height: '280px',
          background: 'var(--bg-secondary)',
          borderRadius: '16px',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;