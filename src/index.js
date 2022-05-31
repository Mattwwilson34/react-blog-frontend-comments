import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './Components/App';

// Routes
import BlogsIndex from './routes/BlogsIndex';
import Blog from './routes/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/blog_posts' element={<BlogsIndex />}></Route>
        <Route path='/blog_posts/:blogId' element={<Blog />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  /* </React.StrictMode> */
);
