import React from 'react'
import './app.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </div>
  )
}

export default App