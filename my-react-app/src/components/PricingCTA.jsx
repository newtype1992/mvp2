import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingCTA = ({ tiers, sectionRef, sectionId = 'pricing' }) => {
  const navigate = useNavigate();

  return (
    <section
      ref={sectionRef}
      data-section-id={sectionId}
      className="section has-background-dark-lighter"
      aria-labelledby="pricing-heading"
    >
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 id="pricing-heading" className="title has-text-white">
            Pricing aligned with recovered revenue
          </h2>
          <p className="subtitle has-text-grey-light">
            Pay when Swift Slots fills your schedule. Each tier unlocks deeper automation and premium placement across
            the marketplace.
          </p>
        </div>
        <div className="columns is-multiline is-variable is-5">
          {tiers.map(({ name, description, bullets, accent }) => (
            <div key={name} className="column is-12-mobile is-4-tablet">
              <div className={`box pricing-card ${accent ? 'is-accent' : ''}`}>
                <h3 className="title is-4 has-text-white">{name}</h3>
                <p className="has-text-grey-light mb-4">{description}</p>
                <ul className="pricing-list">
                  {bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="button is-primary is-fullwidth mt-4"
                  onClick={() => navigate('/talk-to-sales')}
                >
                  Contact sales
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
