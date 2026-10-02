import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && drawerOpen) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [drawerOpen]);

  const navLinks = [
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#capabilities', id: 'capabilities' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <a href="#contact" className="nav-status-pill" title="Available for opportunities">
            <span className="status-pulse-dot" />
            <span className="status-pill-text">Available for New Project</span>
          </a>

          <nav className="desktop-menu" aria-label="Primary Navigation">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="nav-cta-pill magnetic" data-cursor="TALK">
              <span>Let's Talk</span>
              <span className="pill-arr">↗</span>
            </a>
            <button
              className="hamburger-btn"
              onClick={() => setDrawerOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={drawerOpen}
            >
              <span className="ham-line" />
              <span className="ham-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen}>
        <div className="drawer-header">
          <span className="drawer-brand">SATYA RAM</span>
          <span className="drawer-tag">PORTFOLIO '26</span>
        </div>
        <nav className="mobile-nav-links">
          {[
            { title: 'HOME', href: '#home' },
            { title: 'WORK', href: '#projects' },
            { title: 'ABOUT', href: '#about' },
            { title: 'SERVICES', href: '#capabilities' },
            { title: 'EXPERIENCE', href: '#experience' },
            { title: 'CONTACT', href: '#contact' }
          ].map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="mobile-link"
              onClick={() => setDrawerOpen(false)}
            >
              <span className="link-title">{link.title}</span>
              <span className="link-arrow">↗</span>
            </a>
          ))}
        </nav>
        <div className="drawer-footer">
          <div className="drawer-info">
            <span>SOFTWARE ENGINEER</span>
            <span>AI/ML • FULL STACK</span>
          </div>
          <div className="drawer-socials">
            <a href="https://github.com/SatyaFlux" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
            <a href="https://www.linkedin.com/in/satya-ram-6577a5299?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
              LINKEDIN
            </a>
            <a href="https://www.instagram.com/satyaram003?igsh=MWxidjdqdnNvYjltMw==" target="_blank" rel="noopener noreferrer">
              INSTAGRAM
            </a>
            <a href="mailto:s09084268@gmail.com">EMAIL</a>
          </div>
        </div>
      </div>
    </>
  );
}

