import React from 'react';
import { 
  FiHome, 
  FiFileText, 
  FiFolder, 
  FiSun,
  FiMoon
} from 'react-icons/fi';

const Navigation = ({ 
  activeSection, 
  setActiveSection, 
  theme, 
  setTheme
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'projects', label: 'Projects', icon: FiFolder },
    { id: 'resume', label: 'Resume', icon: FiFileText },
  ];

  const handleNavigation = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.className = `${newTheme}`;
  };

  const MSRLogo = () => (
    <div className="msr-logo">
      <span>MSR</span>
    </div>
  );

  return (
    <nav className="glass-card navigation fade-in">
      <div className="nav-content">
        <div className="nav-left">
          <MSRLogo />
          <div className="nav-items">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="nav-controls">
          <button onClick={toggleTheme} className="control-btn">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;