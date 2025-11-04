import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Landing from './pages/Landing';
import TalkToSales from './pages/TalkToSales';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [toasts, setToasts] = useState([]);
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = useRef({});
  const location = useLocation();
  const navigate = useNavigate();

  const registerSection = useCallback((id, node) => {
    if (node) {
      sectionRefs.current[id] = node;
    }
  }, []);

  const unregisterSection = useCallback((id) => {
    delete sectionRefs.current[id];
  }, []);

  const scrollToSection = useCallback((id) => {
    const node = sectionRefs.current[id];
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    ({ message, type = 'is-success', duration = 4000 }) => {
      if (!message) return;
      const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      setToasts((prev) => [...prev, { id, message, type }]);

      if (duration > 0) {
        window.setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast],
  );

  const handleAnchorClick = useCallback(
    (sectionId) => {
      if (!sectionId) return;
      if (location.pathname !== '/') {
        navigate(`/?section=${sectionId}`);
        return;
      }

      scrollToSection(sectionId);
    },
    [location.pathname, navigate, scrollToSection],
  );

  useEffect(() => {
    if (location.pathname === '/') {
      const params = new URLSearchParams(location.search);
      const target = params.get('section');
      if (target) {
        window.setTimeout(() => {
          scrollToSection(target);
        }, 150);
        navigate('/', { replace: true });
      }
    }
  }, [location, navigate, scrollToSection]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isLanding = location.pathname === '/';

  return (
    <div className="app-shell has-background-dark text-default">
      <NavBar
        isLanding={isLanding}
        activeSection={isLanding ? activeSection : ''}
        onAnchorClick={handleAnchorClick}
        primaryCtaLabel="Talk to Sales"
        secondaryCtaLabel="View Features"
      />
      <Toast toasts={toasts} onDismiss={removeToast} />
      <main id="main-content" className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                registerSection={registerSection}
                unregisterSection={unregisterSection}
                onSectionChange={setActiveSection}
              />
            }
          />
          <Route path="/talk-to-sales" element={<TalkToSales addToast={addToast} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
