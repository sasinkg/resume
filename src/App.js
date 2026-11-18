import React, { useCallback, useEffect, useRef, useState } from 'react';
import ProfessionalPage from './components/ProfessionalPage';
import CreativePage from './components/CreativePage';
import PageTransition from './components/PageTransition';
import { ThemeProvider } from './contexts/ThemeContext';

const pageFromLocation = () =>
  window.location.pathname.replace(/\/+$/, '') === '/creative' ? 'creative' : 'main';

const App = () => {
  const [currentPage, setCurrentPage] = useState(pageFromLocation);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(null);
  const destination = useRef(currentPage);
  const timers = useRef([]);

  const transitionTo = useCallback((newPage) => {
    if (newPage === destination.current) return;

    timers.current.forEach(window.clearTimeout);
    destination.current = newPage;
    setTransitionDirection(newPage);
    setIsTransitioning(true);

    timers.current = [window.setTimeout(() => {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'instant' });
      timers.current.push(window.setTimeout(() => setIsTransitioning(false), 180));
    }, 340)];
  }, []);

  const handlePageTransition = (newPage) => {
    const path = newPage === 'creative' ? '/creative' : '/';
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    transitionTo(newPage);
  };

  useEffect(() => {
    const onPopState = () => transitionTo(pageFromLocation());
    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      timers.current.forEach(window.clearTimeout);
    };
  }, [transitionTo]);

  return (
    <ThemeProvider>
      <div className={`mode-content ${isTransitioning ? 'is-transitioning' : ''}`}>
        {currentPage === 'creative' ? (
          <CreativePage setCurrentPage={handlePageTransition} />
        ) : (
          <ProfessionalPage setCurrentPage={handlePageTransition} />
        )}
      </div>
      <PageTransition isActive={isTransitioning} direction={transitionDirection} />
    </ThemeProvider>
  );
};

export default App;
