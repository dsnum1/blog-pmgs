import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs2 = ({ blogs }) => {
    return (
      <div className="blog__blogs">
        <div className="blog__blogs-container">
          <div className="blog__blogs-container_grid">



            {blogs?.map((blog) => {
              const { attributes } = blog || {};
              if(!attributes) return null;
  
            const profileImgUrl = attributes.profileImg.src;
            const coverImgUrl = attributes.coverImg.src;
              return (
                <Link to={`/blogs/${blog.id}`} key={blog.id}>
                  <div className="blog__blogs-container_grid-card">
                    <div className="blog__blogs-container_grid-card_top">
                      <div className="profile-img">
                        {profileImgUrl && (
                          <img
                            src={attributes.profileImg.src}
                            alt={attributes.profileImg.imgCaption}
                          />
                        )}
                      </div>
  
                      <div className="blog-info">
                        <h4>{attributes.blogTitle}</h4>
                      </div>
                    </div>
  
                    {coverImgUrl && (
                      <img
                        className="blog__blogs-container_grid-card_img"
                        src={attributes.coverImg.src}
                        alt={attributes.profileImg.imgCaption}
                      />
                    )}
  
                    <div className="blog__blogs-container_grid-card_bottom">
                      <p>{attributes.blogDesc}</p>
                      <div className="blog-date">
                        <p className="bullet-point">{attributes.blogDate}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  
  export default Blogs2;