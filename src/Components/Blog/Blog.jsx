// Utilities
import React from 'react';

// Components
import Comment from '../Comment';
import CommentForm from '../CommentForm';

// Style Sheets
import './Blog.css';

const Blog = (props) => {
  // Destructure blog_post
  const { _id: blogId, title, text, published, comments, author } = props.blog;
  // Destructure author
  const { _id: authorId, first_name, last_name, email } = author;

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
          {/* New comment form */}
          <CommentForm blogId={blogId} authorId={authorId} />
          {/* Blog comments */}
          <div className='Comment__Wrapper'>
            {comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
