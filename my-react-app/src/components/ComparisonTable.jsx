import React from 'react';

const ComparisonTable = ({ rows, sectionRef, sectionId = 'comparison' }) => (
  <section ref={sectionRef} data-section-id={sectionId} className="section" aria-labelledby="comparison-heading">
    <div className="container">
      <h2 id="comparison-heading" className="title has-text-white has-text-centered mb-5">
        Shared wins for members and operators
      </h2>
      <div className="table-container comparison-table">
        <table className="table is-fullwidth is-striped is-hoverable">
          <thead>
            <tr>
              <th scope="col">Outcome</th>
              <th scope="col">Members experience</th>
              <th scope="col">Operator impact</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ outcome, users, businesses }) => (
              <tr key={outcome}>
                <th scope="row">{outcome}</th>
                <td>{users}</td>
                <td>{businesses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonTable;
