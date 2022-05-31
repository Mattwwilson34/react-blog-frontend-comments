import './BlogThumbnail.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogThumbnail = (props) => {
  const { title, text, url, formatted_date_published, author } = props.blog;
  return (
    <NavLink className='BlogThumbnail__NavLink' to={url}>
      <div className='BlogThumbnail'>
        <h2 className='BlogThumbnail__Title'>{title}</h2>
        <span className='BlogThumbnail__Author'>
          Author: {author.first_name} {author.last_name}
        </span>
        <p className='BlogThumbnail__Text'>{text}</p>
        <div className='BlogThumbnail__Published'>
          Published: {formatted_date_published}
        </div>
      </div>
    </NavLink>
  );
};

export default BlogThumbnail;
