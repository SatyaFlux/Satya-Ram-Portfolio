import React, { useState } from 'react';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [copyStatus, setCopyStatus] = useState('Copy Address');

  const emailAddress = 's09084268@gmail.com';

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const temp = document.createElement('input');
        temp.value = emailAddress;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        temp.remove();
      }

      setCopyStatus('Copied ✓');
      if (onShowToast) onShowToast('Email copied to clipboard: ' + emailAddress);

      setTimeout(() => {
        setCopyStatus('Copy Address');
      }, 2500);
    } catch {
      setCopyStatus('Failed');
      setTimeout(() => setCopyStatus('Copy Address'), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters).';
    }

    if (!formData.email.trim() || !validateEmail(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message (at least 10 characters).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage('Thank you! Satya will review your message and reply soon.');

      if (onShowToast) {
        onShowToast('Message sent successfully! Satya will get back to you shortly.');
      }

      const clientName = formData.name.trim();
      const clientMsg = formData.message.trim();

      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        const mailtoLink = `mailto:${emailAddress}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(clientName)}&body=${encodeURIComponent(clientMsg)}`;
        window.location.href = mailtoLink;
      }, 1200);
    }, 800);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="section contact-section dark-contrast" id="contact">
      <div className="site-container">
        {/* Kicker Pill */}
        <div className="reveal-on-scroll">
          <div className="contact-kicker-pill">
            <span className="contact-kicker-dot" />
            <span>Initiate Contact &bull; Available for Opportunities</span>
          </div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Formal & Dignified Presentation */}
          <div className="contact-intro-col reveal-on-scroll">
            <h2 className="contact-formal-heading">
              Connect with Satya Ram — Software Engineer &amp; Developer
            </h2>

            <p className="contact-subtext">
              Whether you are looking to architect an AI/ML product, launch a modern web application, or explore full stack engineering collaborations, my inbox is always open.
            </p>

            {/* Direct Email Card Capsule */}
            <div className="contact-email-card">
              <div className="email-card-top">
                <span className="email-card-label">✉️ Direct Inquiries</span>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Primary Channel</span>
              </div>
              <div className="email-card-address">{emailAddress}</div>
              <div className="email-card-actions">
                <a
                  href={`mailto:${emailAddress}`}
                  className="email-action-primary"
                  id="emailDirectBtn"
                  data-cursor="WRITE"
                >
                  <span>Open Mail Client</span>
                  <span>↗</span>
                </a>
                <button
                  type="button"
                  className="email-action-copy"
                  id="copyEmailBtn"
                  onClick={handleCopyEmail}
                >
                  <span>{copyStatus}</span>
                </button>
              </div>
            </div>

            {/* Info Badges */}
            <div className="contact-meta-pills">
              <div className="contact-meta-item">
                <span>⚡</span>
                <span><strong>Response Guarantee:</strong> Typically replies within 24 hours.</span>
              </div>
              <div className="contact-meta-item">
                <span>📍</span>
                <span><strong>Location:</strong> Balrampur, Uttar Pradesh &bull; Remote worldwide.</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="contact-social-row">
              <span className="social-header-formal">Connect Across Platforms</span>
              <div className="social-pills-formal">
                <a
                  href="https://github.com/SatyaFlux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  data-cursor="VISIT"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/satya-ram-6577a5299?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  data-cursor="CONNECT"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.instagram.com/satyaram003?igsh=MWxidjdqdnNvYjltMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  data-cursor="FOLLOW"
                >
                  <span>Instagram</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Controlled Interactive Form */}
          <div className="contact-form-col reveal-on-scroll">
            <div className="form-container-card">
              <div className="form-header-formal">
                <h3>Send a Direct Message</h3>
                <p>Fill out the form below and I'll get back to you promptly.</p>
              </div>

              <form className="contact-form" id="contactForm" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="userName" className="field-label-formal">
                    Your Name <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="userName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`field-input ${errors.name ? 'has-error' : ''}`}
                    placeholder="Enter your name or company"
                    required
                    minLength={2}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span className="field-error-msg" id="nameError">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="userEmail" className="field-label-formal">
                    Email Address <span className="req-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="userEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`field-input ${errors.email ? 'has-error' : ''}`}
                    placeholder="you@company.com"
                    required
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="field-error-msg" id="emailError">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="userMessage" className="field-label-formal">
                    Project Details / Message <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="userMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`field-textarea ${errors.message ? 'has-error' : ''}`}
                    rows={4}
                    placeholder="Tell me about your idea, timeline, or scope of work..."
                    required
                    minLength={10}
                  />
                  {errors.message && (
                    <span className="field-error-msg" id="messageError">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-submit-form magnetic"
                  id="submitFormBtn"
                  disabled={isSubmitting}
                  data-cursor="SEND"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <span>↗</span>
                </button>

                {statusMessage && (
                  <div className="form-status-alert success" id="formStatusAlert" aria-live="polite">
                    {statusMessage}
                  </div>
                )}

                <p className="form-privacy-note">
                  🔒 Direct communication. Your details are never shared or spammed.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Back to Top Cue */}
        <div className="contact-foot-bar">
          <span>INDIA &bull; AVAILABLE REMOTELY WORLDWIDE</span>
          <a
            href="#navbar"
            onClick={scrollToTop}
            className="back-to-top-btn"
            data-cursor="TOP"
          >
            <span>Back to Top</span>
            <span>&uarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
