import React from 'react';

const HowItWorks = ({ title, steps }) => (
  <section className="section how-it-works">
    <div className="container">
      <h2 className="title is-3 has-text-centered">{title}</h2>
      <div className="steps">
        {steps.map(({ number, title: stepTitle, description }) => (
          <div className="step" key={stepTitle}>
            <span className="step-number">{number}</span>
            <h4 className="title is-5">{stepTitle}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
