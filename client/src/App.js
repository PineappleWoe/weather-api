import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Stylesheet
import './App.css';

// Components
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

// Pages
import Weather from './pages/Weather';
import About from './pages/About';
import NotFound from './pages/404';

function App() {

  return (
    <div className="app flex flex-col justify-between items-center min-h-screen bg-gradient-to-br from-orange-200 via-sky-200 to-violet-400">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path ='/' element={<Weather />} />
          <Route exact path ='/about' element={<About />} />
          <Route path ='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;