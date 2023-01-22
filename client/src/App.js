import React from 'react';

// Stylesheet
import './App.css';

// Components
import Nav from './components/Nav/Nav';
import Weather from './pages/Weather';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="app flex flex-col justify-between items-center min-h-screen bg-gradient-to-br from-orange-200 via-sky-200  to-violet-400 backdrop-blur-3xl">
      <Nav />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;