// VegetationMonitoring.js
import React, { useState } from 'react';
import './vegetationmonitoring.css';

const VegetationMonitoring = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [imageData, setImageData] = useState(null);
  const [imageExtension, setImageExtension] = useState(null);

  const regions = ['Firozpur', 'mandi', 'Bhatinda', 'Chandpura', 'Ludhiana', 'Moga'];

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const fetchImageData = () => {
    if (selectedRegion) {
      fetch(`/api/images?region=${selectedRegion.toLowerCase().replace(/\s/g, '')}`)
        .then((response) => response.json())
        .then((data) => {
          setImageData(data.imageData);
          setImageExtension(data.extension);
        })
        .catch((error) => {
          console.error('Error fetching image data:', error);
        });
    }
  };

  return (
    <div className="vegetation-monitoring-container">
      <h2 className="vegetation-monitoring">Vegetation Monitoring</h2>
      <div className="description">
        <p>
          Remote sensing technique provides a powerful systematic tool to monitor, map and model the different vegetation cover and provides a precise and accurate road map for many aspects. Band ratioing extracts vegetation from heterogeneous surface features and reduces the spectral biasness also.ding discrepencies in two satellite images over a period of time or after a particular event. Change detection algorithms for GIS compare the spatial representation of two points in time and measure differences in the variables of interest.
        </p>
      </div>
      <div className="input-container">
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Select Region</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <button onClick={fetchImageData}>APPLY</button>
      </div>
      <div className="image-container">
        {imageData ? (
          <img
            src={`data:image/${imageExtension};base64,${imageData}`}
            alt="Satellite Image"
            className="satellite-image"
          />
        ) : (
          <p>No image data available</p>
        )}
      </div>
      <div className="vegetationmonitoring-result">
        <p>The NDVI of the region ranges from -0.087 to 0.4652 with an average value of 0.27625. A healthy vegetation NDVI ranges from 0 to 0.8. Hence, the region has a relatively healthy vegetation cover.</p>
      </div>
    </div>
  );
};

export default VegetationMonitoring;