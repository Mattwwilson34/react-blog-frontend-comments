// Import components
import Blog from '../Components/Blog';

// React utilities
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Blogs() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  const { blogId } = useParams();
  const blogURL = `http://localhost:8080/blog_post/${blogId}`;

  useEffect(() => {
    fetchBlog(blogURL);
  }, [blogURL]);

  const fetchBlog = (blogURL) => {
    fetch(blogURL)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      });
  };

  return (
    <main>
      {loading ? (
        <div>...Blog Loading...</div>
      ) : (
        <div className='Blog__Container'>
          <Blog blog={blog}></Blog>
        </div>
      )}
    </main>
  );
}
