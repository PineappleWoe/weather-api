import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheet
import './Nav.css';

const Nav = () => {

  return (
    <nav className="nav relative max-w-full p-4">
      <div className="nav-bar max-w-5xl mx-auto">
        <ul className="nav-list  flex justify-center text-center">
          <li className="nav-list-item relative mx-2 mb-2 text-2xl text-slate-800 font-light italic">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-list-item relative mx-2 mb-2 text-2xl text-slate-800 font-light italic">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
 
export default Nav;

