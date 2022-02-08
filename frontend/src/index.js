import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup';
import Logout from './components/Logout/Logout';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Context from './components/Context/Context';
import SingleProduct from './components/SingleProduct/SingleProduct';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Context><Home /></Context>} />
      <Route path="/login" element={<Context><Login /></Context>} />
      <Route path="/logout" element={<Context><Logout /></Context>} />
      <Route path="/signup" element={<Context><Signup /></Context>} />
      <Route path="/product/:uuid" element={<Context><SingleProduct /></Context>} />
      <Route path="*" element={<>404 NOT FOUND</>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
