// Contact.js
import React from 'react';
import './styles/Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: "40vh",
    width: "100%"
  };
  const defaultCenter = {
    lat: 28.629161060841433, // Replace with your desired latitude
    lng: 77.37569359572339 // Replace with your desired longitude
  };

  // 28.629161060841433, 77.37569359572339

  const handleGetDirections = () => {
    const destination = `${defaultCenter.lat},${defaultCenter.lng}`;
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
        <button className="get-directions-btn" onClick={handleGetDirections}>
          Get Directions
        </button>
      </GoogleMap>
    </LoadScript>
  );
};

const Contact = () => {
  return (
    <>
    <section className="hero d-flex align-items-center justify-content-center">
  <div className="video-wrap">
    <video autoPlay playsInline loop muted id="video-bg">
      <source src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4" type="video/mp4" />
      <source src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4" type="video/mp4" />
    </video>
  </div>
  <div className="position-absolute w-100 gradient-overlay"></div>
  <div className="hero-content">
    <h1 className="hero-title blend">
      Contact Us
      <br />
      
    </h1>
  </div>
</section>
      {/* <div className='contact-container'>
        <div className='pattern-overlay'>
          <h1 className='contact-heading'>
            <span>Contact Us</span>
          </h1>
        </div>
      </div> */}
      <div className='contact-section'>
        <div className='left-section'>
          <div className='book'>
            <div className='cover'>
              <p>Contact Us</p>
            </div>
            <div className='contact-info'>
              <div>
                <FaMapMarkerAlt />  
                123 Main Street 
                City, State 12345
              </div>
              <div>
                <FaPhoneAlt />  
                (123) 456-7890
              </div>
              <div>
                <FaEnvelope />  
                info@example.com
              </div>
              <div>
                <FaClock />
                Monday - Friday: 9 AM - 6 PM 
                Saturday: 10 AM - 4 PM 
                Sunday: Closed
              </div>
            </div>
          </div>
        </div>
        <div className='right-section'>
          <MapContainer />
        </div>
      </div>
    </>
  );
};

export default Contact;