/**
 * SATYA RAM — SOFTWARE ENGINEER PORTFOLIO
 * High-End Micro-Interactions, Editorial Animations & Component Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. PAGE LOAD ENTRANCE ANIMATIONS
  // =========================================================================
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 60);
  });

  // =========================================================================
  // 2. SCROLL REVEAL (INTERSECTION OBSERVER)
  // =========================================================================
  const scrollElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    scrollElements.forEach(el => revealObserver.observe(el));
  } else {
    scrollElements.forEach(el => el.classList.add('is-revealed'));
  }

  // =========================================================================
  // 3. STICKY NAVBAR & ACTIVE SECTION INDICATOR
  // =========================================================================
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.desktop-menu .nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Tracking
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // =========================================================================
  // 4. MOBILE DRAWER NAVIGATION
  // =========================================================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function toggleMobileMenu(forceState) {
    const isExpanded = forceState !== undefined 
      ? forceState 
      : hamburgerBtn.getAttribute('aria-expanded') !== 'true';

    hamburgerBtn.setAttribute('aria-expanded', isExpanded);
    mobileDrawer.setAttribute('aria-hidden', !isExpanded);

    if (isExpanded) {
      mobileDrawer.classList.add('open');
      document.body.classList.add('menu-open');
    } else {
      mobileDrawer.classList.remove('open');
      document.body.classList.remove('menu-open');
    }
  }

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => toggleMobileMenu());

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileMenu(false);
      });
    });

    // Close on Escape Key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        toggleMobileMenu(false);
      }
    });
  }

  // =========================================================================
  // 5. MOUSE FOLLOW & SUBTLE PARALLAX ON HERO PORTRAIT
  // =========================================================================
  const heroPortrait = document.getElementById('heroCenterPortrait') || document.getElementById('portraitStage');
  const heroSection = document.getElementById('home');

  if (heroPortrait && heroSection && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isTicking = false;

    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const xNorm = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
      const yNorm = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1

      targetX = xNorm * 10; // max px shift
      targetY = yNorm * 6;  // max px shift

      if (!isTicking) {
        requestAnimationFrame(updatePortraitParallax);
        isTicking = true;
      }
    });

    function updatePortraitParallax() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      heroPortrait.style.transform = `translateX(calc(-50% + ${currentX.toFixed(2)}px)) translateY(${currentY.toFixed(2)}px)`;

      if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
        requestAnimationFrame(updatePortraitParallax);
      } else {
        isTicking = false;
      }
    }

    heroSection.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      if (!isTicking) {
        requestAnimationFrame(updatePortraitParallax);
        isTicking = true;
      }
    });
  }

  // =========================================================================
  // 6. CUSTOM CURSOR FOR DESKTOP
  // =========================================================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const cursorLabel = document.getElementById('cursorLabel');

  if (cursorDot && cursorRing && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    let cursorInitialized = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!cursorInitialized) {
        ringX = mouseX;
        ringY = mouseY;
        cursorDot.style.opacity = '1';
        cursorRing.style.opacity = '1';
        cursorInitialized = true;
      }

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function renderCursorRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      cursorRing.style.left = `${ringX.toFixed(2)}px`;
      cursorRing.style.top = `${ringY.toFixed(2)}px`;

      requestAnimationFrame(renderCursorRing);
    }
    requestAnimationFrame(renderCursorRing);

    // Hoverable interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, .cap-card, .project-art-stage, .skill-pill, [data-cursor]'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
        const customText = el.getAttribute('data-cursor');
        if (customText) {
          cursorLabel.textContent = customText;
        } else if (el.tagName === 'A' || el.tagName === 'BUTTON') {
          cursorLabel.textContent = 'OPEN';
        } else {
          cursorLabel.textContent = '';
        }
      });

      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
        cursorLabel.textContent = '';
      });
    });

    // Dark background sections cursor inversion
    const darkSections = document.querySelectorAll('.dark-contrast');
    if ('IntersectionObserver' in window) {
      const darkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.body.classList.add('dark-cursor');
          } else {
            document.body.classList.remove('dark-cursor');
          }
        });
      }, { threshold: 0.1 });

      darkSections.forEach(sec => darkObserver.observe(sec));
    }
  }

  // =========================================================================
  // 7. MAGNETIC BUTTON EFFECT
  // =========================================================================
  const magneticElements = document.querySelectorAll('.magnetic');

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // =========================================================================
  // 8. PROJECT SHOWCASE DATA & INTERACTIVE MODAL
  // =========================================================================
  const projectsData = {
    chemnexus: {
      num: '01 // KNOWLEDGE PLATFORM',
      title: 'CHEMNEXUS',
      tagline: 'The Interactive Chemistry Knowledge Platform',
      description: 'An interactive chemistry knowledge platform designed to make chemical concepts easier to explore through an interactive periodic table, detailed element information, chemical reactions, search, authentication, learning progress, bookmarks and an optional AI chemistry assistant.',
      highlights: [
        { title: 'Interactive Periodic Table', desc: 'Real-time stateful element grid with orbital configuration, atomic weights, electronegativity, and electron shell visualizers.' },
        { title: 'Reaction Explorer & AI Assistant', desc: 'Predictive chemical reaction balancing engine paired with an AI chemistry query assistant.' },
        { title: 'User Progress & Bookmarks', desc: 'Secure cloud authentication and custom study paths backed by Supabase relational storage.' }
      ],
      tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Supabase'],
      demoUrl: 'mailto:hello@satyaram.dev?subject=ChemNexus%20Live%20Demo%20Inquiry'
    },
    sachasauda: {
      num: '02 // ONLINE MARKETPLACE',
      title: 'SACHA SAUDA',
      tagline: 'Ghar ka sauda, sahi sauda',
      description: 'A modern marketplace-style web application focused on responsive product discovery, authentication, database integration and a clean shopping experience.',
      highlights: [
        { title: 'Product Discovery Engine', desc: 'Fast, client-side category filtering, dynamic search indexing, and real-time inventory checks.' },
        { title: 'Secure Authentication & Cart', desc: 'Session management with customer cart persistence and streamlined ordering flow.' },
        { title: 'Production Cloud Deployment', desc: 'Continuous delivery on Vercel backed by resilient PostgreSQL/Supabase database schemas.' }
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'Vercel'],
      demoUrl: 'mailto:hello@satyaram.dev?subject=Sacha%20Sauda%20Project%20Inquiry'
    },
    lifedashboard: {
      num: '03 // PERSONAL DASHBOARD',
      title: 'LIFE DASHBOARD',
      tagline: 'One place for your digital life.',
      description: 'A modern personal dashboard designed to organize important information, activities and productivity tools into one unified interface.',
      highlights: [
        { title: 'Unified Command View', desc: 'Consolidates daily schedules, priority tasks, and immediate mental notes in a zero-clutter layout.' },
        { title: 'Visual Habit Rings', desc: 'Interactive radial progress monitors tracking circadian habits and daily discipline targets.' },
        { title: 'High Performance & Privacy', desc: 'Ultra-lightweight DOM rendering with local client storage without third-party tracking.' }
      ],
      tech: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'mailto:hello@satyaram.dev?subject=Life%20Dashboard%20Project%20Inquiry'
    }
  };

  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalDynamicContent = document.getElementById('modalDynamicContent');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalDynamicContent.innerHTML = `
      <div class="modal-header-meta">
        <span>${data.num}</span>
      </div>
      <h3 class="modal-title">${data.title}</h3>
      <p class="modal-tagline">"${data.tagline}"</p>
      
      <div class="modal-body-section">
        <p class="modal-overview-text">${data.description}</p>
        
        <div class="modal-features-list">
          ${data.highlights.map(item => `
            <div class="feature-box">
              <h4>${item.title}</h4>
              <p>${item.desc}</p>
            </div>
          `).join('')}
        </div>

        <div class="modal-tech-stack">
          <span class="modal-tech-label">CORE TECHNOLOGIES:</span>
          <div class="modal-pills">
            ${data.tech.map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="modal-footer-actions">
        <a href="${data.demoUrl}" class="btn btn-lime magnetic" target="_blank" rel="noopener noreferrer">
          <span>REQUEST ACCESS / CODE</span>
          <span class="btn-arrow">↗</span>
        </a>
        <button class="btn btn-outline" id="modalDismissBtn">CLOSE</button>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');

    // Attach listener to internal dismiss button
    const modalDismissBtn = document.getElementById('modalDismissBtn');
    if (modalDismissBtn) {
      modalDismissBtn.addEventListener('click', closeProjectModal);
    }
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }

  // Open modal on clicking action buttons or art stages
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute('data-project');
      openProjectModal(projId);
    });
  });

  document.querySelectorAll('.project-showcase').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked directly on an external anchor
      if (e.target.closest('a')) return;
      const projId = card.getAttribute('data-project-id');
      if (projId) openProjectModal(projId);
    });
  });

  if (modalCloseBtn && modalBackdrop) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
    modalBackdrop.addEventListener('click', closeProjectModal);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // =========================================================================
  // 9. TOAST NOTIFICATION UTILITY
  // =========================================================================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, duration = 3500) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-dot"></span><span>${message}</span>`;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => {
        toast.remove();
      }, 350);
    }, duration);
  }

  // =========================================================================
  // 10. COPY EMAIL TO CLIPBOARD
  // =========================================================================
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyStatusText = document.getElementById('copyStatusText');
  const heroQuickCopyBtn = document.getElementById('heroQuickCopyBtn');
  const heroQuickCopyText = document.getElementById('heroQuickCopyText');
  const emailAddress = 'hello@satyaram.dev';

  async function performCopyEmail(targetTextEl) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const tempInput = document.createElement('input');
        tempInput.value = emailAddress;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        tempInput.remove();
      }

      if (targetTextEl) {
        const original = targetTextEl.textContent;
        targetTextEl.textContent = 'COPIED ✓';
        setTimeout(() => {
          targetTextEl.textContent = original;
        }, 2500);
      }
      showToast('Email copied to clipboard: hello@satyaram.dev');
    } catch (err) {
      showToast('Direct email: hello@satyaram.dev');
    }
  }

  if (copyEmailBtn && copyStatusText) {
    copyEmailBtn.addEventListener('click', () => performCopyEmail(copyStatusText));
  }

  if (heroQuickCopyBtn && heroQuickCopyText) {
    heroQuickCopyBtn.addEventListener('click', () => performCopyEmail(heroQuickCopyText));
  }

  // =========================================================================
  // 11. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const messageInput = document.getElementById('userMessage');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formStatusAlert = document.getElementById('formStatusAlert');
  const submitFormBtn = document.getElementById('submitFormBtn');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
      formStatusAlert.textContent = '';
      formStatusAlert.className = 'form-status-alert';

      nameInput.classList.remove('has-error');
      emailInput.classList.remove('has-error');
      messageInput.classList.remove('has-error');

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameError.textContent = 'Please enter your name (at least 2 characters).';
        nameInput.classList.add('has-error');
        isValid = false;
      }

      // Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('has-error');
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageError.textContent = 'Please enter a message (at least 10 characters).';
        messageInput.classList.add('has-error');
        isValid = false;
      }

      if (!isValid) return;

      // Simulated sending state
      const originalBtnHTML = submitFormBtn.innerHTML;
      submitFormBtn.innerHTML = '<span>SENDING...</span>';
      submitFormBtn.disabled = true;

      setTimeout(() => {
        submitFormBtn.innerHTML = originalBtnHTML;
        submitFormBtn.disabled = false;

        formStatusAlert.classList.add('success');
        formStatusAlert.textContent = 'Thank you, Satya will review your message and reply soon.';
        showToast('Message sent successfully! Satya will get back to you shortly.');

        // Also offer to open direct mail client
        const mailtoLink = `mailto:hello@satyaram.dev?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(nameInput.value.trim())}&body=${encodeURIComponent(messageInput.value.trim())}`;
        
        contactForm.reset();

        setTimeout(() => {
          window.location.href = mailtoLink;
        }, 1200);
      }, 700);
    });

    // Real-time clearance of error states on input
    [nameInput, emailInput, messageInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          input.classList.remove('has-error');
          const errEl = document.getElementById(input.id.replace('user', '').toLowerCase() + 'Error');
          if (errEl) errEl.textContent = '';
        });
      }
    });
  }

  // =========================================================================
  // 12. LIVE CLOCK (NEW DELHI / IST) IN HERO BOTTOM BAR
  // =========================================================================
  const liveTimeEl = document.getElementById('liveTime');

  function updateLiveClock() {
    if (!liveTimeEl) return;
    try {
      const now = new Date();
      // Formatted in IST (UTC+5:30)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      const timeStr = new Intl.DateTimeFormat([], options).format(now);
      liveTimeEl.textContent = `NEW DELHI, IN • ${timeStr} IST`;
    } catch (err) {
      // Fallback
      liveTimeEl.textContent = 'NEW DELHI, IN • 28°36\' N';
    }
  }

  updateLiveClock();
  setInterval(updateLiveClock, 30000);

  // =========================================================================
  // 13. TIMELINE SCROLL PROGRESS TRACK
  // =========================================================================
  const timelineContainer = document.getElementById('timelineContainer');
  const timelineProgress = document.getElementById('timelineProgress');

  function updateTimelineProgress() {
    if (!timelineContainer || !timelineProgress) return;
    const rect = timelineContainer.getBoundingClientRect();
    const windowH = window.innerHeight;

    if (rect.top < windowH && rect.bottom > 0) {
      const totalH = rect.height;
      const visibleScrolled = Math.min(Math.max(windowH * 0.7 - rect.top, 0), totalH);
      const percentage = (visibleScrolled / totalH) * 100;
      timelineProgress.style.height = `${percentage.toFixed(1)}%`;
      timelineProgress.style.background = 'linear-gradient(to bottom, var(--lime) 0%, var(--lime) 95%, var(--line) 100%)';
    }
  }

  window.addEventListener('scroll', updateTimelineProgress, { passive: true });
  updateTimelineProgress();

});
