import React from 'react';
import HomeCarousel from './Carousel';
import '../App.css';

function Home() {
  return (
    <div>
      <HomeCarousel />
      <h3 className='slogan'>The Best Version of You</h3>
      <h1 className='title-top'>A L C H E M Y</h1>
      <h1 className='title-bottom'>A L C H E M Y</h1>
    </div>
  );
}

export default Home;