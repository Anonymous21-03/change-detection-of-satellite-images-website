// ChangeDetection.js
import React, { useState } from 'react';
import './changedetection.css';

const ChangeDetection = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [imageData, setImageData] = useState(null);

  const years = [2015, 2017];
  const regions = ['Bathinda', 'Faridkot', 'Ludhiana', 'Moga'];

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const fetchImageData = () => {
    // Make a fetch call to your server to retrieve the image data
    fetch(`/api/images?year=${selectedYear}&region=${selectedRegion.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setImageData(data);
      })
      .catch((error) => {
        console.error('Error fetching image data:', error);
      });
  };

  return (
    <div className="change-detection-container">
      <h2 className="change-detection">Change Detection</h2>
      <div className="description">
        {/* ... */}
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
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button onClick={fetchImageData}>APPLY</button>
      </div>
      <div className="image-container">
        {imageData ? (
          <img src={`data:image/jpeg;base64,${imageData.imageData}`} alt="Satellite Image" className="satellite-image" />
        ) : (
          <p>No image data available</p>
        )}
      </div>
      <div className="changedetection-result">
        {/* ... */}
      </div>
    </div>
  );
};

export default ChangeDetection;