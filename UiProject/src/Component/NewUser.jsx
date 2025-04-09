import React from "react";
import { Link } from 'react-router-dom';
import Login from "./Login";

let NewUser = () => {
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
        rollId: ''
    });
    const handleSubmit = (event) => {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data); 
  
    }
    const Login = () => {
       
        console.log("Login clicked");
    }
    return (
        <>
            {/* <h1 style={{marginLeft:"300px",marginTop:"10px"}}>Register New User</h1> */}
              <div className="container">
                              <div className="row justify-content-center align-items-center min-vh-100">
                                  <div className="col-md-8 col-lg-6">
                                      <div className="card shadow rounded-4">
                                          <div className="card-body p-4">
                                              <h4 className="card-title text-center mb-4">Register New User</h4>
                                              <form onSubmit={handleSubmit}>
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
                                                    <br />
                                                      <button type="submit" className="btn btn-primary" style={{backgroundColor:"green"}}>CreateNewUser</button>
                                                  </div>
                                              </form>
                                              <Link to="/login" style={{color:"blue" }}><-Back to Login</Link>
                                            </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

            
        </>
    );
};

export default NewUser;
