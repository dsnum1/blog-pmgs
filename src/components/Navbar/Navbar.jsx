import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import './Navbar.css'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (

    <nav className="blog__navbar">
      <div className="blog__navbar-logo">
        <h2 className="blog__navbar-logo_text">PMGS</h2>
      </div>

      <ul className="blog__navbar-links">
        <li>
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/research" className="nav-link">Research</Link>
        </li>
        <li>
          <Link to="/publications" className="nav-link">Publications</Link>
        </li>
        <li>
          <Link to="/blogs" className="nav-link">Blogs</Link>
        </li>
        <li>
          <Link to="/podcasts" className="nav-link">Podcasts</Link>
        </li>
        <li>
          <Link to="/aboutus" className="nav-link">About us</Link>
        </li>
      </ul>

      <div className="blog__navbar-toggleMenu">
        <AiOutlineMenu style={{cursor: 'pointer'}} color="ECEBF6" fontSize={40} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="blog__navbar-close">
              <IoCloseOutline color="ECEBF6" className="toggle__close" onClick={() => setToggleMenu(false)} />
              <ul className="blog__navbar-toggleMenu_links">
                <li><Link to="/home" className="nav-link">Home</Link></li>
                <li><Link to="/research" className="nav-link">Research</Link></li>
                <li><Link to="/publications" className="nav-link">Publications</Link></li>
                <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
                <li><Link to="/podcasts" className="nav-link">Podcasts</Link></li>
                <li><Link to="/aboutus" className="nav-link">About us</Link></li>
              </ul>
            </div>
          )}
      </div>
    </nav>
  )
}

export default Navbar