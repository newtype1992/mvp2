import React from 'react';

const Callouts = ({ items }) => (
  <section className="section callouts">
    <div className="container">
      <div className="columns is-multiline is-variable is-5">
        {items.map(({ title, description }) => (
          <div className="column is-12-touch is-half-desktop" key={title}>
            <div className="box accent">
              <h3 className="title is-4">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Callouts;
