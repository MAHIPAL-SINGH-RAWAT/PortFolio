import React, { useState, useEffect } from 'react';
import {
  FiLinkedin,
  FiGithub,
  FiMail,
  FiPhone,
  FiMapPin,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';

const ProfileSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const titles = [
    'Frontend Developer',
    'MERN Stack Developer',
    'Artist',
    'Photographer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mahipal-rawat-a82496229/',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/MAHIPAL-SINGH-RAWAT',
    },
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:mahipalrwtt269@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      href: 'tel:+919521203215',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      href: '#',
      text: 'Pilani, Rajasthan',
    },
  ];

  return (
    <div className="glass-card profile-section slide-up">
      <div className="profile-content">
        <div className="profile-image">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
            alt="Mahipal Singh Rawat"
          />
          <div className="status-indicator"></div>
        </div>

        <div className="profile-info">
          <h1 className="profile-name">Mahipal Singh Rawat</h1>
          <p className="profile-title animated-title">{titles[currentTitle]}</p>
          <div className="profile-description">
            <p className="description-preview">
              Passionate Frontend Developer specializing in creating modern,
              responsive web applications using React.js, JavaScript, HTML5, and
              CSS3. Currently pursuing B.Tech in Computer Science at B K Birla
              Institute of Engineering & Technology, Pilani, Rajasthan.
              <span className="mobile-only">
                <button onClick={toggleExpanded} className="read-more-btn">
                  {isExpanded ? (
                    <>
                      <span> Read Less</span>
                      <FiChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      <span> Read More</span>
                      <FiChevronDown size={16} />
                    </>
                  )}
                </button>
              </span>
            </p>
            <div
              className={`description-expanded ${isExpanded ? 'expanded' : ''}`}
            >
              <p>
                Experienced in building dynamic user interfaces with smooth
                animations and optimized performance. Skilled in modern
                development tools including Vite.js, Git, and various deployment
                platforms. I’m always exploring new technologies to improve web
                performance and user experience. My goal is to create digital
                experiences that are fast, accessible, and impactful.
              </p>
            </div>
          </div>

          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <link.icon size={18} />
                <span>{link.text || link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
