import React from 'react';

// Stylesheet
import './About.css';

// Assets
import ReactSVG from '../assets/react.svg';
import TailwindSVG from '../assets/tailwind.svg';
import NodeSVG from '../assets/node.svg';

const About = () => {
  return (
    <div className='about p-4'>
      <div className='max-w-2xl h-full text-center bg-slate-50 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden'>
        <div className='p-4'>
          <h1 className='text-2xl mb-4'>About this Project</h1>
          <p>This Weather App is my first fully finished project designed using the following:</p>
        </div>
        <div className='text-white bg-gradient-to-b md:bg-gradient-to-r from-cyan-800 via-cyan-700 to-emerald-400'>
          <div className='flex flex-col md:flex-row justify-around items-center max-w-lg p-2 mx-auto'>
            <div>
              <img src={ReactSVG} alt="React" className='infinite-rotate w-32 h-32'/>
              <p>ReactJS</p>
            </div>
            <div>
              <img src={TailwindSVG} alt="Tailwind CSS" className='h-32 w-32' />
              <p>Tailwind CSS</p>
            </div>
            <div>
              <img src={NodeSVG} alt="Node.js" className='h-32 w-32' />
              <p>Node.js</p>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <p className='mb-4'>
            Currently the first ReactJS project I&apos;ve got invested in, rather than doing little learning exercises. 
            I wanted to push on what I&apos;ve learnt and put those skills to work in order to improve upon them.
          </p>
          <p className='mb-4'>
            Started of by asking ChatGPT for some criteria to meet for Weather App, without giving any examples, and then attempted to meet each criteria for functionality. 
            The only point I didn&apos;t complete was adding User Authentication to enable saving specific Locations, but since I&apos;ve done a couple versions of this in other projects, decided against adding it.
          </p>
          <p className='mb-4'>
            With this project, I hope to demonstrate that I have at least a basic understanding of the above technologies, as well as others like;
            <strong>
              &nbsp;React Router
            </strong>,
            <strong>
              &nbsp;Express.js
            </strong>, and 
            <strong>
              &nbsp;Blaze Slider
            </strong>.
          </p>
          <p className='mb-4'>
            Currently looking for feedback on my ReactJS code, so I&apos;m more than happy to hear any tips!
          </p>
          <hr className='mb-4 border-black'/>
          <small>
            You can find a link to my GitHub at the bottom of the page.
          </small>
        </div>
      </div>
    </div>
  );
};
 
export default About;