import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img4 from '../assets/fash3.jpg';


const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    role: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
       
    try {
      console.log(user.username);
      console.log(user.password);
      console.log(user.role);
      const response = await axios.post('http://localhost:8080/api/User/login', {
        userName: user.username,
        password: user.password,
        roleId: parseInt(user.role)
      });


      console.log(response.data);

      const { role } = response.data;
      alert('Login successful');
      navigate(role === user.role ? '/manager' : role === user.role? '/adminDashboard' : '/cashier');
    } catch (error) {
      if (error.response) {
        // Handle specific backend error responses
        const status = error.response.status;
        const message = error.response.data.message || 'Unknown error occurred.';
        alert(`Error (${status}): ${message}`);
      } else {
        // Handle other errors like network issues
        alert('Network error or server unavailable. Please try again later.');
      }
    }
    
  };

  

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center login-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card login-card">
              <div className="row g-0">
                {/* Left Image */}
                <div className="col-md-6 d-none d-md-block">
                  <img
                    src={img4}
                    alt="login"
                    className="img-fluid login-img"
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Right Form */}
                <div className="col-md-6 d-flex align-items-center">
                  <div className="card-body px-5 py-4">
                    <h2 className="fw-bold mb-4 text-center">Login</h2>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username or Email
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          className="form-control"
                          value={user.username}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          value={user.password}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="role" className="form-label">
                          Role (1 = Manager, 2 = Admin, 3 = Cashier)
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          className="form-control"
                          value={user.role}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <button type="submit" className="btn btn-dark w-100">
                        Login
                      </button>

                      <div className="text-center mt-3">
                        <a href="#" className="small text-muted">
                          Forgot password?
                        </a>
                        <p className="mt-2">
                          Don't have an account? <a href="#">Register here</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
