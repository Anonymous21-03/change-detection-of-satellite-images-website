
// LandCoverClassificationPage.js
import React from 'react';
import './landcover.css';

const LandCoverClassificationPage = () => {
  return (
    <div className="land-cover-container">
      <h2 className="land-cover"> Land Cover Classification</h2>
      <div className="description">
        <p>
          The surface of the Earth is divided into various aspects and assemblies of land. The classification of this land into various classes is called land cover classification. The classes may include water, snow, grassland, forest, roads etc. Land Cover Classification is one of the most crucial steps for the processing of satellite data.
        </p>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Place" />
        <input type="date" placeholder="Date" />
        <button>APPLY</button>
      </div>
      <div className="image-container">
        <img src="https://i.pinimg.com/474x/ff/87/d3/ff87d32036927f7769ec23a0abfb6b71.jpg" alt="Satellite Image" className="satellite-image" />
      </div>
      <div className="classification-result">
        <p>The area has displayed the following classes:</p>
        <ul>
          <li>1. Houses - 20%</li>
          <li>2. Roads - 15%</li>
          <li>3. Dense buildings - 60%</li>
          <li>4. Urban Colony - 5%</li>
        </ul>
        <p>It can be deduced from the image that the area of Ludhiana, Punjab, shows the above classes and hence can be classified as a developing city.</p>
      </div>
    </div>
  );
};

export default LandCoverClassificationPage;