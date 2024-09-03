import React from 'react'
import logo_updated from '../../../../assets/logo_updated.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className="blog__hero">
      <div className="blog__hero-img">
        <img src={logo_updated} alt="logo" />
      </div>

      <div className="blog__hero-text">
        <h1>PRESERVING <br /> MY GOOD SELF</h1>
        <h2>frisking through the bad</h2>

        <h4>By Sanskriti Satyakam</h4>
      </div>
    </div>
  )
}

export default Hero