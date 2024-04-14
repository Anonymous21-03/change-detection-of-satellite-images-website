import React, { useState, useEffect } from 'react';
import './Body.css';

const Body = () => {
  // States for image, date, and region functionality
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl1, setImageUrl1] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [displayDates, setDisplayDates] = useState('No dates selected.');

  // Function to display formatted dates
  const displaySelectedDates = () => {
    if (startDate && endDate) {
      const formattedStartDate = new Date(startDate).toLocaleDateString();
      const formattedEndDate = new Date(endDate).toLocaleDateString();
      setDisplayDates(`Selected Dates: ${formattedStartDate} - ${formattedEndDate}`);
    } else {
      setDisplayDates('No dates selected.');
    }
  };

  // Function to fetch image URLs based on dates and region (placeholder)
  const fetchImageUrls = async () => {
    if (startDate && endDate && selectedRegion) {
      // Replace with the actual API call or functionality
      console.log('Fetching image URLs based on dates and region (placeholder)');
      setImageUrl1('https://via.placeholder.com/300x300');
      setImageUrl2('https://via.placeholder.com/300x300');
    } else {
      setImageUrl1(null);
      setImageUrl2(null);
    }
  };

  // Use useEffect to call functions on relevant changes
  useEffect(() => {
    displaySelectedDates();
    fetchImageUrls();
  }, [startDate, endDate, selectedRegion, selectedFile]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div className="body-container">
      <div className="date-region-section">
        <div className="date">
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />
        </div>
        <div className="date">
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
        </div>
        <div className="region">
          <label htmlFor="region">Region:</label>
          <select id="region" value={selectedRegion} onChange={handleRegionChange}>
            <option value="">Select a region</option>
            <option value="region1">Region 1</option>
            <option value="region2">Region 2</option>
            <option value="region3">Region 3</option>
          </select>
        </div>
      </div>
      <p className="display-dates">{displayDates}</p>
      <div className="imageSec">
        <div className="imageDisp">
          {imageUrl1 && <div className="image-container"><img src={imageUrl1} alt="Fetched Image 1" /></div>}
        </div>
        <div className="imageDisp">
          {imageUrl2 && <div className="image-container"><img src={imageUrl2} alt="Fetched Image 2" /></div>}
        </div>
      </div>
    </div>
  );
};

export default Body;