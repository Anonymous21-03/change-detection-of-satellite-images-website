import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Body />
    </div>
  );
};

export default Home;