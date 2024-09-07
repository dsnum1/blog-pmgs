import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Research, Publications, Blogs, BlogContentPage, Podcasts, AboutUs, NoPage, Vertigo } from './pages'
import useFetch from '../src/hooks/useFetch'
import useScrollToTop from './hooks/useScrollToTop'
import { useEffect, useState } from 'react'
import './App.css';


const importAll = (r) => {
  return r.keys().map(r);
};





const App = () => {
  useScrollToTop();


  let {loading, error, data} = useFetch('https://excellent-acoustics-7fc6bf831a.strapiapp.com/api/blogs?populate=*')

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error</p>
  


  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const context = require.context('./blog_content', true, /\.json$/);
      const blogFiles = importAll(context);
      // console.log('Blog files:', blogFiles); // Debugging log

      const blogPosts = blogFiles.map((file, index) => {
        // console.log('File:', file);
        return { ...file };
      });

      // console.log('Blog posts:', blogPosts); // Debugging log
      blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(blogPosts);
    };
    fetchPosts();
  }, []);

  // console.log("posts", posts);

  return (
    <div>
      <Routes> 
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/blogs" element={<Blogs blogs={posts?posts:""} />} />
        <Route path="/blogs/:id" element={<BlogContentPage blogs={posts?posts:""} />}  />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/vertigo" element={<Vertigo />} /> */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default App
