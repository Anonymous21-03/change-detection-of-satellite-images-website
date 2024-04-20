import React from 'react';
import './styles/About.css';

const Body = () => {
  return (
    <div className="container">
      {/* Content for the container goes here (optional) */}
      <div className="about_us_head">About Us</div>
      <div className="subhead">Unlocking Earth's Insights: Satellite Image Analysis Made Easy</div>
      <div className="mainbod">
        <div className="image-container left">
          <img src="doodle.jpeg" alt="About Us" />
        </div>
        {/* <div className='module'>Change detection</div> */}
        <div className="text-container">
          <p>
            We are a group of enthusiasts driven by a shared fascination with the potential of satellite image analysis.
            Witnessing the impact of relevant global issue - e.g., climate change, we became passionate about leveraging
            this technology to monitor environmental changes. This website showcases our project, which offers
            functionalities for change detection in satellite imagery and land cover classification. We believe this can
            be a valuable tool for researchers, environmental organizations, etc.
          </p>
        </div>
      </div>
      <div className="subhead">The Features we provide</div>
      <div className="mainbod">
        {/* <div className='module'>Change detection</div> */}
        <div className="text-container">
          <div className="feature-name">Change detection</div>
        </div>
        <div className="image-container right">
          <img src="doodle.jpeg" alt="About Us" />
        </div>
      </div>
      <div className="mainbod">
        {/* <div className='module'>Change detection</div> */}
        <div className="image-container left">
          <img src="doodle.jpeg" alt="About Us" />
        </div>
        <div className="text-container">
          <div className="feature-name">Land cover Classification</div>
        </div>
      </div>
      <div className="mainbod">
        {/* <div className='module'>Change detection</div> */}
        <div className="text-container">
          <div className="feature-name">Vegetation Monitoring</div>
        </div>
        <div className="image-container right">
          <img src="doodle.jpeg" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default Body;