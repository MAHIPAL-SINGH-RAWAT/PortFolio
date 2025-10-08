import React from 'react';
import { FiHome, FiFolder, FiFileText } from 'react-icons/fi';

const Projects = ({ setActiveSection }) => {
  const handleNavigation = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="glass-card" style={{ padding: '32px' }}>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-item">
            <h4>Personal Portfolio Website</h4>
            <p className="resume-meta">React & CSS • <a href="https://mahipalrawat.netlify.app" target="_blank" rel="noopener noreferrer" className="project-link-inline">mahipalrawat.netlify.app</a></p>
            <p className="project-description">
              Developed a responsive personal portfolio using React & CSS, showcasing skills, projects, and contact details. 
              Designed modern UI/UX with smooth navigation and animations for professional presentation.
            </p>
            <div className="project-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>

          <div className="project-item">
            <h4>Online Food Ordering Website (Foodie Express 24x7)</h4>
            <p className="resume-meta">React & Vite.js • <a href="https://foodieexpress24x7.netlify.app" target="_blank" rel="noopener noreferrer" className="project-link-inline">foodieexpress24x7.netlify.app</a></p>
            <p className="project-description">
              Built a food ordering platform frontend using React & Vite.js. Implemented dynamic menu categories, 
              add-to-cart system, and checkout flow. Designed responsive UI for both desktop and mobile users. 
              Optimized site performance for faster load times.
            </p>
            <div className="project-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Vite.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">UI/UX</span>
            </div>
          </div>

          <div className="project-item">
            <h4>Anime Information Website (AniVerseInfo)</h4>
            <p className="resume-meta">React & GraphQL API • <a href="https://aniverseinfo.netlify.app" target="_blank" rel="noopener noreferrer" className="project-link-inline">aniverseinfo.netlify.app</a></p>
            <p className="project-description">
              Created an anime portal using React with data from AniList GraphQL API. Implemented search and filter features 
              for exploring anime titles. Integrated dynamic rendering of anime details (title, description, rating, cover images). 
              Handled API fetches and loading states for smooth user experience.
            </p>
            <div className="project-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">GraphQL</span>
              <span className="skill-tag">API Integration</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
        </div>
      </div>

      <div className="view-all-section">
        <div className="navigation-buttons">
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
              <FiFileText size={16} />
              <span>Resume</span>
            </button>
          </div>
        </div>
        
        <div className="section-border"></div>
      </div>
    </>
  );
};

export default Projects;