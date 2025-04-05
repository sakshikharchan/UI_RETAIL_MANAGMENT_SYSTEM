import React from "react";

let Login=()=>{
    return (<>
    <div className="container">
  <div className="row justify-content-center align-items-center min-vh-100">
    <div className="col-md-8 col-lg-6"> {/* Wider form */}
      <div className="card shadow rounded-4">
        <div className="card-body p-4">
          <h4 className="card-title text-center mb-4">Login</h4>
          <form >
            {/* form fields here */}

            <div className="mb-3">
                  <label htmlFor="username" className="form-label">UserName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                   
                    required
                  />
                </div>
             
          
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                   
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rollId" className="form-label">RollId</label>
                  <input
                    type="text"
                    className="form-control"
                    id="rollId"
                    name="rollId"
                   
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


    </>);
}
export default Login;