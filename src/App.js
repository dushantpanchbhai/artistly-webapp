import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login.js";
import Signup from "./components/Login/SignUp.js";
import Models from "./components/Models/Models.js";
import Videos from "./components/Videos/Videos.js";
import Freelance from "./components/Freelance/Freelance";
import ModelDownload from "./components/Models/ModelDownload.js";
import AddModel from "./components/append/AddModel";
import Blog from './components/Blogs/Blog.js'
import AddBlog from './components/append/AddBlog'

import { useEffect } from "react";

import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider";

function App() {
  const [{userName,user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is log in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        
        if (authUser.displayName )
        {

        }
        else
        {
          authUser.updateProfile({
            displayName: userName,
          });
          console.log('sucessfully change the user name to ' + userName)
        }
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  },[user,userName,dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Header />
          <Login />
        </Route>

        <Route exact path="/signup">
          <Header />
          <Signup />
        </Route>
        <Route exact path="/models">
          <Header />
          <Models />
        </Route>

        <Route excat path="/videos">
          <Header />
          <Videos />
        </Route>

        <Route excat path="/Freelance">
          <Header />
          <Freelance />
        </Route>

        <Route excat path="/blogs">
          <Header />
          <Blog />
        </Route>

        <Route exact path="/models/download/:file">
          <Header />
          <ModelDownload />
        </Route>

        <Route exact path="/add">
          <Header />
          <AddModel />
        </Route>

        <Route exact path="/addblog">
          <Header />
          <AddBlog />
        </Route>

        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
