import React from 'react';

const FeatureCards = ({ features, sectionRef, sectionId = 'features' }) => (
  <section
    ref={sectionRef}
    data-section-id={sectionId}
    className="section"
    id="features-grid"
    aria-labelledby="features-heading"
  >
    <div className="container">
      <div className="has-text-centered mb-6">
        <h2 id="features-heading" className="title has-text-white">
          Refill pipeline built for cancellations
        </h2>
        <p className="subtitle has-text-grey-light">
          Automations, alerts, and payments that make every lost slot bookable again—without manual outreach.
        </p>
      </div>
      <div className="columns is-multiline is-variable is-5">
        {features.map(({ title, description, icon }) => (
          <div key={title} className="column is-12-mobile is-6-tablet is-4-desktop">
            <div className="card feature-card">
              <div className="card-content">
                <div className="icon is-large feature-icon" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="title is-5 has-text-white">{title}</h3>
                <p className="has-text-grey-light">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCards;
