import React from 'react'
import { Navbar, Footer } from '../../components'
import './Podcasts.css'

const Podcasts = () => {
  return (
    <div>
      <Navbar />

      <div className="blog__podcasts-header">
        <h1>PODCASTS</h1>
      </div>

      <div className="blog__podcasts-main">
        <h1>COMING SOON!</h1>
        <h3>Watch this space for further updates.</h3>
      </div>

      <Footer />

    </div>
  )
}

export default Podcasts