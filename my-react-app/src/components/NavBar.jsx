import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = ({
  isLanding,
  activeSection,
  onAnchorClick,
  primaryCtaLabel,
  secondaryCtaLabel,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const sectionLinks = useMemo(
    () => [
      { id: 'hero', label: 'Overview' },
      { id: 'social-proof', label: 'Social Proof' },
      { id: 'user-value', label: 'For Members' },
      { id: 'business-value', label: 'For Operators' },
      { id: 'features', label: 'Features' },
      { id: 'flow', label: 'Product Flow' },
      { id: 'comparison', label: 'Outcomes' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'faq', label: 'FAQ' },
    ],
    [],
  );

  const isActiveSection = (id) => isLanding && activeSection === id;

  const handleAnchor = (id) => {
    if (!onAnchorClick) return;
    setMenuOpen(false);
    onAnchorClick(id);
  };

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="navbar is-dark is-fixed-top swift-navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item has-text-weight-semibold" to="/" onClick={() => setMenuOpen(false)}>
            Swift Slots
          </Link>
          <button
            type="button"
            className={`navbar-burger ${menuOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            {sectionLinks.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={`navbar-item button-reset ${isActiveSection(id) ? 'is-active' : ''}`}
                onClick={() => handleAnchor(id)}
                aria-current={isActiveSection(id) ? 'page' : undefined}
              >
                {label}
              </button>
            ))}
            <button
              type="button"
              className={`navbar-item button-reset ${location.pathname === '/dashboard' ? 'is-active' : ''}`}
              onClick={() => handleNavigate('/dashboard')}
            >
              Dashboard
            </button>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button
                  type="button"
                  className="button is-text has-text-weight-semibold"
                  onClick={() => handleAnchor('features')}
                >
                  {secondaryCtaLabel}
                </button>
                <button
                  type="button"
                  className="button is-primary has-text-weight-semibold"
                  onClick={() => handleNavigate('/talk-to-sales')}
                >
                  {primaryCtaLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
