import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBeer, FaUpload, FaHome, FaQuestionCircle } from 'react-icons/fa';
import { FaCodeCompare } from 'react-icons/fa6';
import { AiOutlineUser, AiOutlineLogin } from 'react-icons/ai'; // Added icons for Sign Up and Sign In

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) { // Adjust threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    return () => window.removeEventListener('scroll', null); // Cleanup
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        {/* Replace with your logo image if needed */}
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
          <FaUpload /> Upload
        </li>
        <li className="compare">
          <FaCodeCompare /> Compare
        </li>
      </ul>
      <ul className="right-options">
        <li className="signup">
        <Link to="/register">
          <AiOutlineUser /> Sign Up</Link>
        </li>
        <li className="signin">
        <Link to="/Login">
          <AiOutlineLogin /> Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
