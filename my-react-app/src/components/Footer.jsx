import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer has-background-black-bis has-text-grey-light">
    <div className="container">
      <div className="columns is-variable is-6 is-multiline">
        <div className="column is-12-tablet is-4-desktop">
          <h3 className="title is-5 has-text-white">Swift Slots</h3>
          <p>
            Swift Slots is the real-time marketplace that refills cancelled appointments across fitness, beauty,
            and wellness providers in minutes.
          </p>
          <div className="mt-4 is-flex is-align-items-center gap-sm">
            <span className="tag is-primary is-light">hello@swiftslots.com</span>
          </div>
        </div>
        <div className="column is-6-tablet is-4-desktop">
          <h4 className="title is-6 has-text-white">Explore</h4>
          <ul className="footer-links">
            <li>
              <Link to="/dashboard">Operator Dashboard</Link>
            </li>
            <li>
              <Link to="/talk-to-sales">Talk to Sales</Link>
            </li>
            <li>
              <button type="button" className="button-reset footer-anchor" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Back to top
              </button>
            </li>
          </ul>
        </div>
        <div className="column is-6-tablet is-4-desktop">
          <h4 className="title is-6 has-text-white">Legal</h4>
          <ul className="footer-links">
            <li>
              <a href="/privacy" aria-label="Privacy policy placeholder">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="/terms" aria-label="Terms of service placeholder">
                Terms of service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="has-text-centered has-text-grey mt-5">
        © {new Date().getFullYear()} Swift Slots. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
