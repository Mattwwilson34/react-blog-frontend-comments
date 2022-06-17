import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Style sheets
import './index.css';

// Components
import App from './Components/App';

// Routes
import HomeRoute from './routes/Home';
import BlogsIndex from './routes/BlogsIndex';
import Blog from './routes/Blog';
import Login from './routes/Login';
import Logout from './routes/Logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<HomeRoute />}></Route>
        <Route path='/blog_posts' element={<BlogsIndex />}></Route>
        <Route path='/blog_posts/:blogId' element={<Blog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  /* </React.StrictMode> */
);
