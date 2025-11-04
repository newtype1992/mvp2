import React from 'react';

const ValueUsers = ({ pains, sectionRef, sectionId = 'user-value' }) => (
  <section ref={sectionRef} data-section-id={sectionId} className="section" aria-labelledby="users-heading">
    <div className="container">
      <div className="columns is-variable is-6 is-vcentered">
        <div className="column is-12-tablet is-5-desktop">
          <h2 id="users-heading" className="title has-text-white">
            What members fix with Swift Slots
          </h2>
          <p className="subtitle has-text-grey-light">
            A personalized, real-time feed replaces frantic calls and endless waitlists. Members pick a slot and book
            in seconds.
          </p>
        </div>
        <div className="column is-12-tablet is-7-desktop">
          <div className="columns is-multiline">
            {pains.map(({ title, description, icon }) => (
              <div key={title} className="column is-12-mobile is-6-tablet">
                <div className="box card-tile">
                  <div className="is-flex is-align-items-center gap-sm mb-3">
                    <span className="icon is-medium">{icon}</span>
                    <h3 className="title is-5 mb-0">{title}</h3>
                  </div>
                  <p className="has-text-grey-light">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ValueUsers;
