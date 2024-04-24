import React, { useState } from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import LandCoverClassificationPage from './Pages/LandCoverClassificationPage'

function App () {
  const [isLoggedIn, setIsLoggeFdIn] = useState(false)
  const [username, setUsername] = useState('')

  const handleLogin = user => {
    setIsLoggedIn(true)
    setUsername(user.username)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
  }

  return (
    <BrowserRouter>
      <Navbar
        isLoggedIn={isLoggedIn}
        username={username}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/landcover' element={<LandCoverClassificationPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Login' element={<Login handleLogin={handleLogin} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
