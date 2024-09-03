import React from 'react'
import { TiSocialLinkedin,TiSocialInstagram } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { TbMessageCircle } from "react-icons/tb";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="blog__footer">
        <div className="blog__footer-section">
            <h2>Get In Touch</h2>
            <div className="blog__footer-section-icons">
                <a href="https://www.instagram.com/preservingmygoodself/" target="_blank" rel="noopener noreferrer">
                    <TiSocialInstagram className="instagram-icon" />
                </a>
                <a href="https://www.linkedin.com/in/sanskritisatyakam/" target="_blank" rel="noopener noreferrer">
                    <TiSocialLinkedin className="linkedin-icon" />
                </a>
                <a href="https://www.youtube.com/@preservingmygoodself" target="_blank" rel="noopener noreferrer">
                    <CiYoutube className="youtube-icon" />
                </a>
                <a href="mailto:preservingmygoodself@gmail.com" target="_blank" rel="noopener noreferrer">
                    <TbMessageCircle className="message-icon" />
                </a>
            </div>
        </div>

        <p className="blog__footer-copyrights">&copy; {new Date().getFullYear()} PMGS. All rights reserved.</p>
    </footer>
  )
}

export default Footer