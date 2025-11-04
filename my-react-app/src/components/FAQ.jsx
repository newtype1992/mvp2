import React, { useState } from 'react';

const FAQ = ({ items, sectionRef, sectionId = 'faq' }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      ref={sectionRef}
      data-section-id={sectionId}
      className="section"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <h2 id="faq-heading" className="title has-text-white has-text-centered mb-6">
          Frequently asked questions
        </h2>
        <div className="faq-list">
          {items.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={question} className={`message ${isOpen ? 'is-primary' : 'is-dark'}`}>
                <div className="message-header">
                  <p>{question}</p>
                  <button
                    type="button"
                    className="button-reset message-toggle"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    {isOpen ? '−' : '+'}
                  </button>
                </div>
                {isOpen ? (
                  <div className="message-body has-text-grey-100">
                    {answer}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
