import React from 'react';
  import { Carousel } from 'react-responsive-carousel';
  import 'react-responsive-carousel/lib/styles/carousel.min.css';
  import image2 from '../images/image2.jpeg';
  import image3 from '../images/image3.jpeg';
  import image4 from '../images/image4.jpeg';
  import image8 from '../images/image8.jpeg';
  import './Carousel.css'; 
  
  
  function HomeCarousel() {
    return (
      <div className="carousel-container">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2000} 
          transitionTime={500} 
          transitionTimingFunction="ease-in-out"
          showIndicators={false} 
          showArrows={false} 
        >
          <div>
            <img src={image2} alt="Image 2" />
          </div>
          <div>
            <img src={image3} alt="Image 3" />
          </div>
          <div>
            <img src={image8} alt="Image 8" />
          </div>
          <div>
            <img src={image4} alt="Image 4" />
          </div>
          <div>
            <img src={image2} alt="Image 2" />
          </div>
          <div>
            <img src={image3} alt="Image 3" />
          </div>
          <div>
            <img src={image8} alt="Image 8" />
          </div>
          <div>
            <img src={image4} alt="Image 4" />
          </div>
          <div>
            <img src={image2} alt="Image 2" />
          </div>
          <div>
            <img src={image3} alt="Image 3" />
          </div>
          <div>
            <img src={image8} alt="Image 8" />
          </div>
          <div>
            <img src={image4} alt="Image 4" />
          </div>l
          <div>
            <img src={image8} alt="Image 8" />
          </div>
          <div>
            <img src={image4} alt="Image 4" />
          </div>
          <div>
            <img src={image2} alt="Image 2" />
          </div>
          <div>
            <img src={image3} alt="Image 3" />
          </div>
          <div>
            <img src={image8} alt="Image 8" />
          </div>
          <div>
            <img src={image4} alt="Image 4" />
          </div>
      </Carousel>
      </div>
    );
  }
  
  export default HomeCarousel;
  