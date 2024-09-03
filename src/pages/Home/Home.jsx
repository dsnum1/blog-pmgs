import React from 'react'
import { Navbar, Footer } from '../../components'
import Hero from './sections/Hero/Hero'
import Main from './sections/Main/Main'
import './Home.css'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </main>
  )
}

export default Home