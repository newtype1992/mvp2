import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Overlay from './Overlay';
import useLockBodyScroll from '../hooks/useLockBodyScroll';

const NavBar = ({
  isLanding,
  activeSection,
  onAnchorClick,
  primaryCtaLabel,
  secondaryCtaLabel,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const burgerRef = useRef(null);
  const dropdownTimeout = useRef(null);

  useLockBodyScroll(isSidebarOpen);

  const navLinks = useMemo(
    () => [
      { id: 'hero', label: 'Overview', type: 'section' },
      { id: 'social-proof', label: 'Social Proof', type: 'section' },
      { id: 'user-value', label: 'For Members', type: 'section' },
      { id: 'business-value', label: 'For Operators', type: 'section' },
      { id: 'features', label: 'Features', type: 'section' },
      { id: 'flow', label: 'Product Flow', type: 'section' },
      { id: 'comparison', label: 'Outcomes', type: 'section' },
      { id: 'pricing', label: 'Pricing', type: 'section' },
      { id: 'faq', label: 'FAQ', type: 'section' },
      { id: 'dashboard', label: 'Dashboard', type: 'route', path: '/dashboard' },
    ],
    [],
  );

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const desktopNav = useMemo(
    () => [
      { type: 'section', id: 'hero', label: 'Overview' },
      {
        type: 'dropdown',
        id: 'solutions',
        label: 'Solutions',
        items: [
          { type: 'section', id: 'social-proof', label: 'Social proof' },
          { type: 'section', id: 'user-value', label: 'For members' },
          { type: 'section', id: 'business-value', label: 'For operators' },
        ],
      },
      {
        type: 'dropdown',
        id: 'platform',
        label: 'Platform',
        items: [
          { type: 'section', id: 'features', label: 'Features' },
          { type: 'section', id: 'flow', label: 'Product flow' },
          { type: 'section', id: 'comparison', label: 'Outcomes' },
          { type: 'section', id: 'pricing', label: 'Pricing' },
        ],
      },
      { type: 'section', id: 'faq', label: 'FAQ' },
      { type: 'route', id: 'dashboard-nav', label: 'Dashboard', path: '/dashboard' },
    ],
    [],
  );

  const handleSection = (id) => {
    onAnchorClick?.(id);
  };

  const handleRoute = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  const handleLink = (link) => {
    if (link.type === 'section') {
      handleSection(link.id);
    } else if (link.type === 'route' && link.path) {
      handleRoute(link.path);
    }
  };

  const goToTalkToSales = () => {
    if (location.pathname !== '/talk-to-sales') {
      navigate('/talk-to-sales');
    }
  };

  const handleSidebarNavigate = (link) => {
    closeSidebar();
    window.setTimeout(() => handleLink(link), 0);
  };

  const talkToSales = () => {
    closeSidebar();
    goToTalkToSales();
  };

  const showDropdown = (id) => {
    if (dropdownTimeout.current) {
      window.clearTimeout(dropdownTimeout.current);
    }
    setOpenDropdown(id);
  };

  const scheduleCloseDropdown = () => {
    if (dropdownTimeout.current) {
      window.clearTimeout(dropdownTimeout.current);
    }
    dropdownTimeout.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  };

  const toggleDropdown = (id) => {
    if (dropdownTimeout.current) {
      window.clearTimeout(dropdownTimeout.current);
    }
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  const isGroupActive = (item) => {
    if (!item.items) return false;
    return item.items.some((child) => isLinkActive(child));
  };

  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(
    () => () => {
      if (dropdownTimeout.current) {
        window.clearTimeout(dropdownTimeout.current);
      }
    },
    [],
  );

  const isLinkActive = (link) => {
    if (link.type === 'section') {
      return isLanding && activeSection === link.id;
    }
    if (link.type === 'route') {
      return location.pathname === link.path;
    }
    return false;
  };

  return (
    <header className="swift-navbar-wrapper">
      <nav className="navbar swift-navbar is-fixed-top" role="navigation" aria-label="Main navigation">
        <div className="container swift-navbar__inner">
          <Link className="navbar-brand-link" to="/" aria-label="Swift Slots home">
            Swift Slots
          </Link>

          <div className="swift-navbar__links" role="navigation" aria-label="Primary site links">
            <ul className="swift-navbar__list">
              {desktopNav.map((item) => {
                if (item.type === 'dropdown') {
                  const open = openDropdown === item.id;
                  const active = isGroupActive(item);
                  return (
                    <li
                      key={item.id}
                      className={`swift-navbar__item has-dropdown ${open ? 'is-open' : ''} ${active ? 'is-active' : ''}`}
                      onMouseEnter={() => showDropdown(item.id)}
                      onMouseLeave={scheduleCloseDropdown}
                      onFocusCapture={() => showDropdown(item.id)}
                      onBlurCapture={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) {
                          scheduleCloseDropdown();
                        }
                      }}
                    >
                      <button
                        type="button"
                        className="swift-navbar__link swift-navbar__link--parent"
                        aria-haspopup="true"
                        aria-expanded={open}
                        onClick={() => toggleDropdown(item.id)}
                      >
                        {item.label}
                        <span className={`swift-navbar__chevron ${open ? 'is-open' : ''}`} aria-hidden="true">
                          ▾
                        </span>
                      </button>
                      <ul className={`swift-navbar__dropdown ${open ? 'is-open' : ''}`}>
                        {item.items.map((child) => {
                          const childActive = isLinkActive(child);
                          if (child.type === 'route' && child.path) {
                          return (
                            <li key={child.id}>
                              <Link
                                to={child.path}
                                className={`swift-navbar__dropdown-link ${childActive ? 'is-active' : ''}`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                          }
                          return (
                            <li key={child.id}>
                              <button
                                type="button"
                                className={`swift-navbar__dropdown-link ${childActive ? 'is-active' : ''}`}
                                onClick={() => {
                                  setOpenDropdown(null);
                                  handleLink(child);
                                }}
                                aria-current={childActive ? 'page' : undefined}
                              >
                                {child.label}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }

                const active = isLinkActive(item);
                const className = `swift-navbar__link ${active ? 'is-active' : ''}`;

                if (item.type === 'section') {
                  return (
                    <li key={item.id} className="swift-navbar__item">
                      <button
                        type="button"
                        className={className}
                        onClick={() => handleLink(item)}
                        aria-current={active ? 'page' : undefined}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={item.id} className="swift-navbar__item">
                    <Link to={item.path} className={className} aria-current={active ? 'page' : undefined}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="swift-navbar__cta">
            {secondaryCtaLabel ? (
              <button
                type="button"
                className="button is-text swift-navbar__secondary"
                onClick={() => handleSection('features')}
              >
                {secondaryCtaLabel}
              </button>
            ) : null}
            <button
              type="button"
              className="button is-primary swift-navbar__cta-button"
              onClick={talkToSales}
            >
              {primaryCtaLabel}
            </button>
          </div>

          <div className="navbar-burger-wrapper">
            <button
              ref={burgerRef}
              type="button"
              className={`navbar-burger ${isSidebarOpen ? 'is-active' : ''}`}
              aria-label="Open navigation menu"
              aria-controls="swift-sidebar"
              aria-expanded={isSidebarOpen}
              onClick={toggleSidebar}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <Overlay isOpen={isSidebarOpen} onClick={closeSidebar} />

      <Sidebar
        id="swift-sidebar"
        isOpen={isSidebarOpen}
        navLinks={navLinks}
        onNavigate={handleSidebarNavigate}
        onClose={closeSidebar}
        ctaLabel={primaryCtaLabel}
        onCtaClick={goToTalkToSales}
        currentPath={location.pathname}
        isLanding={isLanding}
        activeSection={activeSection}
        returnFocusRef={burgerRef}
      />
    </header>
  );
};

export default NavBar;
