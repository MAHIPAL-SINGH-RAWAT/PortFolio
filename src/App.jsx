import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ProfileSection from './components/ProfileSection';
import RecentPosts from './components/RecentPosts';
import SkeletonLoader from './components/SkeletonLoader';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Initialize theme
    document.documentElement.className = theme;
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div>
            <ProfileSection />
            <RecentPosts setActiveSection={setActiveSection} />
          </div>
        );
      case 'resume':
        return <Resume setActiveSection={setActiveSection} />;
      case 'projects':
        return <Projects setActiveSection={setActiveSection} />;
      case 'posts':
        return <RecentPosts setActiveSection={setActiveSection} />;
      default:
        return (
          <div>
            <ProfileSection />
            <RecentPosts setActiveSection={setActiveSection} />
          </div>
        );
    }
  };

  return (
    <div className="container">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        setTheme={setTheme}
      />
      
      {renderContent()}
      
      <Footer />
    </div>
  );
}

export default App;