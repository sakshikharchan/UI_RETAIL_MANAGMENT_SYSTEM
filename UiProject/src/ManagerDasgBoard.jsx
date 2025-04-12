import react from "react";  
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Men from './Component/Men.jsx';

import Home from './Component/Home.jsx';

import NewUser from './Component/NewUser.jsx';
import './App.css';
let ManagerDashBoard = () => {

return(<>
 <h1>Hi I am  ManagerDashBoard</h1>


 {/* <BrowserRouter> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <NavLink className="zudio-logo navbar-brand fs-3" to="/">ZUDIO</NavLink>
          <div className="d-flex gap-5 align-items-center nav-left">
            <NavLink 
              className={({ isActive }) => isActive ? "nav-link text-warning" : "nav-link text-light"} 
              to="/">
              Home
            </NavLink>
          
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
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/newuser" element={<NewUser />} />

      </Routes>
    {/* </BrowserRouter> */}
</>)

}
export default ManagerDashBoard;