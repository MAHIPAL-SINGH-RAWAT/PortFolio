import React, { useState, useEffect } from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ['Frontend Developer', 'MERN Stack Developer', 'Artist', 'Photographer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { 
      icon: FiLinkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/mahipal-rawat-a82496229/' 
    },
    { 
      icon: FiGithub, 
      label: 'GitHub', 
      href: 'https://github.com/MAHIPAL-SINGH-RAWAT' 
    },
    { 
      icon: FiMail, 
      label: 'Email', 
      href: 'mailto:mahipalrwtt269@gmail.com' 
    }
  ];

  return (
    <footer className="glass-card footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="copyright">
            © 2025 Mahipal Singh Rawat | <span className="animated-title-footer">{titles[currentTitle]}</span>. All rights reserved.
          </p>
        </div>
        
        <div className="footer-right">
          <div className="footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;