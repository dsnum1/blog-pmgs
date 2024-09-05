import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Research, Publications, Blogs, BlogContentPage, Podcasts, AboutUs, NoPage } from './pages'
import useFetch from '../src/hooks/useFetch'
import useScrollToTop from './hooks/useScrollToTop'
import './App.css';

const App = () => {
  useScrollToTop();


  let {loading, error, data} = useFetch('https://excellent-acoustics-7fc6bf831a.strapiapp.com/api/blogs?populate=*')

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error</p>
  
  return (
    <div>
      <Routes> 
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/blogs" element={<Blogs blogs={data?data:""} />} />
        <Route path="/blogs/:id" element={<BlogContentPage blogs={data?data:""} />}  />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default App
