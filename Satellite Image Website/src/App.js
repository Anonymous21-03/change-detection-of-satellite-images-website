import React from 'react';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  const { handleLogin } = Navbar();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;