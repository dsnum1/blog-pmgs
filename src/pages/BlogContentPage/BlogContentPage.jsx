import React from 'react'
import { Navbar, BlogContent, BlogContent2, Footer } from '../../components'

const BlogContentPage = ({blogs}) => {

  return (
    <div>
        <Navbar />
        <BlogContent2 blogs={blogs} />
        <Footer />
    </div>
  )
}

export default BlogContentPage