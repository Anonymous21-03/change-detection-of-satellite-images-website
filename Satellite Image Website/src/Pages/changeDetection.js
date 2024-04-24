// ChangeDetection.js
import React from 'react';
import './changedetection.css';

const ChangeDetection = () => {
  return (
    <div className="change-detection-container">
      <h2 className="change-detection"> Change Detection</h2>
      <div className="description">
        <p>
        The landscape of the Earth is continuously changing. Change Detection methods in remote sensing and GIS are based on finding discrepencies in two satellite images over a period of time or after a particular event. Change detection algorithms for GIS compare the spatial representation of two points in time and measure differences in the variables of interest.
        </p>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Place" />
        <input type="date" placeholder="Date 1:" />
        <input type="date" placeholder="Date 2: " />
        <button>APPLY</button>
      </div>
      <div className="image-container">
        <img src="https://miro.medium.com/v2/resize:fit:1200/1*RUp-cifSLIi13Qzk5l0OfA.png" alt="Satellite Image" className="satellite-image" />
      </div>
      <div className="changedetection-result">
        <p>As can be seen, the area of Ludhiana has changed drastically over the course of 2 years. The white shaded areas show all the changes that were observed from the two satellite images.</p>
      </div>
    </div>
  );
};

export default ChangeDetection;