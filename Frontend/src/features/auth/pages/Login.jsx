import React ,{ useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./form.scss";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {handleLogin} = useAuth()

  async function submitHandler(e) {
    e.preventDefault();

    handleLogin(username , password)
    .then(res=>{
      console.log(res);
      
    })

  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter User"
          />

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter Password"
          />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have a account ?{" "}
          <Link className="toggleAuthForm" to="/Register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;


// dsa , aptitude 