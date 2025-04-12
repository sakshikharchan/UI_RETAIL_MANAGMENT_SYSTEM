import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Men from './Component/Men.jsx';
import Women from './Component/Women.jsx';
import Kids from './Component/Kids.jsx';
import Home from './Component/Home.jsx';
import Login from './Component/Login.jsx';
import NewUser from './Component/NewUser.jsx';
import ManagerDashBoard from './ManagerDashBoard.jsx';  
import './App.css';


const isAuthenticated = () => {
    // Add your authentication logic here
    // For now, let's simulate authentication with a hardcoded value
    return sessionStorage.getItem('auth') === 'true';
};

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <NavLink className="zudio-logo navbar-brand fs-3" to="/">ZUDIO</NavLink>
                    <div className="d-flex gap-5 align-items-center nav-left">
                        <NavLink 
                            className={({ isActive }) => isActive ? "nav-link text-warning" : "nav-link text-light"} 
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            className={({ isActive }) => isActive ? "nav-link text-warning" : "nav-link text-light"} 
                            to="/men"
                        >
                            Men
                        </NavLink>
                        <NavLink 
                            className={({ isActive }) => isActive ? "nav-link text-warning" : "nav-link text-light"} 
                            to="/women"
                        >
                            Women
                        </NavLink>
                        <NavLink 
                            className={({ isActive }) => isActive ? "nav-link text-warning" : "nav-link text-light"} 
                            to="/kids"
                        >
                            Kids
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


      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/manager" element={<ManagerDashBoard />} />

      </Routes> */}
    </BrowserRouter>
  );

}

export default App;
