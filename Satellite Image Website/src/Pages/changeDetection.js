// ChangeDetection.js
import React, { useState } from 'react';
import './changedetection.css';

const ChangeDetection = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedYearLeft, setSelectedYearLeft] = useState('');
  const [selectedYearRight, setSelectedYearRight] = useState('');
  const [imageDataLeft, setImageDataLeft] = useState(null);
  const [imageDataRight, setImageDataRight] = useState(null);

  const years = [2015, 2017];
  const regions = ['Bhatinda', 'Faridkot', 'Ludhiana', 'Moga'];

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleYearChangeLeft = (e) => {
    setSelectedYearLeft(e.target.value);
  };

  const handleYearChangeRight = (e) => {
    setSelectedYearRight(e.target.value);
  };

  const fetchImageData = () => {
    if (selectedRegion && selectedYearLeft) {
      fetch(`/api/images?year=${selectedYearLeft}&region=${selectedRegion.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
          setImageDataLeft(data);
        })
        .catch((error) => {
          console.error('Error fetching image data:', error);
        });
    }

    if (selectedRegion && selectedYearRight) {
      fetch(`/api/images?year=${selectedYearRight}&region=${selectedRegion.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
          setImageDataRight(data);
        })
        .catch((error) => {
          console.error('Error fetching image data:', error);
        });
    }
  };

  return (
    <div className="change-detection-container">
      <h2 className="change-detection-heading">Change Detection</h2>
      <p className="change-detection-description">A short description goes here.</p>
      <div className="input-container">
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Select Region</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <div className="input-section">
          <select value={selectedYearLeft} onChange={handleYearChangeLeft}>
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="input-section">
          <select value={selectedYearRight} onChange={handleYearChangeRight}>
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="image-container">
        <div className="image-wrapper">
          {imageDataLeft ? (
            <img
              src={`data:image/jpeg;base64,${imageDataLeft.imageData}`}
              alt="Satellite Image"
              className="satellite-image"
            />
          ) : (
            <p>No image data available</p>
          )}
        </div>
        <div className="image-wrapper">
          {imageDataRight ? (
            <img
              src={`data:image/jpeg;base64,${imageDataRight.imageData}`}
              alt="Satellite Image"
              className="satellite-image"
            />
          ) : (
            <p>No image data available</p>
          )}
        </div>
      </div>
      <button className="apply-button" onClick={fetchImageData}>
        APPLY
      </button>
    </div>
  );
};

export default ChangeDetection;