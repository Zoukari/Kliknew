import React from 'react';
import FallingMoney from './components/FallingMoney';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-hidden relative matrix-bg flex flex-col">
      <FallingMoney />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;