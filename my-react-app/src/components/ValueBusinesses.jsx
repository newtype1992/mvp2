import React from 'react';

const ValueBusinesses = ({ outcomes, sectionRef, sectionId = 'business-value' }) => (
  <section
    ref={sectionRef}
    data-section-id={sectionId}
    className="section has-background-dark-lighter"
    aria-labelledby="business-heading"
  >
    <div className="container">
      <div className="columns is-vcentered is-variable is-6">
        <div className="column is-12-tablet is-6-desktop">
          <h2 id="business-heading" className="title has-text-white">
            Outcomes operators measure
          </h2>
          <p className="subtitle has-text-grey-light">
            Swift Slots plugs directly into your scheduling tools to surface openings and refill them before the hour is
            over.
          </p>
        </div>
        <div className="column is-12-tablet is-6-desktop">
          <ul className="business-outcomes">
            {outcomes.map(({ title, description }) => (
              <li key={title} className="box has-background-black-bis">
                <h3 className="title is-5 has-text-white mb-2">{title}</h3>
                <p className="has-text-grey-light">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ValueBusinesses;
