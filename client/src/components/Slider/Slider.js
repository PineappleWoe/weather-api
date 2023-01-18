import React from 'react';

// Stylesheet
import './Slider.css';

// Blazer Slider Imports
import { useBlazeSlider } from 'react-blaze-slider';
import 'blaze-slider/dist/blaze.css';

const Slider = ({RenderedComponent, items}) => {

  const elRef = useBlazeSlider({
    all: {
      loop: false,
      slidesToShow: 'totalSlides'
    },
    '(max-width: 1200px)': {
      slidesToShow: 4,
    },
    '(max-width: 1024px)': {
      slidesToShow: 3,
    },
    '(max-width: 576px)': {
      slidesToShow: 2,
    }
  });

  return (
    <div className="blaze-slider" ref={elRef}>
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">
            {items.map(item => {
              return <RenderedComponent key={item.id} forecast={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Slider;

