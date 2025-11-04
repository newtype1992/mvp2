import React from 'react';

const HeroSection = ({
  tag,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  benefits,
  timelineItems,
  stat,
}) => (
  <header className="hero hero-gradient is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-variable is-6">
          <div className="column is-12-touch is-6-desktop">
            <span className="tag is-light is-medium mb-4">{tag}</span>
            <h1 className="title is-1-tablet is-size-2-mobile has-text-white mb-4">
              {title}
            </h1>
            <p className="subtitle has-text-white-bis mb-5">{subtitle}</p>
            <div className="buttons">
              <button className="button is-white is-medium">{primaryCta}</button>
              <button className="button is-outlined is-light is-medium">
                {secondaryCta}
              </button>
            </div>
            <ul className="hero-benefits mt-5">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="column is-12-touch is-6-desktop">
            <div className="floating-card">
              <div className="card schedule-card">
                <header className="card-header">
                  <p className="card-header-title">Today&apos;s Swift Slots</p>
                </header>
                <div className="card-content">
                  <div className="timeline">
                    {timelineItems.map(({ time, activity, badge, badgeClass }) => (
                      <div className="timeline-item" key={`${time}-${activity}`}>
                        <p className="time">{time}</p>
                        <p className="activity">{activity}</p>
                        <span
                          className={`badge${badgeClass ? ` ${badgeClass}` : ''}`}
                        >
                          {badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="floating-badge has-text-centered">
                <p className="title is-4 mb-0">{stat.value}</p>
                <p className="is-size-7">{stat.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default HeroSection;
