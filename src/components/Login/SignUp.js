import React, { useState } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import Footer from "../Footer";
import { auth, db } from "../../firebase";
import { GoogleLogin, FacebookLogin, GithubLogin } from "./LoginFunctions";
import { useStateValue } from "../../StateProvider";

function SignUp() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //coalling dispatch
        dispatch({
          type: "SET_USERNAME",
          userName: userName,
        });
        db.collection("logins")
          .doc("normal")
          .get()
          .then((doc) => {
            var total_login = doc.data().total_logins;
            db.collection("logins")
              .doc("normal")
              .update({
                total_logins: total_login + 1,
              });
          });

        alert("user account created succesfully");
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-title">
          <h1>Sign Up</h1>
        </div>
        <div className="login-form">
          <form onSubmit={register}>
            <div class="form-group" id="form-group1">
              {/* <label>UserName</label> */}
              <input
                id="input-data"
                type="username"
                class="form-control"
                placeholder="Username"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div class="form-group" id="form-group1">
              {/* <label>Email address</label> */}
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
              {/* <label>Password</label> */}
              <input
                id="input-data"
                type="text"
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
              onClick={register}
            >
              Sign Up
            </button>
          </form>
        </div>
        <p id="login-or">or signup with</p>
        <div className="login-alternative">
          <Link to="" onClick={(e) => FacebookLogin(e, history)}>
            <img
              src="./images/facebook.png"
              id="login-img"
              alt="facebook"
            ></img>
          </Link>
          <Link to="" onClick={(e) => GoogleLogin(e, history)}>
            <img src="./images/google.png" id="login-img" alt="google"></img>
          </Link>
          <Link to="" onClick={(e) => GithubLogin(e, history)}>
            <img src="./images/github.png" id="login-img" alt="github"></img>
          </Link>
        </div>

        <p id="already">
          Already have Account? <Link to="/login">Login</Link>
        </p>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default SignUp;
