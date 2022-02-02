import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
