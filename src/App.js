import React, { useState } from 'react';
import ProfessionalPage from './components/ProfessionalPage';
import CreativePage from './components/CreativePage';
import PageTransition from './components/PageTransition';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(null);

  const handlePageTransition = (newPage) => {
    if (newPage === currentPage) return;
    
    setTransitionDirection(newPage);
    setIsTransitioning(true);
    
    // Swap pages at the midpoint of the soft crossfade.
    setTimeout(() => {
      setCurrentPage(newPage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 180);
    }, 340);
  };

  return (
    <ThemeProvider>
      {/* Main content */}
      <div className={`mode-content ${isTransitioning ? 'is-transitioning' : ''}`}>
        {currentPage === 'creative' ? (
          <CreativePage setCurrentPage={handlePageTransition} />
        ) : (
          <ProfessionalPage setCurrentPage={handlePageTransition} />
        )}
      </div>

      <PageTransition 
        isActive={isTransitioning} 
        direction={transitionDirection}
      />
    </ThemeProvider>
  );
};

export default App;
