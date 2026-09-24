import React from 'react'
import { Link } from "react-router-dom";

import '../form.scss'
const Login = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form action="">
          <input type="text" name="username" placeholder="Enter User" />
          <input type="text" name="password" placeholder="Enter Password" />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have a account ? <Link className="toggleAuthForm" to="/Register">
             Register
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login
