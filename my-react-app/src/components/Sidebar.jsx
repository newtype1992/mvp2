import React, { useEffect, useRef } from 'react';

const focusableSelectors =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const Sidebar = ({
  id = 'swift-sidebar',
  isOpen,
  navLinks,
  onNavigate,
  onClose,
  ctaLabel,
  onCtaClick,
  currentPath,
  isLanding,
  activeSection,
  returnFocusRef,
}) => {
  const drawerRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    previouslyFocused.current = document.activeElement;
    const drawer = drawerRef.current;
    if (!drawer) return undefined;

    const focusable = drawer.querySelectorAll(focusableSelectors);
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    firstFocusable?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || focusable.length === 0) {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable?.focus();
        }
      } else if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (returnFocusRef?.current) {
        returnFocusRef.current.focus();
      } else {
        previouslyFocused.current?.focus?.();
      }
    };
  }, [isOpen, onClose, returnFocusRef]);

  const handleNavigate = (link) => {
    if (!onNavigate) return;
    onNavigate(link);
  };

  const isLinkActive = (link) => {
    if (link.type === 'section') {
      return isLanding && activeSection === link.id;
    }
    if (link.type === 'route') {
      return currentPath === link.path;
    }
    return false;
  };

  return (
    <aside
      id={id}
      ref={drawerRef}
      className={`sidebar-drawer ${isOpen ? 'is-active' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      aria-hidden={isOpen ? 'false' : 'true'}
      tabIndex={-1}
    >
      <div className="sidebar-header">
        <p id={`${id}-title`} className="title is-5 has-text-white mb-0">
          Navigation
        </p>
        <button
          type="button"
          className="button is-dark is-inverted is-small"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <nav className="sidebar-nav" aria-label="Mobile primary navigation">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                className={`sidebar-link ${isLinkActive(link) ? 'is-active' : ''}`}
                onClick={() => handleNavigate(link)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button
          type="button"
          className="button is-primary is-medium is-fullwidth"
          onClick={() => {
            onClose();
            onCtaClick?.();
          }}
        >
          {ctaLabel}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
