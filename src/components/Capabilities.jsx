import React from 'react';

export default function Capabilities() {
  const capabilities = [
    {
      num: '01',
      icon: '⚙️',
      title: 'Software Engineering & Architecture',
      desc: 'Building scalable, maintainable, and resilient backend systems with clean architecture, fault-tolerant pipelines, and optimized databases.',
      tags: ['System Design', 'Scalable APIs', 'Clean Code', 'Relational DBs']
    },
    {
      num: '02',
      icon: '🧠',
      title: 'AI & Machine Learning Systems',
      desc: 'Designing intelligent solutions powered by modern AI/ML, computer vision, predictive algorithms, and automated inference workflows.',
      tags: ['Machine Learning', 'Computer Vision', 'Neural Networks', 'Intelligent APIs']
    },
    {
      num: '03',
      icon: '⚡',
      title: 'Full Stack Web Development',
      desc: 'Delivering complete end-to-end web applications from responsive frontends to high-throughput backend APIs and cloud infrastructure.',
      tags: ['React', 'Python & FastAPI', 'Node.js', 'Supabase & PostgreSQL']
    },
    {
      num: '04',
      icon: '🌐',
      title: 'High-Performance Digital Experiences',
      desc: 'Crafting fluid, accessible, and user-centric interfaces with micro-interactions, responsive precision, and sub-second load times.',
      tags: ['Responsive UI', 'Fluid Motion', 'Design Systems', 'Performance Optimization']
    }
  ];

  return (
    <section className="section capabilities-section" id="capabilities">
      <div className="site-container">
        {/* Section Header with Formal & Normal Typography */}
        <div className="capabilities-header-wrap reveal-on-scroll">
          <div className="capabilities-kicker-pill">
            <span className="capabilities-kicker-dot" />
            <span>Core Capabilities &amp; Services</span>
          </div>

          <h2 className="capabilities-formal-title">
            Web Developer &amp; AI/ML engineering solutions built for scale, intelligence, and performance.
          </h2>

          <p className="capabilities-sub-desc">
            Bridging computational depth with product sensibility. From complex algorithms and backend systems to refined user experiences.
          </p>
        </div>

        {/* 2x2 Modern Elevated Capability Cards Grid */}
        <div className="capabilities-cards-grid">
          {capabilities.map((cap) => (
            <article key={cap.num} className="cap-premium-card reveal-on-scroll" data-cursor="VIEW">
              <div className="cap-top-row">
                <div className="cap-icon-box">{cap.icon}</div>
                <div className="cap-meta-right">
                  <div className="cap-card-arrow" aria-hidden="true">↗</div>
                </div>
              </div>

              <div className="cap-body-content">
                <h3 className="cap-formal-title">{cap.title}</h3>
                <p className="cap-formal-desc">{cap.desc}</p>
              </div>

              <div className="cap-pill-tags">
                {cap.tags.map((tag) => (
                  <span key={tag} className="cap-pill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
