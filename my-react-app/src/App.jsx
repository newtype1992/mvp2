import React from 'react';
import './App.css';

function App() {
  return (
    <div className="swift-slots">
      <header className="hero hero-gradient is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered is-variable is-6">
              <div className="column is-12-touch is-6-desktop">
                <span className="tag is-light is-medium mb-4">
                  Last-Minute Cancellation Marketplace
                </span>
                <h1 className="title is-1-tablet is-size-2-mobile has-text-white mb-4">
                  Fill empty appointments in minutes, not days.
                </h1>
                <p className="subtitle has-text-white-bis mb-5">
                  Swift Slots gives gyms, salons, and clinics a real-time channel to
                  rebook last-minute cancellations with nearby customers who are ready to
                  commit.
                </p>
                <div className="buttons">
                  <button className="button is-white is-medium">Join the waitlist</button>
                  <button className="button is-outlined is-light is-medium">
                    See product demo
                  </button>
                </div>
                <ul className="hero-benefits mt-5">
                  <li>📱 Personalized feeds for members looking for their next slot.</li>
                  <li>🚨 Instant alerts for cancellations with dynamic discounts.</li>
                  <li>🧠 Built on existing booking tools you already use.</li>
                </ul>
              </div>
              <div className="column is-12-touch is-6-desktop">
                <div className="floating-card">
                  <div className="card schedule-card">
                    <header className="card-header">
                      <p className="card-header-title">Today&apos;s Swift Slots</p>
                    </header>
                    <div className="card-content">
                      <div className="timeline">
                        <div className="timeline-item">
                          <p className="time">1:00 PM</p>
                          <p className="activity">50% off Deep Tissue Massage</p>
                          <span className="badge">Starting in 45 min</span>
                        </div>
                        <div className="timeline-item">
                          <p className="time">2:15 PM</p>
                          <p className="activity">$29 Power Yoga Drop-in</p>
                          <span className="badge is-success">Watched studio</span>
                        </div>
                        <div className="timeline-item">
                          <p className="time">3:30 PM</p>
                          <p className="activity">40% off Haircut + Style</p>
                          <span className="badge is-warning">New in your area</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="floating-badge has-text-centered">
                    <p className="title is-4 mb-0">92%</p>
                    <p className="is-size-7">of cancelled slots refilled in 20 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section feature-section">
        <div className="container">
          <div className="columns is-multiline is-variable is-5">
            <div className="column is-12-touch is-one-third-desktop">
              <div className="box highlight">
                <span className="icon is-large">⚡</span>
                <h3 className="title is-4">Realtime marketplace</h3>
                <p>
                  Cancellations automatically appear in user feeds within seconds, ensuring
                  the window to rebook never closes.
                </p>
              </div>
            </div>
            <div className="column is-12-touch is-one-third-desktop">
              <div className="box highlight">
                <span className="icon is-large">📍</span>
                <h3 className="title is-4">Hyper-local discovery</h3>
                <p>
                  Customers see offers from businesses in their neighborhood, filtered by
                  interests like yoga, facials, or dental cleanings.
                </p>
              </div>
            </div>
            <div className="column is-12-touch is-one-third-desktop">
              <div className="box highlight">
                <span className="icon is-large">🤝</span>
                <h3 className="title is-4">Retention for operators</h3>
                <p>
                  Keep schedules full and customers loyal with smart discounts and
                  automated follow-up messaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section how-it-works">
        <div className="container">
          <h2 className="title is-3 has-text-centered">How Swift Slots works</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h4 className="title is-5">Set your preferences</h4>
              <p>
                Users pick categories they care about—like massages, pilates, or whitening
                treatments—and choose how far they&apos;re willing to travel.
              </p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4 className="title is-5">Sync business calendars</h4>
              <p>
                Swift Slots connects with Fresha, MindBody, JaneApp, Calendly, and more to
                surface openings the moment a cancellation happens.
              </p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4 className="title is-5">Notify and rebook instantly</h4>
              <p>
                The marketplace alerts nearby members. Slots include countdown timers and
                dynamic pricing to drive immediate bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section business-benefits">
        <div className="container">
          <div className="columns is-vcentered is-variable is-6">
            <div className="column is-12-touch is-5-desktop">
              <h2 className="title is-3">Why operators love Swift Slots</h2>
              <p className="mb-4">
                Last-minute cancellations cost billions. Swift Slots turns those empty
                chairs into new revenue while keeping regulars engaged.
              </p>
              <ul className="benefit-list">
                <li>📊 Dashboard insights on rebooked revenue and fill rates.</li>
                <li>🔔 Push notifications and SMS for favorite customers.</li>
                <li>🧾 Automated receipts and reminders reduce future no-shows.</li>
              </ul>
            </div>
            <div className="column is-12-touch is-7-desktop">
              <div className="card business-card">
                <div className="card-content">
                  <h3 className="title is-4">Business model</h3>
                  <p>
                    Simple pricing keeps incentives aligned—only pay when we earn you
                    money.
                  </p>
                  <div className="columns is-variable is-4 mt-4">
                    <div className="column">
                      <div className="pricing-pill">
                        <h4 className="title is-5">10-15% commission</h4>
                        <p>Only on successfully rebooked slots.</p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="pricing-pill">
                        <h4 className="title is-5">Pro subscription</h4>
                        <p>Unlock analytics, team seats, and premium placement.</p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="pricing-pill">
                        <h4 className="title is-5">Exit strategy</h4>
                        <p>Built to partner or sell to ClassPass, MindBody, or Fresha.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section callouts">
        <div className="container">
          <div className="columns is-multiline is-variable is-5">
            <div className="column is-12-touch is-half-desktop">
              <div className="box accent">
                <h3 className="title is-4">Prototype ready</h3>
                <p>
                  Explore the Swift Slots experience right now with the interactive demo
                  on Bolt.new, complete with cancellation flows and instant notifications.
                </p>
              </div>
            </div>
            <div className="column is-12-touch is-half-desktop">
              <div className="box accent">
                <h3 className="title is-4">Build it your way</h3>
                <p>
                  Grab the original build prompt or fork the prototype to create a custom
                  version tailored to your market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container has-text-centered">
          <h2 className="title is-3">Ready to keep your schedule full?</h2>
          <p className="subtitle">
            Join the Swift Slots beta to reduce no-shows, surprise loyal customers, and
            prove out a high-growth marketplace ready for acquisition.
          </p>
          <div className="buttons is-centered">
            <button className="button is-primary is-medium">Request early access</button>
            <button className="button is-light is-medium">Talk to sales</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Swift Slots — turning last-minute cancellations into loyal customers. Built for
            local service businesses and the platforms that power them.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
