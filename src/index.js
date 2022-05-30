import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './Components/App';

// Routes
import Blogs from './routes/Blogs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/blogs' element={<Blogs />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
