import React from 'react'
import { Navbar, Footer } from '../../components'
import '../Podcasts/Podcasts.css' // This page uses the same styles as Podcasts. So if you make any changes to the css of Podcast page, it will get reflected here as well.
import './Vertigo.css'

const Vertigo = () => {
  return (
    <div>
      <Navbar />

      <div className="blog__podcasts-header">
        <h1>VERTIGO</h1>
      </div>

      <div className="blog__podcasts-main">
        <h1>COMING SOON!</h1>
        <h3>Watch this space for further updates.</h3>
      </div>

      <Footer />

    </div>
  )
}

export default Vertigo