import React from 'react';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="site-container">
        {/* Section Header with Formal & Normal Typography */}
        <div className="about-header-wrap reveal-on-scroll">
          <div className="about-kicker-pill">
            <span className="about-kicker-dot" />
            <span>About Satya Ram</span>
          </div>

          <h2 className="about-formal-title">
            Software Engineer building intelligent digital products, scalable web systems, and high-performance applications.
          </h2>

          <p className="about-sub-description">
            Combining rigorous software engineering, modern cloud architecture, and applied artificial intelligence to build software that creates lasting value.
          </p>
        </div>

        {/* 2-Column Balanced Premium Composition */}
        <div className="about-grid-premium">
          {/* Left Column: Narrative & Core Capabilities Cards */}
          <div className="about-narrative-col reveal-on-scroll">
            <p className="about-lead-formal">
              I am Satya Ram, a Software Engineer dedicated to solving complex problems through clean architecture, modern full stack development, and applied artificial intelligence. I enjoy transforming intricate requirements into reliable, maintainable, and user-centric software.
            </p>

            <p className="about-body-formal">
              My experience spans building full-cycle digital platforms—designing resilient database schemas, integrating machine learning capabilities, and creating responsive, fluid frontends engineered for performance across all screen sizes.
            </p>

            {/* 3 Core Focus Cards */}
            <div className="about-pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon-box">⚙️</div>
                <div className="pillar-content">
                  <h4>Software Architecture &amp; Clean Code</h4>
                  <p>Scalable system architecture, clean modular codebases, performant RESTful APIs, and robust database design.</p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">🧠</div>
                <div className="pillar-content">
                  <h4>AI &amp; Machine Learning Systems</h4>
                  <p>Integrating predictive intelligence, machine learning models, and smart automation pipelines into production workflows.</p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">🌐</div>
                <div className="pillar-content">
                  <h4>Modern Full Stack &amp; Web Platforms</h4>
                  <p>End-to-end web experiences crafted with React, Python, Node.js, Supabase, and cloud-native deployments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Dossier & Credentials Card */}
          <div className="about-dossier-col reveal-on-scroll">
            <div className="about-dossier-card">
              {/* Card Top Bar */}
              <div className="dossier-top-bar">
                <span className="dossier-card-title">Professional Profile</span>
                <span className="dossier-status-badge">
                  <span className="status-pulse-dot-green" />
                  Available for Work
                </span>
              </div>

              {/* Dossier Structured Rows */}
              <div className="dossier-rows-list">
                <div className="dossier-row">
                  <span className="dossier-row-label">Role</span>
                  <span className="dossier-row-value">Software Engineer</span>
                </div>

                <div className="dossier-row">
                  <span className="dossier-row-label">Focus</span>
                  <span className="dossier-row-value">AI/ML &bull; Full Stack &bull; Web Platforms</span>
                </div>

                <div className="dossier-row">
                  <span className="dossier-row-label">Specialization</span>
                  <span className="dossier-row-value">Intelligent Applications &amp; Scalable Systems</span>
                </div>

                <div className="dossier-row">
                  <span className="dossier-row-label">Location</span>
                  <span className="dossier-row-value">Balrampur, Uttar Pradesh, India</span>
                </div>

                <div className="dossier-row">
                  <span className="dossier-row-label">Contact</span>
                  <span className="dossier-row-value">
                    <a href="mailto:s09084268@gmail.com" style={{ color: '#0f172a', textDecoration: 'underline' }}>
                      s09084268@gmail.com
                    </a>
                  </span>
                </div>
              </div>

              {/* Stats Highlights Grid */}
              <div className="dossier-stats-grid">
                <div className="dossier-stat-item">
                  <span className="stat-metric-num">4+</span>
                  <span className="stat-metric-label">Flagship Works</span>
                </div>

                <div className="dossier-stat-item">
                  <span className="stat-metric-num">100%</span>
                  <span className="stat-metric-label">Cloud-Ready</span>
                </div>

                <div className="dossier-stat-item">
                  <span className="stat-metric-num">Full Stack</span>
                  <span className="stat-metric-label">End-to-End</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="dossier-actions">
                <a href="#projects" className="dossier-btn-primary magnetic" data-cursor="VIEW">
                  <span>View Selected Work</span>
                  <span>↗</span>
                </a>
                <a href="#capabilities" className="dossier-btn-secondary magnetic">
                  <span>What I Build</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Editorial Marquee Ribbon with Normal Typography */}
      <div className="marquee-ribbon" aria-hidden="true">
        <div className="marquee-track">
          <span>Software Engineering</span><i className="marquee-star">&bull;</i>
          <span>Artificial Intelligence</span><i className="marquee-star">&bull;</i>
          <span>Full Stack Architecture</span><i className="marquee-star">&bull;</i>
          <span>Database Systems</span><i className="marquee-star">&bull;</i>
          <span>Scalable Web Experiences</span><i className="marquee-star">&bull;</i>
          <span>Continuous Learning</span><i className="marquee-star">&bull;</i>
          <span>Software Engineering</span><i className="marquee-star">&bull;</i>
          <span>Artificial Intelligence</span><i className="marquee-star">&bull;</i>
          <span>Full Stack Architecture</span><i className="marquee-star">&bull;</i>
          <span>Database Systems</span><i className="marquee-star">&bull;</i>
          <span>Scalable Web Experiences</span><i className="marquee-star">&bull;</i>
          <span>Continuous Learning</span><i className="marquee-star">&bull;</i>
        </div>
      </div>
    </section>
  );
}
