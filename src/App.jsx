import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';
import Toast from './components/Toast';
import { projectsData } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleHeroCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText('s09084268@gmail.com');
      }
      showToast('Email copied to clipboard: s09084268@gmail.com');
    } catch {
      showToast('Email: s09084268@gmail.com');
    }
  };

  const handleOpenProject = (id) => {
    if (projectsData[id]) {
      setSelectedProject(projectsData[id]);
    }
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    // Add page-loaded class to trigger hero animations
    document.body.classList.add('page-loaded');

    // Scroll reveal observer for editorial fade-ins
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <Hero onCopyEmail={handleHeroCopy} />
        <Projects onOpenProject={handleOpenProject} />
        <About />
        <Capabilities />
        <Experience />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />

      <ProjectModal project={selectedProject} onClose={handleCloseProject} />
      <Toast toasts={toasts} />
    </>
  );
}

