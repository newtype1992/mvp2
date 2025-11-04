import React from 'react';

const UIFlow = ({ stages, sectionRef, sectionId = 'flow' }) => (
  <section
    ref={sectionRef}
    data-section-id={sectionId}
    className="section has-background-dark-lighter"
    aria-labelledby="flow-heading"
  >
    <div className="container">
      <div className="has-text-centered mb-6">
        <h2 id="flow-heading" className="title has-text-white">
          Member-to-operator flow in four screens
        </h2>
        <p className="subtitle has-text-grey-light">
          Every touchpoint is optimized for urgency—from onboarding preferences to payments and operator visibility.
        </p>
      </div>
      <div className="columns is-multiline is-variable is-5">
        {stages.map(({ title, description, content }) => (
          <div key={title} className="column is-12-mobile is-6-tablet">
            <div className="flow-card box">
              <div className="flow-card-header">
                <span className="tag is-primary is-light mb-3">{title}</span>
                <p className="has-text-grey-light">{description}</p>
              </div>
              <div className="flow-card-body">{content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UIFlow;
