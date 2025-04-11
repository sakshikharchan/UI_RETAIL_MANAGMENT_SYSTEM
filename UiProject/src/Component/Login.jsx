import React from "react";
import { Link, Outlet } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
let Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      axios.post('http://localhost:8080/login', { userName, password })
        .then((res) => {
          const redirect = res.data;
  
          if (redirect.includes('admin')) navigate('/admin/dashboard');
          else if (redirect.includes('manager')) navigate('/manager/dashboard');
          else if (redirect.includes('cashier')) navigate('/cashier/dashboard');
          else alert('Invalid role or credentials');
        })
        .catch((err) => {
          alert('Login error: ' + err.message);
        });
    };
    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow rounded-4">
                            <div className="card-body p-4">
                                <h4 className="card-title text-center mb-4">Login</h4>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">UserName</label>
                                        <input type="text" className="form-control" id="username" name="username" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="rollId" className="form-label">RollId</label>
                                        <input type="text" className="form-control" id="rollId" name="rollId" required />
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                <Link to="/newuser" className="d-block text-center mt-3">New User? Register Here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Login;