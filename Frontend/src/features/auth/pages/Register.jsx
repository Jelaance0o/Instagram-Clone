import React from 'react'
import { Link } from 'react-router';

const Register = () => {
  const handleSubmit = (e) => {
     e.preventDefault();
   };
  

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />

          <button className="button primary-btn">Register</button>
        </form>

        <p>
          Already Have an Account ? <Link to="/login">Login to Account.</Link>
        </p>
      </div>
    </main>
  );
};
  


export default Register
