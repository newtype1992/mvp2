import React from 'react';

const Hero = ({
  title,
  subtitle,
  pitch,
  primaryAction,
  secondaryAction,
  onPrimary,
  onSecondary,
  badges,
  sectionRef,
  sectionId = 'hero',
}) => (
  <section ref={sectionRef} data-section-id={sectionId} className="hero is-fullheight-with-navbar hero-gradient">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-12-tablet is-6-desktop">
            <span className="tag is-primary is-light is-medium mb-4">{subtitle}</span>
            <h1 className="title is-1 has-text-white">{title}</h1>
            <p className="subtitle is-4 has-text-grey-200 mb-5">{pitch}</p>
            <div className="buttons">
              <button type="button" className="button is-primary is-medium" onClick={onPrimary}>
                {primaryAction}
              </button>
              <button type="button" className="button is-light is-medium" onClick={onSecondary}>
                {secondaryAction}
              </button>
            </div>
            {badges?.length ? (
              <ul className="mt-5 hero-badges">
                {badges.map((item) => (
                  <li key={item} className="media">
                    <span className="media-left">⚡</span>
                    <div className="media-content">{item}</div>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="column is-12-tablet is-6-desktop">
            <div className="card hero-card">
              <header className="card-header">
                <p className="card-header-title has-text-white">Today&apos;s refilled slots</p>
              </header>
              <div className="card-content">
                <div className="timeline">
                  {[
                    {
                      time: '1:15 PM',
                      title: 'Glow District Salon — Color & Cut',
                      meta: 'Booked in 7 minutes · 20% boost',
                    },
                    {
                      time: '2:30 PM',
                      title: 'Pulse Athletics — HIIT Drop-in',
                      meta: 'Booked in 5 minutes · Waitlist',
                    },
                    {
                      time: '4:00 PM',
                      title: 'Northside Wellness — PT consult',
                      meta: 'Booked in 11 minutes · Recovered $120',
                    },
                  ].map(({ time, title, meta }) => (
                    <div key={title} className="timeline-item hero-timeline">
                      <p className="heading">{time}</p>
                      <p className="title is-6 has-text-white mb-1">{title}</p>
                      <p className="has-text-grey-light">{meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
