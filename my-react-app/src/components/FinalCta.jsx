import React from 'react';

const FinalCta = ({ title, subtitle, primaryCta, secondaryCta }) => (
  <section className="section final-cta">
    <div className="container has-text-centered">
      <h2 className="title is-3">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="buttons is-centered">
        <button className="button is-primary is-medium">{primaryCta}</button>
        <button className="button is-light is-medium">{secondaryCta}</button>
      </div>
    </div>
  </section>
);

export default FinalCta;
