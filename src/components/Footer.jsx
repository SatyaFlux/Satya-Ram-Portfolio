import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-container">
        <div className="footer-left">
          <a href="#home" className="footer-brand-title">
            SATYA RAM
          </a>
          <p className="footer-title">SOFTWARE ENGINEER</p>
          <p className="footer-spec">AI/ML &bull; FULL STACK &bull; SOFTWARE DEVELOPMENT</p>
        </div>

        <div className="footer-center">
          <div className="footer-nav-links">
            <a href="#projects">Work</a>
            <a href="#about">About</a>
            <a href="#capabilities">Services</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-social-links">
            <a href="https://github.com/SatyaFlux" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/satya-ram-6577a5299?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/satyaram003?igsh=MWxidjdqdnNvYjltMw==" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="mailto:s09084268@gmail.com">Email</a>
          </div>
          <p className="footer-copy">&copy; 2026 Satya Ram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

