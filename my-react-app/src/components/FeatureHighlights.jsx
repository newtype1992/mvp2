import React from 'react';

const FeatureHighlights = ({ features }) => (
  <section className="section feature-section">
    <div className="container">
      <div className="columns is-multiline is-variable is-5">
        {features.map(({ icon, title, description }) => (
          <div className="column is-12-touch is-one-third-desktop" key={title}>
            <div className="box highlight">
              <span className="icon is-large">{icon}</span>
              <h3 className="title is-4">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureHighlights;
