import React from 'react'
import './styles/tailwind.css'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Intro from './components/Intro.jsx'
import Timeline from './components/Timeline.jsx'


function App() {

  return (
    <div>
      <Intro />
      <About />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App