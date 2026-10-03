import React, { useState } from 'react';

export default function Hero({ onCopyEmail }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    onCopyEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="hero-section dymas-hero" id="home">
      {/* Layer 1: Giant Background Title (SATYA outlined + RAM solid) */}
      <div
        className="hero-giant-headline reveal-item"
        style={{ '--delay': '0.1s', pointerEvents: 'none', userSelect: 'none', WebkitUserSelect: 'none' }}
        aria-label="SATYA RAM"
      >
        <svg
          className="hero-giant-svg"
          viewBox="0 0 1440 210"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          <text
            x="722"
            y="165"
            textAnchor="end"
            className="svg-word-outline"
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          >
            SATYA
          </text>
          <text
            x="742"
            y="165"
            textAnchor="start"
            className="svg-word-solid"
            letterSpacing="0.08em"
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          >
            RAM
          </text>
        </svg>
      </div>

      {/* Layer 2: Center Cutout Portrait of Satya overlapping the typography - STABLE IN CENTER, NOT MOVABLE */}
      <div
        className="hero-center-portrait reveal-item hero-portrait-stable"
        style={{ '--delay': '0.25s', pointerEvents: 'none', userSelect: 'none', WebkitUserSelect: 'none' }}
        id="heroCenterPortrait"
        onMouseDown={(e) => e.preventDefault()}
      >
        <img
          src="/portrait-cutout.png?v=8k-rado-v2"
          alt="Satya Ram — Software Engineer and AI/ML Developer"
          className="center-cutout-img"
          fetchPriority="high"
          loading="eager"
          width="542"
          height="669"
          draggable={false}
          onMouseDown={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitUserDrag: 'none'
          }}
        />
      </div>

      {/* Layer 3: Left Floating Content Block (Role, Bio & CTA matching screenshot) */}
      <div className="hero-float-left reveal-item" style={{ '--delay': '0.35s' }}>
        <h1 className="hero-role-title"><span className="hero-role-name">Satya Ram — </span>Software Engineer</h1>
        <p className="hero-role-desc">
          Building digital products that are fast, reliable,<br />
          and user-focused.
        </p>
        <div className="hero-role-actions">
          <a
            href="#contact"
            className="navsoul-conic-btn navsoul-conic-btn-lg group"
            id="hero-btn-collaborate"
            data-cursor="TALK"
          >
            <span aria-hidden="true" className="navsoul-conic-spinner" />
            <span className="navsoul-conic-inner navsoul-collaborate-inner">
              <span className="navsoul-collaborate-label">Let's collaborate</span>
              <span className="navsoul-arrow-circle navsoul-arrow-circle-md">
                <span className="navsoul-arrow-icon navsoul-arrow-icon-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15, color: '#0a0a0a' }}>
                    <path d="M4 12h15" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
                <span className="navsoul-arrow-icon navsoul-arrow-icon-secondary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15, color: '#0a0a0a' }}>
                    <path d="M4 12h15" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Layer 4: Right Floating Social Pill Stack matching requested format */}
      <div className="hero-float-right reveal-item" style={{ '--delay': '0.45s' }}>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/satyaram003?igsh=MWxidjdqdnNvYjltMw=="
          target="_blank"
          rel="noopener noreferrer"
          className="navsoul-conic-btn navsoul-social-btn group"
          id="hero-pill-instagram"
          data-cursor="FOLLOW"
        >
          <span aria-hidden="true" className="navsoul-conic-spinner" />
          <span className="navsoul-conic-inner">
            <span className="navsoul-social-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17, color: '#0a0a0a', flexShrink: 0 }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="navsoul-social-label">Instagram</span>
            </span>
            <span className="navsoul-arrow-circle">
              <span className="navsoul-arrow-icon navsoul-arrow-icon-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13, color: '#0a0a0a' }}>
                  <path d="M4 12h15" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="navsoul-arrow-icon navsoul-arrow-icon-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13, color: '#0a0a0a' }}>
                  <path d="M4 12h15" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </span>
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/satya-ram-6577a5299?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          className="navsoul-conic-btn navsoul-social-btn group"
          id="hero-pill-linkedin"
          data-cursor="CONNECT"
        >
          <span aria-hidden="true" className="navsoul-conic-spinner" />
          <span className="navsoul-conic-inner">
            <span className="navsoul-social-content">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17, color: '#0a0a0a', flexShrink: 0 }}>
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0-.02-3.3 1.66 1.66 0 0 0 .02 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
              <span className="navsoul-social-label">LinkedIn</span>
            </span>
            <span className="navsoul-arrow-circle">
              <span className="navsoul-arrow-icon navsoul-arrow-icon-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13, color: '#0a0a0a' }}>
                  <path d="M4 12h15" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="navsoul-arrow-icon navsoul-arrow-icon-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13, color: '#0a0a0a' }}>
                  <path d="M4 12h15" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </span>
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/SatyaFlux"
          target="_blank"
          rel="noopener noreferrer"
          className="navsoul-conic-btn navsoul-social-btn group"
          id="hero-pill-github"
          data-cursor="GITHUB"
        >
          <span aria-hidden="true" className="navsoul-conic-spinner" />
          <span className="navsoul-conic-inner">
            <span className="navsoul-social-content">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17, color: '#0a0a0a', flexShrink: 0 }}>
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
              </svg>
              <span className="navsoul-social-label">GitHub</span>
            </span>
            <span className="navsoul-arrow-circle">
              <span className="navsoul-arrow-icon navsoul-arrow-icon-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13, color: '#0a0a0a' }}>
                  <path d="M4 12h15" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="navsoul-arrow-icon navsoul-arrow-icon-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13, color: '#0a0a0a' }}>
                  <path d="M4 12h15" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}

