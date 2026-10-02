import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('menu-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal active"
      id="projectModal"
      role="dialog"
      aria-modal="true"
      aria-hidden="false"
    >
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-container" role="document">
        <button
          className="modal-close-btn"
          id="modalCloseBtn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          &times;
        </button>

        <div className="modal-content" id="modalDynamicContent">
          <div className="modal-header-meta">
            <span>{project.num}</span>
          </div>
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-tagline">"{project.tagline}"</p>

          <div className="modal-body-section">
            <p className="modal-overview-text">{project.description}</p>

            <div className="modal-features-list">
              {project.highlights.map((item, index) => (
                <div key={index} className="feature-box">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="modal-tech-stack">
              <span className="modal-tech-label">CORE TECHNOLOGIES:</span>
              <div className="modal-pills">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-footer-actions">
            <a
              href={project.githubUrl || project.demoUrl}
              className="btn btn-lime magnetic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>VIEW ON GITHUB</span>
              <span className="btn-arrow">↗</span>
            </a>
            <button
              className="btn btn-outline"
              id="modalDismissBtn"
              onClick={onClose}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

