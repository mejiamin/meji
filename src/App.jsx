import React from 'react'
import Headroom from 'react-headroom'
import './App.css'
import { Navbar } from './components'
import { Contact, Target, Skills, Projects } from './containers'

function App() {

  return (
    <div className="app">
      {/* <div className="scroll-watcher"></div> */}
      <Navbar />
      <Contact />
      <Skills />
      <Target />
      <Projects />
    </div>
  )
}

export default App
