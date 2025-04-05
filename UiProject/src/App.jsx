import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Men from './Component/Men.jsx';


import './App.css';

import Banner from './assets/fash2.png';
import Banner1 from './assets/fash1.jpg';
import Banner2 from './assets/fash3.jpg';




function App() {
  return (
    <BrowserRouter>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
        <div className="container-fluid d-flex justify-content-between align-items-center">

          <div className="d-flex gap-5 align-items-center nav-left">
            <NavLink className="nav-link text-light" to="/">Home</NavLink>
            <NavLink className="nav-link text-light" to="/men">Men</NavLink>
            <NavLink className="nav-link text-light" to="/women">Women</NavLink>
            <NavLink className="nav-link text-light" to="/kids">Kids</NavLink>
          </div>

          <div className="logo-container position-absolute top-50 start-50 translate-middle">
            <NavLink className="zudio-logo navbar-brand fs-3" to="/">ZUDIO</NavLink>
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

      <div id="carouselExampleControls" className="carousel slide mt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner} className="d-block w-100" alt="Fashion Banner 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>New Arrivals</h5>
              <p>Explore the latest fashion trends</p>
            </div>
          </div>



          <div className="carousel-item">
            <img src={Banner1} className="d-block w-100" alt="Fashion Banner 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Trendy Styles</h5>
              <p>Fashion for every season</p>
            </div>
          </div>



          <div className="carousel-item">
            <img src={Banner2} className="d-block w-100" alt="Fashion Banner 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Stylish for All</h5>
              <p>Men, Women, and Kids</p>
            </div>
          </div>
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>

      <div className="text-center py-5 bg-primary text-white">
        <h2 className="display-5">Shop the Latest Styles at Zudio</h2>
        <p>Affordable fashion for Men, Women, and Kids</p>
        <button className="btn btn-light mt-3">Explore Now</button>
      </div>

      <Routes>
        <Route path="/" element={<h1 className="text-center mt-4 animate__animated animate__fadeIn">Welcome to Zudio</h1>} />
        <Route path="/men" element={<h1 className="text-center mt-4 animate__animated animate__fadeIn">Men's Fashion</h1>} />
        <Route path="/women" element={<h1 className="text-center mt-4 animate__animated animate__fadeIn">Women's Fashion</h1>} />
        <Route path="/kids" element={<h1 className="text-center mt-4 animate__animated animate__fadeIn">Kids' Fashion</h1>} />
        <Route path="/login" element={<h1 className="text-center mt-4 animate__animated animate__fadeIn">Login Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
