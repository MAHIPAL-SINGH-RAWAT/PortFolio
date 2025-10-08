import React from 'react';
import {
  FiDownload,
  FiExternalLink,
  FiHome,
  FiFolder,
  FiFileText,
} from 'react-icons/fi';

const Resume = ({ setActiveSection }) => {
  const handleNavigation = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="glass-card" style={{ padding: '32px' }}>
        <div className="resume-header">
          <h2 className="section-title">Resume</h2>
          <div className="resume-buttons">
            <a
              href="/Resume - Mahipal_Singh_Rawat.pdf"
              download="Mahipal_Singh_Rawat_Resume.pdf"
              className="download-resume-btn"
            >
              <FiDownload size={20} />
              <span>Download Resume</span>
            </a>
            <a
              href="/Resume - Mahipal_Singh_Rawat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="view-resume-btn"
            >
              <FiExternalLink size={20} />
              <span>View Resume</span>
            </a>
          </div>
        </div>

        <div className="resume-content">
          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="resume-item">
              <h4>B.Tech in Computer Science</h4>
              <p className="resume-meta">
                B K Birla Institute of Engineering & Technology, Pilani,
                Rajasthan
              </p>
              <p className="resume-description">
                Currently pursuing Bachelor of Technology in Computer Science
                with focus on web development, data structures, algorithms, and
                software engineering principles.
              </p>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skills-list">
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">JavaScript (ES6+)</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Frontend Frameworks/Libraries</h4>
                <div className="skills-list">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TailwindCSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Backend/Database</h4>
                <div className="skills-list">
                  <span className="skill-tag">MongoDB</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Build Tools/Dev Tools</h4>
                <div className="skills-list">
                  <span className="skill-tag">Vite.js</span>
                  <span className="skill-tag">Git & GitHub</span>
                  <span className="skill-tag">VS Code</span>
                  <span className="skill-tag">Netlify</span>
                  <span className="skill-tag">Postman</span>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Projects</h3>

            <div className="resume-item">
              <h4>Personal Portfolio Website</h4>
              <p className="resume-meta">
                React & CSS •{' '}
                <a
                  href="https://mahipalrawat.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-inline"
                >
                  mahipalrawat.netlify.app
                </a>
              </p>
              <p className="resume-description">
                Developed a responsive personal portfolio using React & CSS,
                showcasing skills, projects, and contact details. Designed
                modern UI/UX with smooth navigation and animations for
                professional presentation.
              </p>
            </div>

            <div className="resume-item">
              <h4>Online Food Ordering Website (Foodie Express 24x7)</h4>
              <p className="resume-meta">
                React & Vite.js •{' '}
                <a
                  href="https://foodieexpress24x7.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-inline"
                >
                  foodieexpress24x7.netlify.app
                </a>
              </p>
              <p className="resume-description">
                Built a food ordering platform frontend using React & Vite.js.
                Implemented dynamic menu categories, add-to-cart system, and
                checkout flow. Designed responsive UI for both desktop and
                mobile users. Optimized site performance for faster load times.
              </p>
            </div>

            <div className="resume-item">
              <h4>Anime Information Website (AniVerseInfo)</h4>
              <p className="resume-meta">
                React & GraphQL API •{' '}
                <a
                  href="https://aniverseinfo.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-inline"
                >
                  aniverseinfo.netlify.app
                </a>
              </p>
              <p className="resume-description">
                Created an anime portal using React with data from AniList
                GraphQL API. Implemented search and filter features for
                exploring anime titles. Integrated dynamic rendering of anime
                details (title, description, rating, cover images). Handled API
                fetches and loading states for smooth user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="view-all-section">
        <div className="navigation-buttons">
          <div className="quick-nav">
            <button
              onClick={() => handleNavigation('home')}
              className="quick-nav-btn"
            >
              <FiHome size={16} />
              <span>Home</span>
            </button>
            <button
              onClick={() => handleNavigation('projects')}
              className="quick-nav-btn"
            >
              <FiFolder size={16} />
              <span>Projects</span>
            </button>
            <button
              onClick={() => handleNavigation('resume')}
              className="quick-nav-btn"
            >
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

export default Resume;
