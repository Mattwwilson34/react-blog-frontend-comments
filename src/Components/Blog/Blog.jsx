import './Blog.css';
import React from 'react';
import Comment from '../Comment';

const Blog = (props) => {
  // Destructure blog_post
  const { title, text, published, comments, author } = props.blog;

  // Destructure author
  const { first_name, last_name, email } = author;

  return (
    <>
      {!props.blog ? (
        <div>...Blog Loading...</div>
      ) : (
        <div>
          <h1>{title}</h1>
          <span>Published: {published ? 'true' : 'false'}</span>
          <div>
            Author: {first_name} {last_name} ({email})
          </div>
          <p>{text}</p>
          <div className='Comment__Wrapper'>
            {comments.map((comment) => {
              console.log(comment);
              return <Comment comment={comment} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
