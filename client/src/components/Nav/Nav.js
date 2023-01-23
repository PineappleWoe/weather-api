import React, { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Icons
import { List } from 'react-bootstrap-icons';

// Stylesheet
import './Nav.css';

// Hooks
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Mobile Nav
  const closeNav = () => {
    setIsOpen(false);
  };

  // Handle Outside Click to close Nav
  const ref = useRef();
  useOnClickOutside(ref, isOpen, setIsOpen);

  return (
    <nav className="nav max-w-full w-full p-4 z-10">
      <div ref={ref} className="nav-bar relative max-w-xs mx-auto">
        <ul className={`nav-list ${isOpen ? 'show' : ''} fixed top-0 -right-full md:static flex flex-col md:flex-row justify-center w-full max-w-xs min-h-screen md:min-h-0 text-center bg-white md:bg-transparent`}>
          <li className="nav-list-item relative py-2 mx-2 mb-8 md:mb-2 text-2xl text-slate-800 font-light italic">
            <Link to="/" onClick={closeNav} className="nav-link block w-full">Home</Link>
          </li>
          <li className="nav-list-item relative py-2 mx-2 mb-8 md:mb-2 text-2xl text-slate-800 font-light italic">
            <Link to="/about" onClick={closeNav} className="nav-link block w-full">About</Link>
          </li>
        </ul>
        <button className={`responsive-menu fixed top-2 right-2 md:hidden text-4xl ${isOpen ? 'close-btn' : ''}`} onClick={() => setIsOpen(!isOpen)}><List /></button>
      </div>
    </nav>
  );
};
 
export default Nav;

