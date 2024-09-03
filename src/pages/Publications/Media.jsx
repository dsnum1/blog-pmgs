import React from 'react'
import './Media.css'

const Media = ({ title, text, url }) => {
  return (
    <div className="blog__media">
        <h2 className="blog__media-heading">
            <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        </h2>
        <p>{text}</p>
    </div>
  )
}

export default Media