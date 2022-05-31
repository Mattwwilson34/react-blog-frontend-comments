import './Blog.css';
import React from 'react';

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
          <div>
            {comments.map((comment) => {
              console.log(comment);
              /* TODO Extract Comment into own component with set styles */
              return (
                <div key={comment._id}>
                  <div>{comment.author.username}</div>
                  <div>{comment.text}</div>
                  <div>
                    {comment.date_yyyy_mm_dd} at {comment.time_hour_min}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
