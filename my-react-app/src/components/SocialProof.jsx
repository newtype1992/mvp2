import React from 'react';

const SocialProof = ({ logos, sectionRef, sectionId = 'social-proof' }) => (
  <section
    ref={sectionRef}
    data-section-id={sectionId}
    className="section has-background-dark-light"
    aria-labelledby="social-proof-heading"
  >
    <div className="container">
      <h2 id="social-proof-heading" className="title is-4 has-text-grey-200 has-text-centered">
        Trusted by operators closing last-minute gaps
      </h2>
      <div className="columns is-mobile is-multiline is-variable is-5 is-justify-content-center mt-5">
        {logos.map((logo) => (
          <div key={logo} className="column is-6-mobile is-3-tablet has-text-centered">
            <div className="box is-shadowless has-background-dark-lighter social-logo">
              <span className="has-text-primary has-text-weight-semibold">{logo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
