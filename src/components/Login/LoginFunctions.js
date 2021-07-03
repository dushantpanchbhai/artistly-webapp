import firebase from "firebase";
import { db, auth } from "../../firebase";

const GoogleLogin = (event, history) => {
  event.preventDefault();
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    login_hint: "user@example.com",
  });

  auth
    .signInWithPopup(provider)
    .then((then) => {
      db.collection("logins")
        .doc("google")
        .get()
        .then((doc) => {
          var total_login = doc.data().total_logins;
          db.collection("logins")
            .doc("google")
            .update({
              total_logins: total_login + 1,
            });
        });
      alert("login sucessfully");
      history.push("/");
    })
    .catch((error) => {
      alert(error.message);
    });
};

const FacebookLogin = (event, history) => {
  event.preventDefault();
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      db.collection("logins")
        .doc("facebook")
        .get()
        .then((doc) => {
          var total_login = doc.data().total_logins;
          db.collection("logins")
            .doc("facebook")
            .update({
              total_logins: total_login + 1,
            });
        });
      alert("login sucessfully");
      history.push("/");
    })
    .catch((error) => {
      alert(error.message);
    });
};

const GithubLogin = (event, history) => {
  event.preventDefault();
  var provider = new firebase.auth.GithubAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      db.collection("logins")
        .doc("github")
        .get()
        .then((doc) => {
          var total_login = doc.data().total_logins;
          db.collection("logins")
            .doc("github")
            .update({
              total_logins: total_login + 1,
            });
        });
      alert("login sucessfully");
      history.push("/");
    })
    .catch((error) => {
      alert(error.message);
    });
};

export { GoogleLogin, FacebookLogin, GithubLogin };
