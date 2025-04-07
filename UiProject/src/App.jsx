import React from 'react';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Men from './Component/Men.jsx';
import Women from './Component/Women.jsx';
import Kids from './Component/Kids.jsx';
import Home from './Component/Home.jsx';
import './App.css';
import Login from './Component/Login.jsx';



function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <NavLink className="zudio-logo navbar-brand fs-3" to="/">ZUDIO</NavLink>
          <div className="d-flex gap-5 align-items-center nav-left">
            <NavLink className="nav-link text-light" to="/">Home</NavLink>
            <NavLink className="nav-link text-light" to="/men">Men</NavLink>
            <NavLink className="nav-link text-light" to="/women">Women</NavLink>
            <NavLink className="nav-link text-light" to="/kids">Kids</NavLink>
          </div>


          <div className="d-flex align-items-center gap-3 nav-right">
            <form className="d-flex">
            <div className="search-bar">
         <input type="text" placeholder="Search here..." />
        <button type="submit">🔍</button>
          </div>

             
            </form>

            <NavLink className="nav-link text-light" to="/login">Login</NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/login" className="login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
