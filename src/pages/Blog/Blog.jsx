import React from 'react'
import { Navbar, Blogs, Blogs2, Footer } from '../../components'
import './Blog.css'
import { useState, useEffect } from 'react';


const Blog = ({blogs}) => {
  return (
    <div>
      <Navbar />

      <div className="blog__blogs-intro"> 
        <h1>BLOGS</h1>
      </div>

      <div className="blog__blogs-text">
        <p>
        As a woman of color, I am aware of my sociocultural positioning and therefore consider gender and race as the overriding premises of not only my research, but often my other writing pieces as well.
        </p>
        <p>
        And I feel deeply about many other subjects that may be unassociated with what I have asserted are the major segments of PMGS. Stray animals, work-life balance, bullying culture, philosophical interpretations of everydayness are a few among many such subjects. 
        </p>
        <p>
        These blogs are deeply personal accounts of my engagements with the aforementioned themes that I have mostly produced as reflective writings.
        </p>
      </div>
      <Blogs2 blogs={blogs} />
      <Footer />
    </div>
  )
}
export default Blog