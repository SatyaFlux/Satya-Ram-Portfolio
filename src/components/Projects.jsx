import React, { useState } from 'react';

export default function Projects({ onOpenProject }) {
  const [activeTab, setActiveTab] = useState('real');

  const tabs = [
    { id: 'real', label: 'Real Product' },
    { id: 'all', label: 'All Systems' },
    { id: 'ai', label: 'AI & Platforms' },
    { id: 'commerce', label: 'Commerce & Web' }
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="site-container">
        {/* Giant Watermark & Section Header */}
        <div className="navsoul-watermark-wrap reveal-on-scroll">
          <span aria-hidden="true" className="navsoul-watermark">
            PORTFOLIO
          </span>
          <h2 className="navsoul-section-title">
            <span className="navsoul-slash">/</span>Software Engineer Portfolio
          </h2>
        </div>

        {/* Filter Tabs Bar */}
        <div className="navsoul-filter-bar reveal-on-scroll">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`navsoul-filter-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && <span className="navsoul-filter-underline" />}
            </button>
          ))}
        </div>

        {/* 2-Column Projects Showcase Grid matching screenshot */}
        <div className="navsoul-projects-grid">
          {/* =========================================================
              CARD 1: ChemNexus — Interactive Chemistry Knowledge Platform
             ========================================================= */}
          {(activeTab === 'real' || activeTab === 'all' || activeTab === 'ai') && (
            <article
              className="project-showcase-card group reveal-on-scroll"
              onClick={() => onOpenProject('chemnexus')}
              tabIndex={0}
              role="button"
              aria-label="View ChemNexus Project"
            >
              <div className="project-stage-box stage-chemnexus" data-cursor="VIEW">
                {/* Top Meta */}
                <div className="stage-top-meta">
                  <span className="stage-tag-badge">REAL PRODUCT</span>
                  <span className="stage-feature-pill chemnexus-pill">
                    ✦ Interactive Chemistry Knowledge Platform
                  </span>
                </div>

                {/* Center Brand and Devices Mockup */}
                <div className="stage-center-visual">
                  <h3 className="stage-brand-title title-chemnexus">ChemNexus</h3>
                  <span className="stage-url-link url-chemnexus">chemnexus.tech</span>

                  {/* Floating feature pills around devices */}
                  <div className="mockup-devices-wrap">
                    <span className="floating-pill fp-top-left">
                      <span className="fp-icon-green">🧪</span>
                      <span>Periodic Table</span>
                    </span>
                    <span className="floating-pill fp-bot-left">
                      <span className="fp-icon-teal">⚡</span>
                      <span>Reaction Balancer</span>
                    </span>

                    {/* Laptop frame */}
                    <div className="mockup-laptop">
                      <div className="mockup-laptop-bar">
                        <span className="mockup-dot" />
                        <span className="mockup-dot" />
                        <span className="mockup-dot" />
                        <span className="mockup-url-bar">chemnexus.tech</span>
                      </div>
                      <div className="mockup-laptop-body">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                          <span style={{ fontWeight: 800, fontSize: '0.65rem', color: '#166534' }}>
                            Chem<span style={{ color: '#059669' }}>Nexus</span>
                          </span>
                          <span style={{ fontSize: '0.48rem', color: '#059669', fontWeight: 600 }}>118 Elements &bull; AI Active</span>
                        </div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <div style={{ flex: 1.25 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 3, marginBottom: 5 }}>
                              {['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne'].map((el, i) => (
                                <div
                                  key={el}
                                  style={{
                                    background: i === 5 ? '#059669' : '#f0fdf4',
                                    color: i === 5 ? '#fff' : '#166534',
                                    border: '1px solid #bbf7d0',
                                    borderRadius: 3,
                                    fontSize: '0.48rem',
                                    fontWeight: 700,
                                    padding: '2px 0',
                                    textAlign: 'center'
                                  }}
                                >
                                  {el}
                                </div>
                              ))}
                            </div>
                            <div style={{ background: '#f0fdf4', borderRadius: 4, padding: '3px 6px', fontSize: '0.5rem', color: '#166534', border: '1px solid #bbf7d0' }}>
                              C &bull; Carbon &bull; 6 &bull; [He] 2s² 2p²
                            </div>
                          </div>
                          <div style={{ flex: 0.75, textAlign: 'center' }}>
                            <div style={{ width: 44, height: 44, margin: '0 auto', background: 'linear-gradient(135deg, #dcfce7, #86efac)', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ fontSize: '0.8rem', fontWeight: 900, color: '#166534', lineHeight: 1 }}>C₆</span>
                              <span style={{ fontSize: '0.38rem', color: '#15803d', fontWeight: 700 }}>12.011</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone frame */}
                    <div className="mockup-phone">
                      <div className="mockup-phone-island" />
                      <div style={{ background: '#f0fdf4', borderRadius: 6, padding: '6px 4px', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.5rem', fontWeight: 800, color: '#166534', display: 'block', lineHeight: 1.1 }}>
                          2H₂ + O₂<br />➔ 2H₂O
                        </span>
                        <div style={{ width: 22, height: 22, margin: '4px auto 0 auto', background: '#059669', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff' }}>
                          ⚡
                        </div>
                      </div>
                    </div>

                    <span className="floating-pill fp-top-right">
                      <span className="fp-icon-green">🤖</span>
                      <span>AI Assistant</span>
                    </span>
                    <span className="floating-pill fp-bot-right">
                      <span className="fp-icon-teal">📊</span>
                      <span>Study Progress</span>
                    </span>
                  </div>
                </div>

                {/* Bottom 4 Feature Items */}
                <div className="stage-bottom-ribbon">
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#059669' }}>⚛️</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Interactive Table</span>
                      <span className="ribbon-sub">118 Periodic Elements</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(13, 148, 136, 0.12)', color: '#0d9488' }}>🔬</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Reaction Engine</span>
                      <span className="ribbon-sub">Balance &amp; Simulate</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#059669' }}>🤖</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">AI Chemistry Tutor</span>
                      <span className="ribbon-sub">Smart Step Guidance</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(13, 148, 136, 0.12)', color: '#0d9488' }}>📚</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Track Mastery</span>
                      <span className="ribbon-sub">Cloud Study Paths</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="card-caption-title">
                <span>ChemNexus — Interactive Chemistry Knowledge Platform</span>
                <span className="card-caption-arrow">↗</span>
              </h3>
            </article>
          )}

          {/* =========================================================
              CARD 2: Yaduvanshi — Local Grocery & Kirana Delivery OS
             ========================================================= */}
          {(activeTab === 'real' || activeTab === 'all' || activeTab === 'commerce') && (
            <article
              className="project-showcase-card group reveal-on-scroll"
              onClick={() => onOpenProject('yaduvanshi')}
              tabIndex={0}
              role="button"
              aria-label="View Yaduvanshi Project"
            >
              <div className="project-stage-box stage-yaduvanshi" data-cursor="VIEW">
                {/* Top Meta */}
                <div className="stage-top-meta">
                  <span className="stage-tag-badge">REAL PRODUCT</span>
                  <span className="stage-feature-pill yaduvanshi-pill">
                    ✦ 30-45 Min Local Grocery Delivery OS
                  </span>
                </div>

                {/* Center Brand and Devices Mockup */}
                <div className="stage-center-visual">
                  <h3 className="stage-brand-title title-yaduvanshi">Yaduvanshi</h3>
                  <span className="stage-url-link url-yaduvanshi">yaduvanshi.store</span>

                  {/* Floating feature pills around devices */}
                  <div className="mockup-devices-wrap">
                    <span className="floating-pill fp-top-left">
                      <span className="fp-icon-amber">🛒</span>
                      <span>Kirana Store</span>
                    </span>
                    <span className="floating-pill fp-bot-left">
                      <span className="fp-icon-green">⚡</span>
                      <span>30-45m Express</span>
                    </span>

                    {/* Laptop frame */}
                    <div className="mockup-laptop">
                      <div className="mockup-laptop-bar">
                        <span className="mockup-dot" />
                        <span className="mockup-dot" />
                        <span className="mockup-dot" />
                        <span className="mockup-url-bar">yaduvanshi.store</span>
                      </div>
                      <div className="mockup-laptop-body">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                          <span style={{ fontWeight: 800, fontSize: '0.62rem', color: '#15803d' }}>
                            Yaduvanshi<span style={{ color: '#b45309' }}> Kirana</span>
                          </span>
                          <span style={{ fontSize: '0.48rem', color: '#15803d', fontWeight: 600 }}>Balrampur &bull; Express Delivery</span>
                        </div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <div style={{ flex: 1.2 }}>
                            <p style={{ fontWeight: 800, fontSize: '0.74rem', color: '#1f2937', lineHeight: 1.15, marginBottom: 4 }}>
                              Har Roz Ki<br />Zaroorat,<br />Ghar Baithe!
                            </p>
                            <div style={{ background: '#fefce8', borderRadius: 4, padding: '3px 6px', fontSize: '0.5rem', color: '#854d0e', border: '1px solid #fef08a' }}>
                              🌾 Atta &bull; 🫘 Dals &bull; 🧂 Spices &bull; 🧼 Essentials
                            </div>
                          </div>
                          <div style={{ flex: 0.8, textAlign: 'center' }}>
                            <div style={{ width: 44, height: 44, margin: '0 auto', background: 'linear-gradient(135deg, #fef08a, #86efac)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                              🛍️
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone frame */}
                    <div className="mockup-phone">
                      <div className="mockup-phone-island" />
                      <div style={{ background: '#f0fdf4', borderRadius: 6, padding: '6px 4px', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.5rem', fontWeight: 800, color: '#15803d', display: 'block', lineHeight: 1.1 }}>
                          WhatsApp<br />Order 💬
                        </span>
                        <div style={{ width: 22, height: 22, margin: '4px auto 0 auto', background: '#16a34a', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff' }}>
                          ✓
                        </div>
                      </div>
                    </div>

                    <span className="floating-pill fp-top-right">
                      <span className="fp-icon-amber">💬</span>
                      <span>WhatsApp Order</span>
                    </span>
                    <span className="floating-pill fp-bot-right">
                      <span className="fp-icon-green">📦</span>
                      <span>Live Inventory</span>
                    </span>
                  </div>
                </div>

                {/* Bottom 4 Feature Items */}
                <div className="stage-bottom-ribbon">
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(202, 138, 4, 0.12)', color: '#b45309' }}>🏪</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Digital Storefront</span>
                      <span className="ribbon-sub">Daily Kirana Catalog</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(22, 163, 74, 0.12)', color: '#16a34a' }}>⚡</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Express Delivery</span>
                      <span className="ribbon-sub">30-45 Min Doorstep</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(202, 138, 4, 0.12)', color: '#b45309' }}>💬</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">1-Click WhatsApp</span>
                      <span className="ribbon-sub">Direct Cart Orders</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(22, 163, 74, 0.12)', color: '#16a34a' }}>💳</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Flexible Checkout</span>
                      <span className="ribbon-sub">Cash &amp; UPI Options</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="card-caption-title">
                <span>Yaduvanshi — Local Grocery & Kirana Delivery OS</span>
                <span className="card-caption-arrow">↗</span>
              </h3>
            </article>
          )}

          {/* =========================================================
              CARD 3: Sacha Sauda — Honest Everyday Marketplace
             ========================================================= */}
          {(activeTab === 'real' || activeTab === 'all' || activeTab === 'commerce') && (
            <article
              className="project-showcase-card group reveal-on-scroll"
              onClick={() => onOpenProject('sachasauda')}
              tabIndex={0}
              role="button"
              aria-label="View Sacha Sauda Project"
            >
              <div className="project-stage-box stage-sachasauda" data-cursor="VIEW">
                {/* Top Meta */}
                <div className="stage-top-meta">
                  <span className="stage-tag-badge">REAL PRODUCT</span>
                  <span className="stage-feature-pill sachasauda-pill">
                    ✦ Ghar Ka Sauda, Sahi Sauda
                  </span>
                </div>

                {/* Center Brand and Devices Mockup */}
                <div className="stage-center-visual">
                  <h3 className="stage-brand-title title-sachasauda">Sacha Sauda</h3>
                  <span className="stage-url-link url-sachasauda">sachasauda.shop</span>

                  {/* Floating feature pills around devices */}
                  <div className="mockup-devices-wrap">
                    <span className="floating-pill fp-top-left">
                      <span className="fp-icon-magenta">🛍️</span>
                      <span>Fair Marketplace</span>
                    </span>
                    <span className="floating-pill fp-bot-left">
                      <span className="fp-icon-purple">🔍</span>
                      <span>Smart Discovery</span>
                    </span>

                    {/* Laptop frame */}
                    <div className="mockup-laptop">
                      <div className="mockup-laptop-bar">
                        <span className="mockup-dot" />
                        <span className="mockup-dot" />
                        <span className="mockup-dot" />
                        <span className="mockup-url-bar">sachasauda.shop</span>
                      </div>
                      <div className="mockup-laptop-body">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                          <span style={{ fontWeight: 800, fontSize: '0.62rem', color: '#111' }}>
                            Sacha <span style={{ color: '#842b8b' }}>Sauda</span>
                          </span>
                          <span style={{ fontSize: '0.48rem', color: '#888' }}>Verified Pricing &bull; Fast Cart</span>
                        </div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <div style={{ flex: 1.2 }}>
                            <p style={{ fontWeight: 800, fontSize: '0.74rem', color: '#0a0a0a', lineHeight: 1.15, marginBottom: 4 }}>
                              Ghar ka sauda,<br />sahi sauda!
                            </p>
                            <div style={{ background: '#fdf2f8', borderRadius: 4, padding: '3px 6px', fontSize: '0.5rem', color: '#842b8b', border: '1px solid #fbcfe8' }}>
                              🔍 Search 100+ daily essentials...
                            </div>
                          </div>
                          <div style={{ flex: 0.8, textAlign: 'center' }}>
                            <div style={{ width: 44, height: 44, margin: '0 auto', background: 'linear-gradient(135deg, #fbcfe8, #f472b6)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                              🛒
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone frame */}
                    <div className="mockup-phone">
                      <div className="mockup-phone-island" />
                      <div style={{ background: '#fdf2f8', borderRadius: 6, padding: '6px 4px', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.5rem', fontWeight: 800, color: '#111', display: 'block', lineHeight: 1.1 }}>
                          Cart: 4 items<br />Verified!
                        </span>
                        <div style={{ width: 22, height: 22, margin: '4px auto 0 auto', background: '#ec4899', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff' }}>
                          ✦
                        </div>
                      </div>
                    </div>

                    <span className="floating-pill fp-top-right">
                      <span className="fp-icon-magenta">🛒</span>
                      <span>Fast Cart</span>
                    </span>
                    <span className="floating-pill fp-bot-right">
                      <span className="fp-icon-purple">🔒</span>
                      <span>Secure Supabase</span>
                    </span>
                  </div>
                </div>

                {/* Bottom 4 Feature Items */}
                <div className="stage-bottom-ribbon">
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(219, 39, 119, 0.1)', color: '#db2777' }}>🏷️</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Fair Pricing</span>
                      <span className="ribbon-sub">Transparent Daily Rates</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(132, 43, 139, 0.1)', color: '#842b8b' }}>🔍</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Instant Search</span>
                      <span className="ribbon-sub">Fast Category Filters</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(219, 39, 119, 0.1)', color: '#db2777' }}>📦</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Order Tracking</span>
                      <span className="ribbon-sub">Live Status Updates</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(132, 43, 139, 0.1)', color: '#842b8b' }}>🛡️</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Verified Quality</span>
                      <span className="ribbon-sub">Direct Honest Sourcing</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="card-caption-title">
                <span>Sacha Sauda — Honest Everyday Marketplace</span>
                <span className="card-caption-arrow">↗</span>
              </h3>
            </article>
          )}

          {/* =========================================================
              CARD 4: SmartGram — Rural Digital Governance & Village Portal
             ========================================================= */}
          {(activeTab === 'real' || activeTab === 'all' || activeTab === 'ai') && (
            <article
              className="project-showcase-card group reveal-on-scroll"
              onClick={() => onOpenProject('smartgram')}
              tabIndex={0}
              role="button"
              aria-label="View SmartGram Project"
            >
              <div className="project-stage-box stage-smartgram" data-cursor="VIEW">
                {/* Top Meta */}
                <div className="stage-top-meta">
                  <span className="stage-tag-badge">REAL PRODUCT</span>
                  <span className="stage-feature-pill smartgram-pill">
                    ✦ Smart Village Digital Governance OS
                  </span>
                </div>

                {/* Center Brand and Devices Mockup */}
                <div className="stage-center-visual">
                  <h3 className="stage-brand-title title-smartgram">SmartGram</h3>
                  <span className="stage-url-link url-smartgram">smartgram.village</span>

                  {/* Floating feature pills around devices */}
                  <div className="mockup-devices-wrap">
                    <span className="floating-pill fp-top-left">
                      <span className="fp-icon-blue">🏛️</span>
                      <span>Civic Portal</span>
                    </span>
                    <span className="floating-pill fp-bot-left">
                      <span className="fp-icon-teal">📊</span>
                      <span>Panchayat Data</span>
                    </span>

                    {/* Laptop frame */}
                    <div className="mockup-laptop">
                      <div className="mockup-laptop-bar">
                        <span className="mockup-dot" />
                        <span className="mockup-dot" />
                        <span className="mockup-dot" />
                        <span className="mockup-url-bar">smartgram.village</span>
                      </div>
                      <div className="mockup-laptop-body">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                          <span style={{ fontWeight: 800, fontSize: '0.62rem', color: '#1e40af' }}>Maddo Bheekh Digital Portal</span>
                          <span style={{ fontSize: '0.48rem', color: '#2563eb', fontWeight: 600 }}>Civic Services Live</span>
                        </div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <div style={{ flex: 1.2 }}>
                            <div style={{ background: '#eff6ff', borderRadius: 4, padding: '4px 6px', marginBottom: 4 }}>
                              <span style={{ fontSize: '0.52rem', fontWeight: 700, color: '#1e40af', display: 'block' }}>Panchayat Schemes &bull; 94% Saturation</span>
                              <span style={{ fontSize: '0.46rem', color: '#3b82f6' }}>Certificates, Mandi Rates, Alerts</span>
                            </div>
                            <div style={{ background: '#f8fafc', borderRadius: 4, padding: '4px 6px' }}>
                              <span style={{ fontSize: '0.5rem', fontWeight: 700, color: '#334155', display: 'block' }}>Farmer Advisory &bull; Active</span>
                            </div>
                          </div>
                          <div style={{ flex: 0.8, textAlign: 'center' }}>
                            <div style={{ width: 44, height: 44, margin: '0 auto', background: '#dbeafe', borderRadius: '50%', border: '3px solid #2563eb', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#1d4ed8', lineHeight: 1 }}>94%</span>
                              <span style={{ fontSize: '0.38rem', color: '#2563eb', fontWeight: 600 }}>CIVIC</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone frame */}
                    <div className="mockup-phone">
                      <div className="mockup-phone-island" />
                      <div style={{ background: '#f0f9ff', borderRadius: 6, padding: '6px 4px', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.5rem', fontWeight: 800, color: '#0369a1', display: 'block' }}>
                          Grievance &bull; SOS 🚨
                        </span>
                        <div style={{ width: 22, height: 22, margin: '4px auto 0 auto', background: '#0284c7', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff' }}>
                          🏛️
                        </div>
                      </div>
                    </div>

                    <span className="floating-pill fp-top-right">
                      <span className="fp-icon-blue">🌾</span>
                      <span>Scheme Directory</span>
                    </span>
                    <span className="floating-pill fp-bot-right">
                      <span className="fp-icon-teal">🚨</span>
                      <span>Emergency SOS</span>
                    </span>
                  </div>
                </div>

                {/* Bottom 4 Feature Items */}
                <div className="stage-bottom-ribbon">
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>🏛️</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Village Services</span>
                      <span className="ribbon-sub">Civic Certificates</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(13, 148, 136, 0.1)', color: '#0d9488' }}>📊</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Panchayat Data</span>
                      <span className="ribbon-sub">Public Welfare Funds</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>🌾</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Farmer Support</span>
                      <span className="ribbon-sub">Mandi &amp; Crop Feeds</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: 'rgba(13, 148, 136, 0.1)', color: '#0d9488' }}>📲</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Citizen Access</span>
                      <span className="ribbon-sub">Multi-Lingual Portal</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="card-caption-title">
                <span>SmartGram — Rural Digital Governance & Village Portal</span>
                <span className="card-caption-arrow">↗</span>
              </h3>
            </article>
          )}

          {/* =========================================================
              CARD 5 (Bonus): Life Dashboard — Personal Productivity OS
             ========================================================= */}
          {activeTab === 'all' && (
            <article
              className="project-showcase-card group reveal-on-scroll"
              onClick={() => onOpenProject('lifedashboard')}
              tabIndex={0}
              role="button"
              aria-label="View Life Dashboard Project"
            >
              <div className="project-stage-box" style={{ background: 'linear-gradient(135deg, #fafaf9 0%, #f5f5f4 50%, #e7e5e4 100%)', borderColor: 'rgba(0, 0, 0, 0.1)' }} data-cursor="VIEW">
                <div className="stage-top-meta">
                  <span className="stage-tag-badge">PRODUCTIVITY OS</span>
                  <span className="stage-feature-pill" style={{ color: '#44403c', borderColor: 'rgba(0, 0, 0, 0.15)' }}>✦ All-in-One Personal Command Center</span>
                </div>
                <div className="stage-center-visual">
                  <h3 className="stage-brand-title" style={{ color: '#1c1917' }}>Life Dashboard</h3>
                  <span className="stage-url-link" style={{ color: '#44403c', borderColor: '#44403c' }}>lifedashboard.io</span>
                  <div className="mockup-devices-wrap">
                    <div className="mockup-laptop" style={{ padding: 14, textAlign: 'center', background: '#ffffff' }}>
                      <p style={{ fontWeight: 800, fontSize: '0.85rem', color: '#1c1917', marginBottom: 4 }}>
                        One place for your digital life.
                      </p>
                      <p style={{ fontSize: '0.68rem', color: '#57534e' }}>
                        Tasks &bull; Daily Habits &bull; Circadian Targets &bull; Offline-first
                      </p>
                    </div>
                  </div>
                </div>
                <div className="stage-bottom-ribbon">
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: '#f5f5f4', color: '#1c1917' }}>📋</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Unified View</span>
                      <span className="ribbon-sub">Consolidated Tasks</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: '#f5f5f4', color: '#1c1917' }}>🎯</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Habit Rings</span>
                      <span className="ribbon-sub">Daily Habit Loops</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: '#f5f5f4', color: '#1c1917' }}>⚡</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Ultra Fast</span>
                      <span className="ribbon-sub">Zero-Lag Interface</span>
                    </div>
                  </div>
                  <div className="ribbon-item">
                    <span className="ribbon-icon" style={{ background: '#f5f5f4', color: '#1c1917' }}>🔒</span>
                    <div className="ribbon-text">
                      <span className="ribbon-title">Private OS</span>
                      <span className="ribbon-sub">Local Private Storage</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="card-caption-title">
                <span>Life Dashboard — Personal Productivity OS</span>
                <span className="card-caption-arrow">↗</span>
              </h3>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
