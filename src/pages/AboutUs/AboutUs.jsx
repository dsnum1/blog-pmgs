import React from 'react'
import { Navbar, Footer } from '../../components'
import profilePic from '../../assets/profilePic.png'
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="blog__aboutus">
      <Navbar />
      <div className="blog__aboutus-header">
        <h1 >ABOUT US</h1>
      </div>

      <div className="blog__aboutus-content">
        <p>
          Preserving My Good Self (PMGS) is a palpable account of my engagement in preserving my good self. It has sprung up right from the bottom of my heart and homes the reflections of some of my mental, physical and spiritual devotions to pushing myself towards my higher self. You can witness my negotiations with my self-concept as I embrace its amalgamation with the following key themes- Socioculturalism, Digital Media Cultures, Gender, Family, Friendships, Long Distance Relationships, Self Disclosure and more. I construct, deconstruct, reconstruct and co-construct my idiosyncrasies by self-reflecting and in/formally communicating with fellow-passengers who share certain stations of my life-journey. I present all of this in the form of blogs and podcasts. However, I treat this space as a one-stop catalog for everything else I do in aforementioned pursuits. I welcome you with open arms to not only witness my efforts to authentically express my navigation through these themes, but also seek your presence and contributions in turning this project into a socially cohesive, idea-populated space. 
        </p>
      </div>

      <div className="blog__aboutus-main">
        <div className="blog__aboutus-main_heading">
          <h2>ABOUT ME</h2>
        </div>

        <div className="blog__aboutus-main_container">
          <div className="blog__aboutus-main_container-img">
            <img src={profilePic} alt="profile-picture" />
          </div>

          <div className="blog__aboutus-main_container-text">
            <p>
              I am an aspiring digital anthropologist and ethnographer who studies internet ontologies and cultures. I especially like to explore self-curation and relational developments within social media communities. I am currently a doctoral candidate at the University of Technology Sydney’s School of Communication in the Faculty of Arts and Social Sciences. Prior to this, I completed my postgraduate studies in digital communication and culture from the University of Sydney; and undergraduate studies in communications and marketing management from the University at Buffalo, Singapore Institute of Management. 
            </p>
          </div>
        </div>
      </div> 
      <Footer />
    </div>
  )
}

export default AboutUs