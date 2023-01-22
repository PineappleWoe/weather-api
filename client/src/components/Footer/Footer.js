import React from 'react';
import { Github } from 'react-bootstrap-icons';

// Stylesheet
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer p-4 text-center'>
      <div className='footer-copyright flex items-center p-4'>
        <p className='px-1'>Copyright {'\u00a9'} {new Date().getFullYear()} Jordan Tate</p>
        <a href="https://github.com/JordanTate/" target="_blank" rel='noreferrer' className='px-1'>
          <Github className='github text-3xl duration-200 ease-linear' />
        </a>
      </div>
    </footer>
  );
};
 
export default Footer;