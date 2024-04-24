import React, { useState, useEffect } from 'react';
import './styles/ErrorMessage.css';

const ErrorMessage = ({ message, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onClose();
      }, 3000); // Hide the error message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return show ? (
    <div className="error-message-container">
      <div className="error-message-box">
        <span>{message}</span>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  ) : null;
};

export default ErrorMessage;