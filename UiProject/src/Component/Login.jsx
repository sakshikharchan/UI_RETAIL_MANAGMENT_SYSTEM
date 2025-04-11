import React from 'react';
let Login = () => {
  return (
    <>
      <section className="vh-100 d-flex justify-content-center align-items-center login-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="card login-card">
                <div className="row g-0">
                  {/* Left Image */}
                  <div className="col-md-6 d-none d-md-block">
                    <img
                      src="./assets/s4.jpeg"
                      alt="login"
                      className="img-fluid login-img"
                    />
                  </div>

                  {/* Right Form */}
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="card-body px-5 py-4">
                      <h2 className="fw-bold mb-4 text-center">Login</h2>

                      <form>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email Address</label>
                          <input type="email" id="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" id="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button className="btn btn-dark mt-3 mb-3 w-100">Login</button>

                        <div className="text-center">
                          <a href="#" className="small text-muted">Forgot password?</a>
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
    </>)
}

export default Login;