import React from 'react';
import {
  FiHome,
  FiFileText,
  FiFolder,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
} from 'react-icons/fi';

const MSRLogo = () => (
  <div className="msr-logo">MSR</div>
);

const Navigation = ({ activeSection, setActiveSection, theme, setTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navRef = React.useRef(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'projects', label: 'Projects', icon: FiFolder },
    { id: 'resume', label: 'Resume', icon: FiFileText },
  ];

  const toggleMobileMenu = (e) => {
    if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  React.useEffect(() => {
    const handleOutside = (e) => {
      if (!isMobileMenuOpen) return;
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav ref={navRef} className="glass-card navigation fade-in">
      <div className="nav-content">
        <div className="nav-logo-container">
          <MSRLogo />
        </div>

        <div className="nav-items desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`nav-item ${
                activeSection === item.id ? 'active' : ''
              }`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="nav-controls">
          <button
            onClick={toggleMobileMenu}
            className={`control-btn mobile-menu-btn ${
              isMobileMenuOpen ? 'menu-open' : ''
            }`}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
            type="button"
          >
            {isMobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>

          <button onClick={toggleTheme} className="control-btn">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-nav-items">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`mobile-nav-item ${
                activeSection === item.id ? 'active' : ''
              }`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;