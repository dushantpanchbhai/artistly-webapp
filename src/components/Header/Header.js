import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { Link,NavLink } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStateValue } from "../../StateProvider";
import "./Header.css";
import { auth } from "../../firebase";

function Header() {
  const [{ user }] = useStateValue();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (user === null) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  }, [user]);

  const logout = () => {
    if (user) {
      auth.signOut();
      setIsLogged(false);
      alert("logged out succesfully");
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
        id="navbar-main"
      >
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={logo} id="artistly_logo" alt="logo"/>
          </Link>
          <Link className="navbar-brand" to="/">
            Artistly
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/models">
                  Models
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/videos">
                  Videos
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/blogs">
                  Blogs
                </NavLink>
              </li> */} 
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/freelance">
                  Hire Me!  
                </NavLink>
              </li>
            </ul>

            {isLogged ? (
              <div class="dropdown">
                <AccountCircleIcon
                  id="person_icon_logged"
                  data-bs-toggle="dropdown"
                />
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    hello,<br/>
                    {user.displayName}
                    <hr></hr>
                  </li>
                  <li id="logout">
                    <Link to="" onClick={logout} style={{"textDecoration": "none","color":"#ffff"}}>Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div class="dropdown">
                <AccountCircleIcon
                  id="person_icon_unlogged"
                  data-bs-toggle="dropdown"
                />
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <Link class="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
