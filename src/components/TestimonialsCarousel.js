import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// AVATARS IMPORTS
import avatar1 from '../images/avatars/avatar-1.png';
import avatar2 from '../images/avatars/avatar-2.png';
import avatar3 from '../images/avatars/avatar-3.png';
import avatar4 from '../images/avatars/avatar-4.png';

const TestimonialsCarousel = () => {
  return (
    <Carousel 
    showArrows={true} 
    infiniteLoop={true} 
    showThumbs={false} 
    showStatus={false}
    autoPlay={true}
    interval={2000}
    >
      <>
        <img src={avatar1} alt="John Doe 1" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam dicta et! Quis sint consequatur
            eligendi amet in iure cum!
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jane Doe 1" />
        <div className="myCarousel">
          <h3>Jane Doe 1</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam dicta et! Quis sint consequatur
            eligendi amet in iure cum!
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe 3" />
        <div className="myCarousel">
          <h3>John Doe 3</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam dicta et! Quis sint consequatur
            eligendi amet in iure cum!
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John Doe 4" />
        <div className="myCarousel">
          <h3>John Doe 4</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam dicta et! Quis sint consequatur
            eligendi amet in iure cum!
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
