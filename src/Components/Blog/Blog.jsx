import './Blog.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = (props) => {
  const { title, text, url, formatted_date_published, author } = props.blog;
  console.log(url);
  return (
    <NavLink className='Blog__NavLink' to={url}>
      <div className='Blog'>
        <h2 className='Blog__Title'>{title}</h2>
        <span className='Blog__Author'>
          Author: {author.first_name} {author.last_name}
        </span>
        <p className='Blog__Text'>{text}</p>
        <div className='Blog__Published'>
          Published: {formatted_date_published}
        </div>
      </div>
    </NavLink>
  );
};

export default Blog;
