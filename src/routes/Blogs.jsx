// Import components
import Blog from '../Components/Blog';

// React utilities
import React, { useEffect, useState } from 'react';

export default function Blogs() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    setLoading(true);
    const url = 'http://localhost:8080/blog_post';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  };

  return (
    <main>
      <h1>Blogs</h1>
      {loading ? (
        <div>...Blogs Loading...</div>
      ) : (
        <div className='Blogs__Container'>
          {blogs.map((blog) => {
            return (
              <>
                <Blog blog={blog}></Blog>
                <hr></hr>
              </>
            );
          })}
        </div>
      )}
    </main>
  );
}
