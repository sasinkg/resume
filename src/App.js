import React, { useState } from 'react';
import ProfessionalPage from './components/ProfessionalPage';
import CreativePage from './components/CreativePage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');

  if (currentPage === 'creative') {
    return <CreativePage setCurrentPage={setCurrentPage} />;
  }

  return <ProfessionalPage setCurrentPage={setCurrentPage} />;
};

export default App;
