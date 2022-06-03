// Utils
import React, { useState } from 'react';
import chalk from 'chalk';

// Style sheets
import './CommentForm.css';

const CommentForm = (props) => {
  // State
  const [comment, setComment] = useState('');

  // Props
  const { blogId, authorId } = props;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: comment,
        author: authorId,
        date_published: new Date(),
        blog_post: blogId,
      }),
    };
    const response = await fetch(
      'http://localhost:8080/comment',
      requestOptions
    );
    const data = await response.json();
    console.log(chalk.bgGreen(data));
    // Reload page
    window.location.reload();
  };

  const handleCommentChange = (e) => setComment(e.target.value);

  return (
    <form className='CommentForm' onSubmit={handleSubmit}>
      <label htmlFor='comment'></label>
      <textarea
        id='comment'
        className='CommentForm__TextArea'
        name='comment'
        value={comment}
        onChange={handleCommentChange}
        placeholder='Add your comment here'
      />
      <input className='CommentForm__Submit' type='submit' value='Submit' />
    </form>
  );
};

export default CommentForm;
