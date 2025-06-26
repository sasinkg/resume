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
    
    // Wait for spiral animation to complete
    setTimeout(() => {
      setCurrentPage(newPage);
      // Keep transition active briefly to show the new page emerging
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 800);
  };

  return (
    <ThemeProvider>
      {/* Main content */}
      <div className={`transition-all duration-500 ${isTransitioning ? 'filter blur-sm scale-105' : ''}`}>
        {currentPage === 'creative' ? (
          <CreativePage setCurrentPage={handlePageTransition} />
        ) : (
          <ProfessionalPage setCurrentPage={handlePageTransition} />
        )}
      </div>

      {/* Spiral transition overlay */}
      <PageTransition 
        isActive={isTransitioning} 
        direction={transitionDirection}
      />
    </ThemeProvider>
  );
};

export default App;