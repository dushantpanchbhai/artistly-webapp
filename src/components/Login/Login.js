import React, { useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../Footer";
import { auth} from "../../firebase";
import {GoogleLogin,FacebookLogin,GithubLogin} from "./LoginFunctions";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        alert("login succesfully");
        history.push("/");
      })
      .catch((error) => {
        alert(error.message)}
        );
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-title">
          <h1>Login</h1>
        </div>
        <div className="login-form">
          <form>
            <div class="form-group" id="form-group1">
              <input
                id="input-data"
                type="email"
                class="form-control"
                placeholder="Email Address"
                isrequired="true"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="form-group" id="form-group1">
              <input
                id="input-data"
                type="password"
                class="form-control"
                isrequired="true"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              id="submit-form"
              onClick={login}
            >
              Login
            </button>
          </form>
        </div>
        <p id="login-or">or Login with</p>
        <div className="login-alternative">
          <Link to="" onClick={(e) => FacebookLogin(e,history)}>
            <img src="./images/facebook.png" id="login-img" alt="facebook"></img>
          </Link>
          <Link to="" onClick={(e) => GoogleLogin(e,history)}>
            <img src="./images/google.png" id="login-img" alt="google"></img>
          </Link>
          <Link to="" onClick={(e) => GithubLogin(e,history)}>
            <img src="./images/github.png" id="login-img" alt="github"></img>
          </Link>
        </div>

        <p id="already">
          Don't have Account? <Link to="/signup"> SignUp</Link>
        </p>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
