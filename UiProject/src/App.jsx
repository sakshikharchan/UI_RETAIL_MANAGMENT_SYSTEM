import React from 'react';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Men from './Component/Men.jsx';
import Women from './Component/Women.jsx'
import Home from './Component/Home.jsx';
<<<<<<< Updated upstream
=======



>>>>>>> Stashed changes
import './App.css';
import Login from './Component/Login.jsx';


function App() {
  return (
    <BrowserRouter>
<<<<<<< Updated upstream

=======
    
>>>>>>> Stashed changes
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
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>

            <NavLink className="nav-link text-light" to="/login">Login</NavLink>
          </div>
        </div>
      </nav>

<<<<<<< Updated upstream

=======
     
>>>>>>> Stashed changes

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<h1 className="text-center mt-4 animate__animated animate__fadeIn">Kids' Fashion</h1>} />
        <Route path="/login" className="login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
