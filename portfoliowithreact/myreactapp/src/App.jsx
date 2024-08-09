import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
   <div className="container">
  <div className="header">
    <a href=""><img src="../src/img/header-logo.svg" alt="" /></a>
    <div className="btn-first"><a href="#">Free Consultation</a></div>
  </div>

  <div className="header-content">
    <h1>Design solutions made easy</h1>
    <p>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.
    </p>
  </div>
  <div className="grid-container">
    <div className="item bg-purple">
      <img src="../src/img/purple-pic.svg" alt="" />
      <p>Graphic Design</p>
    </div>
    <div className="mini-item bg-orange">
      <img src="../src/img/orange-pic.svg" alt="" />
      <p>UI/UX</p>
    </div>
    <div className="mini-item bg-pink">
      <img src="../src/img/pink-pic.svg" alt="" />
      <p>Apps</p>
    </div>
    <div className="item bg-green">
      <img src="../src/img/green-pic.svg" alt="" />
      <p>Photography</p>
    </div>
    <div className="item bg-peachy">
      <img src="../src/img/peachy-pic.svg" alt="" />
      <p>Illustrations</p>
    </div>
    <div className="item bg-darkpurple">
      <img src="../src/img/dark-purple-pic.svg" alt="" />
      <p>Motion Graphics</p>
    </div>
  </div>
  <div className="img-container">
    <img src="../src/img/girl.png" alt="" />
    <div className="img-container-content">
      <h2>I’m Amy, and I’d love to work on your next project</h2>
      <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand
        illustrations to complete mobile apps. I’m also handy with a camera!</p>
      <div className="btn-second"><a href="#">Free Consultation</a></div>
    </div>
  </div>
  <div className="footer-content">
    <div className="footer-text">
      <h2>Book a call with me</h2>
      <p>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project
        during a free consultation. Then we can move forward from there.</p>
    </div>
    <div className="btn-second"><a href="#">Free Consultation</a></div>
  </div>
  <div className="header">
    <a href=""><img src="../src/img/header-logo.svg" alt="" /></a>
    <div className="btn-first"><a href="#">Free Consultation</a></div>
  </div>
</div>

      
  
    </>
  )
}

export default App
