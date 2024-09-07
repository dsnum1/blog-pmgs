import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './BlogContent.css'

const BlogContent2 = ({ blogs}) => {
const { id } = useParams();
  let blog={}
  if (blog) {
    let arr = blogs.filter(blog => blog.id.toString() === id)
    blog = arr[0]
  } else {
    blog={}
  }

  return (
    <div>
      <div className="blog__blogcontent-heading">
        <h1>{blog.attributes.blogTitle}</h1>
        <h3>{blog.attributes.authorName}</h3>
      </div>

      <div className="blog__blogcontent-main">
        <img src={blog.attributes.coverImg.src} alt="blog-coverImg" />
        <p className="image-caption">{blog.attributes.coverImg.imgCaption}</p>

        <div className="blog__blogcontent-main_text">
          {blog.attributes.blogContent.map((paragraph, index) => (
            <p key={index}>
              {paragraph.children.map((child, childIndex) => (
                <ReactMarkdown key={childIndex}>{child.text}</ReactMarkdown>
              ))}
            </p>
          ))}
        </div>
      </div>

    </div>
  )
}

export default BlogContent2;