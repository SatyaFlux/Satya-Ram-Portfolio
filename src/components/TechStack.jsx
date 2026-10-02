import React from 'react';

export default function TechStack() {
  const skillCategories = [
    {
      idx: '01',
      cat: 'frontend',
      name: 'FRONTEND',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design']
    },
    {
      idx: '02',
      cat: 'backend',
      name: 'BACKEND',
      skills: ['Python', 'FastAPI', 'Node.js', 'REST APIs']
    },
    {
      idx: '03',
      cat: 'aiml',
      name: 'AI / ML',
      skills: ['Python', 'Machine Learning', 'Artificial Intelligence', 'Computer Vision']
    },
    {
      idx: '04',
      cat: 'database',
      name: 'DATABASE',
      skills: ['Supabase', 'PostgreSQL', 'Database Design']
    },
    {
      idx: '05',
      cat: 'tools',
      name: 'TOOLS & CLOUD',
      skills: ['Git', 'GitHub', 'Vercel', 'VS Code']
    }
  ];

  return (
    <section className="section skills-section" id="skills">
        <div className="capabilities-kicker-pill reveal-on-scroll">
          <span className="capabilities-kicker-dot" />
          <span>Skills &amp; Arsenal</span>
        </div>

        <div className="skills-head-row reveal-on-scroll">
          <div>
            <h2 className="editorial-heading">
              TECH<br />
              <span className="heading-accent">STACK</span>
            </h2>
            <p className="skills-sub">A curated set of technologies I use to build robust, modern software.</p>
          </div>
          <div className="skills-legend">
            <span className="legend-badge">NO BORING BARS</span>
            <span className="legend-note">&bull; INTERACTIVE TYPOGRAPHY</span>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-categories-grid">
          {skillCategories.map((group) => (
            <div key={group.idx} className="skill-category-card reveal-on-scroll" data-cat={group.cat}>
              <div className="cat-header">
                <span className="cat-idx">{group.idx}</span>
                <h3 className="cat-name">{group.name}</h3>
              </div>
              <div className="skill-pills-wrap">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill" data-tech={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

