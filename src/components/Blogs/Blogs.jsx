import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = ({ blogs }) => {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  console.log("there is somethuing here",process.env.REACT_APP_API_BASE_URL);
  console.log("Here is blog", blogs);

  return (
    <div className="blog__blogs">
      <div className="blog__blogs-container">
        <div className="blog__blogs-container_grid">
          {blogs?.data?.map((blog) => {
            // Check if `attributes` exist
            const { attributes } = blog || {};
            if (!attributes) return null;

            const profileImgUrl = attributes.profileImg?.data?.attributes?.url;
            const coverImgUrl = attributes.coverImg?.data?.[0]?.attributes?.url;

            return (
              <Link to={`/blogs/${blog.id}`} key={blog.id}>
                <div className="blog__blogs-container_grid-card">
                  <div className="blog__blogs-container_grid-card_top">
                    <div className="profile-img">
                      {profileImgUrl && (
                        <img
                          src={`${profileImgUrl}`}
                          alt="profile-picture"
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
                      src={`${coverImgUrl}`}
                      alt="blog-img"
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

export default Blogs;

