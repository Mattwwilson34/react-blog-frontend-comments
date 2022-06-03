import './Home.css';
import React from 'react';

const Home = () => {
  return (
    <div className='Home__Container'>
      <h1 className='Home__Title'>Matt Wilson's Blog</h1>
      <p className='Home__IntroText'>
        Hi and welcome, my name is Matt and I am a software developer and
        physical therapist. I am currently working through The Oden Project and
        as a part of their backend series I am building a 3 part blog website.
      </p>
      <hr className='Home__HR'></hr>
      <ul className='Home__List'>
        <li className='Home__ListTitle'>This blog is made up of 3 parts:</li>
        <ul className='Home__SubList'>
          <li className='Home__SubListItem'>
            NodeJS, Express, and MongoDB backend JSON API
          </li>
          <li className='Home__SubListItem'>
            1st React front end for viewing and commenting on blogs
          </li>
          <li className='Home__SubListItem'>
            2nd React front end for creating, publishing, and deleting blogs
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Home;
