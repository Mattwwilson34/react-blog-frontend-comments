// Import components
import BlogThumbnail from '../Components/BlogThumbnail';
import { List } from 'react-content-loader';

// Style Sheets
import '../index.css';

// React utilities
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Blogs() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    setLoading(true);
    const url = 'http://localhost:8080/blog_posts';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1 className='Blogs__Title'>Blogs</h1>
      <hr className='Blogs_HR'></hr>
      {loading ? (
        <div className='Blogs__LoadingContainer'>
          <List />
          <List />
          <List />
          <List />
        </div>
      ) : (
        <div className='Blogs__Container'>
          {blogs.map((blog) => {
            return (
              <div key={blog._id}>
                <BlogThumbnail blog={blog}></BlogThumbnail>
                <hr></hr>
              </div>
            );
          })}
        </div>
      )}
      <Outlet />
    </div>
  );
}
