import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Icons
import { List } from 'react-bootstrap-icons';

// Stylesheet
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav max-w-full w-full p-4 z-10">
      <div className="nav-bar relative max-w-xs mx-auto">
        <ul className={`nav-list ${isOpen ? 'show' : ''} fixed top-0 -right-full md:static flex flex-col md:flex-row justify-center w-full max-w-xs min-h-screen md:min-h-0 text-center bg-white md:bg-transparent`}>
          <li className="nav-list-item relative py-2 mx-2 mb-8 md:mb-2 text-2xl text-slate-800 font-light italic">
            <Link to="/" className="nav-link block w-full">Home</Link>
          </li>
          <li className="nav-list-item relative py-2 mx-2 mb-8 md:mb-2 text-2xl text-slate-800 font-light italic">
            <Link to="/about" className="nav-link block w-full">About</Link>
          </li>
        </ul>
      </div>
      <button className={`responsive-menu fixed top-2 right-2 md:hidden text-4xl ${isOpen ? 'close-btn' : ''}`} onClick={() => setIsOpen(!isOpen)}><List /></button>
    </nav>
  );
};
 
export default Nav;

