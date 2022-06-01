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
        <div className='Blog'>
          <h1 className='Blog_title'>{title}</h1>
          <div className='Blog__Author'>
            Author: {first_name} {last_name} ({email})
          </div>
          <div className='Blog__Published'>
            Published: {published ? 'true' : 'false'}
          </div>
          <p className='Blog__Text'>{text}</p>
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
