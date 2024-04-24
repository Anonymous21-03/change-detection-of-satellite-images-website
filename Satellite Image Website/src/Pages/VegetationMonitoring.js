// VegetationMonitoring.js
import React from 'react';
import './vegetationmonitoring.css';

const VegetationMonitoring = () => {
  return (
    <div className="vegetation-monitoring-container">
      <h2 className="vegetation-monitoring"> Vegetation Monitoring</h2>
      <div className="description">
        <p>
        Remote sensing technique provides a powerful systematic tool to monitor, map and model the different vegetation cover and provides a precise and accurate road map for many aspects. Band ratioing extracts vegetation from heterogeneous surface features and reduces the spectral biasness also.ding discrepencies in two satellite images over a period of time or after a particular event. Change detection algorithms for GIS compare the spatial representation of two points in time and measure differences in the variables of interest.
        </p>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Place" />
        <input type="date" placeholder="Date" />
        <button>APPLY</button>
      </div>
      <div className="image-container">
        <img src="https://www.researchgate.net/publication/349429657/figure/fig2/AS:992907880325121@1613739094057/Normalized-difference-vegetation-index-NDVI-images-generated-from-Landsat-8-cloud-free.jpg" alt="Satellite Image" className="satellite-image" />
      </div>
      <div className="vegetationmonitoring-result">
        <p>The NDVI of the region ranges from -0.087 to 0.4652 with an average value of 0.27625. A healthy vegetation NDVI ranges from 0 to 0.8. Hence, the region has a relatively healthy vegetation cover.</p>
      </div>
    </div>
  );
};

export default VegetationMonitoring;