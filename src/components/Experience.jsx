import React, { useEffect, useRef } from 'react';

export default function Experience() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const progress = progressRef.current;
      if (!container || !progress) return;

      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;

      if (rect.top < windowH && rect.bottom > 0) {
        const totalH = rect.height;
        const visibleScrolled = Math.min(Math.max(windowH * 0.7 - rect.top, 0), totalH);
        const percentage = Math.min((visibleScrolled / totalH) * 100, 100);
        progress.style.height = `${percentage.toFixed(1)}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const milestones = [
    {
      id: 'software-engineering',
      discipline: 'Software Architecture & Core Engineering',
      focus: 'System Architecture & Clean Code',
      period: 'Engineering Craft',
      desc: 'Architecting scalable, modular software ecosystems with clean architecture, strict modularity, performant REST APIs, and robust database design. Dedicated to writing maintainable code supported by thoughtful testing principles and design patterns.',
      tags: ['Clean Architecture', 'System Design', 'RESTful APIs', 'Code Quality & Testing']
    },
    {
      id: 'ai-ml',
      discipline: 'Applied AI & Machine Learning Systems',
      focus: 'Intelligent Models & Automation',
      period: 'Advanced Computing',
      desc: 'Developing intelligent applications combining deep learning algorithms, computer vision pipelines, and natural language processing. Integrating predictive models and automation into practical, production-ready workflows.',
      tags: ['Machine Learning', 'Computer Vision', 'Model Deployment', 'NLP Pipelines']
    },
    {
      id: 'full-stack',
      discipline: 'Modern Full Stack Web Platforms',
      focus: 'End-to-End Delivery',
      period: 'Product Ecosystems',
      desc: 'Engineering complete, responsive web applications by coupling fluid and accessible frontend user experiences with performant backend servers, secure authentication, and cloud-native databases.',
      tags: ['React & Vite', 'Node.js & Python', 'PostgreSQL & Supabase', 'State Management']
    },
    {
      id: 'production-delivery',
      discipline: 'Production Systems & Real-World Delivery',
      focus: 'Execution & Reliability',
      period: 'Cloud & Scale',
      desc: 'Taking technical specifications and product concepts through all stages of delivery—schema design, prototype iteration, CI/CD automated deployments, cloud infrastructure, and performance monitoring.',
      tags: ['Cloud Hosting', 'Database Design', 'CI/CD Pipelines', 'Performance Tuning']
    },
    {
      id: 'continuous-innovation',
      discipline: 'Technical Research & Systems Exploration',
      focus: 'Frontier Technologies',
      period: 'Continuous Learning',
      desc: 'Continuously expanding engineering depth through active exploration of distributed system design, modern JavaScript/Python frameworks, micro-interactions, and emerging breakthroughs in artificial intelligence.',
      tags: ['Distributed Systems', 'Modern Web Standards', 'Frontier AI', 'Performance Profiling']
    }
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="site-container">
        {/* Section Header with Formal & Normal Typography */}
        <div className="experience-header-wrap reveal-on-scroll">
          <div className="experience-kicker-pill">
            <span className="experience-kicker-dot" />
            <span>Professional Journey</span>
          </div>

          <h2 className="experience-formal-title">
            Software Engineer progression across Python, React, JavaScript, and AI/ML systems.
          </h2>

          <p className="experience-sub-desc">
            A milestone-driven journey of continuous technical growth, delivering reliable production software and exploring frontier technologies.
          </p>
        </div>

        {/* Vertical Timeline with Scroll Progress Line */}
        <div className="exp-timeline-container" id="timelineContainer" ref={containerRef}>
          {/* Base Track Line */}
          <div className="exp-track-line-base" />
          {/* Active Fill Track Line */}
          <div className="exp-track-line-fill" id="timelineProgress" ref={progressRef} />

          <div className="exp-milestones-list">
            {milestones.map((item) => (
              <div key={item.id} className="exp-milestone-row reveal-on-scroll">
                {/* Milestone Node on Spine */}
                <div className="exp-node-col">
                  <div className="exp-milestone-node">
                    <span className="exp-milestone-dot" />
                  </div>
                </div>

                {/* Milestone Card */}
                <div className="exp-card-col">
                  <article className="exp-milestone-card" data-cursor="VIEW">
                    <div className="exp-card-header">
                      <span className="exp-focus-badge">{item.focus}</span>
                      <span className="exp-period-badge">{item.period}</span>
                    </div>

                    <h3 className="exp-milestone-title">{item.discipline}</h3>
                    <p className="exp-milestone-desc">{item.desc}</p>

                    <div className="exp-tags-row">
                      {item.tags.map((tag) => (
                        <span key={tag} className="exp-pill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
