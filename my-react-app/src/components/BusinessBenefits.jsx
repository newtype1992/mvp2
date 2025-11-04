import React from 'react';

const BusinessBenefits = ({ heading, description, benefits, pricing }) => (
  <section className="section business-benefits">
    <div className="container">
      <div className="columns is-vcentered is-variable is-6">
        <div className="column is-12-touch is-5-desktop">
          <h2 className="title is-3">{heading}</h2>
          <p className="mb-4">{description}</p>
          <ul className="benefit-list">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="column is-12-touch is-7-desktop">
          <div className="card business-card">
            <div className="card-content">
              <h3 className="title is-4">Business model</h3>
              <p>Simple pricing keeps incentives aligned—only pay when we earn you money.</p>
              <div className="columns is-variable is-4 mt-4">
                {pricing.map(({ title, description: pricingDescription }) => (
                  <div className="column" key={title}>
                    <div className="pricing-pill">
                      <h4 className="title is-5">{title}</h4>
                      <p>{pricingDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BusinessBenefits;
