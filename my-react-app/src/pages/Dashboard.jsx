import React from 'react';

const Dashboard = () => {
  const kpis = [
    { label: 'Fill rate', value: '87%', delta: '+9%', tone: 'is-success', description: 'Slots refilled within 30 minutes' },
    { label: 'Revenue recovered', value: '$6.8k', delta: '+$1.4k', tone: 'is-link', description: 'Past 7 days' },
    { label: 'Average lead time', value: '11m', delta: '-3m', tone: 'is-warning', description: 'Cancellation to refill' },
    { label: 'No-show rate', value: '2.4%', delta: '-0.8%', tone: 'is-info', description: 'Members w/ deposits' },
  ];

  const recentActivity = [
    { slot: 'Glow District · Balayage', member: 'Sophia W.', recovered: '$135', timeToFill: '18m' },
    { slot: 'Pulse Athletics · HIIT', member: 'Jordan R.', recovered: '$32', timeToFill: '6m' },
    { slot: 'Northside Wellness · PT consult', member: 'Victor L.', recovered: '$210', timeToFill: '12m' },
    { slot: 'Bayfront Recovery · OT session', member: 'Maya K.', recovered: '$95', timeToFill: '14m' },
  ];

  const alerts = [
    {
      type: 'Success',
      message: '92% of cancelled slots refilled in the last 24 hours. Keep momentum with loyalty boosts.',
      tone: 'is-success',
    },
    {
      type: 'Heads up',
      message: 'Clinic downtown has 3 cancellations tomorrow morning. Consider adjusting incentives.',
      tone: 'is-warning',
    },
  ];

  const topCategories = [
    { category: 'Strength & Conditioning', recovered: '$2,940', fillRate: '93%' },
    { category: 'Beauty & Styling', recovered: '$2,115', fillRate: '88%' },
    { category: 'Therapy & Recovery', recovered: '$1,760', fillRate: '82%' },
  ];

  return (
    <section className="section dashboard" aria-labelledby="dashboard-heading">
      <div className="container">
        <div className="mb-6">
          <h1 id="dashboard-heading" className="title has-text-white">
            Operator dashboard (Sample)
          </h1>
          <p className="subtitle has-text-grey-light">
            Track fill rate, revenue recovered, and how quickly Swift Slots matches cancellations with eager members.
          </p>
        </div>

        <div className="columns is-multiline is-variable is-5">
          {kpis.map(({ label, value, delta, description, tone }) => (
            <div key={label} className="column is-12-mobile is-6-tablet is-3-desktop">
              <div className="box dashboard-kpi">
                <p className="is-size-7 has-text-grey-light">{label}</p>
                <p className="title is-3 has-text-white">{value}</p>
                <p className={`tag ${tone} is-light mb-2`}>{delta}</p>
                <p className="is-size-7 has-text-grey-light">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="columns is-variable is-5">
          <div className="column is-12-tablet is-7-desktop">
            <div className="box dashboard-table">
              <h2 className="title is-5 has-text-white">Recent activity</h2>
              <table className="table is-fullwidth is-striped is-hoverable">
                <thead>
                  <tr>
                    <th scope="col">Slot</th>
                    <th scope="col">Member</th>
                    <th scope="col">Revenue</th>
                    <th scope="col">Filled in</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map(({ slot, member, recovered, timeToFill }) => (
                    <tr key={slot}>
                      <td>{slot}</td>
                      <td>{member}</td>
                      <td>{recovered}</td>
                      <td>{timeToFill}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="column is-12-tablet is-5-desktop">
            <div className="box dashboard-alerts">
              <h2 className="title is-5 has-text-white">Alerts</h2>
              {alerts.map(({ type, message, tone }) => (
                <article key={message} className={`message ${tone}`}>
                  <div className="message-header">
                    <p>{type}</p>
                  </div>
                  <div className="message-body has-text-grey-100">{message}</div>
                </article>
              ))}
            </div>
            <div className="box dashboard-categories mt-4">
              <h2 className="title is-6 has-text-white">Top categories by recovered revenue</h2>
              <ul>
                {topCategories.map(({ category, recovered, fillRate }) => (
                  <li key={category} className="category-row">
                    <div>
                      <p className="has-text-white has-text-weight-semibold">{category}</p>
                      <p className="is-size-7 has-text-grey-light">Fill rate {fillRate}</p>
                    </div>
                    <span className="tag is-link is-light">{recovered}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
