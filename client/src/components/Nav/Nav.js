import React from 'react';

const Nav = () => {
  return (
    <nav className="nav max-w-full p-4">
      <div className="nav-bar max-w-5xl mx-auto">
        <ul className="nav-list flex justify-center text-center">
          <li className="nav-list-item mb-2 text-2xl text-slate-800 font-light italic">
            <a href="/" className="nav-link hover:underline">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
 
export default Nav;

