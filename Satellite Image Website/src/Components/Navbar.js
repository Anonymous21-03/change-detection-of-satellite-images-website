import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBeer, FaUpload, FaHome, FaQuestionCircle } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineLogin } from 'react-icons/ai';

const Navbar = ({ isLoggedIn, username, handleLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/logo.jpeg" alt="logo" />
      </div>
      <ul className="mid-options">
        <li className="home">
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li className="about">
          <Link to="/about">
            <FaQuestionCircle /> About
          </Link>
        </li>
        <li className="upload">
        <Link to="/contact">
          <FaUpload /> Contact</Link>
        </li>
        <li className="features">
          {/* Replace FaCodeCompare with desired icon */}
          <FaBeer /> Features
          <ul className="features-dropdown">
            <li>
              <Link to="/LandCoverClassificationPage">Land Cover Classification</Link>
            </li>
            <li>
              <Link to="/LandCoverClassificationPage">Change Detection</Link>
            </li>
            <li>
              <Link to="/LandCoverClassificationPage">Vegetation Monitoring</Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="right-options">
        {isLoggedIn ? (
          <li className="user-info">
            <div className="username">
              {username}
              <span className="arrow-down"></span>
            </div>
            <div className="dropdown-menu">
              <Link to="/profile">Profile</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </div>
          </li>
        ) : (
          <>
            <li className="signup">
              <Link to="/register">
                <AiOutlineUser /> Sign Up
              </Link>
            </li>
            <li className="signin">
              <Link to="/Login">
                <AiOutlineLogin /> Sign In
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
