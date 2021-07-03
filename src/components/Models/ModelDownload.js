import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ModelDownload.css";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
import firebase from "firebase";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function ModelDownload() {
  let { file } = useParams();
  const [{ model, user }] = useStateValue();
  const displayModel = model.filter((items) => {
    return items.id === file;
  });

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const postComment = (e) => {
    e.preventDefault();
    if(comment === "")
    {
      alert("please enter something")
    }
    else
    {
      db.collection("posts").doc(file).collection("comments").add({
        text: comment,
        username: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setComment("");
    }
  };
  
  useEffect(() => {
    db.collection("posts")
      .doc(file)
      .collection("comments")
      .orderBy('timestamp')
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
      console.log("updated ---");
  },[file]);

  return (
    <div className="container">
      {/* title */}
      {/* photo */}
      {/* description */}
      {/* download button */}
      {displayModel.map((item) => {
        return (
          <div className="download-container">
            <div className="download-image">
              <h2>{item.model.title}</h2>
              <img src={item.model.imageUrl} alt="unable_to_load"></img>
              <div className="download-button">
                <Link
                  to={{
                    pathname: item.model.driveUrl,
                  }}
                  target="_blank"
                >
                  <button className="btn btn-primary">Download</button>
                </Link>
              </div>
              <p>{item.model.description}</p>
            </div>
          </div>
        );
      })}

      {/* comment section */}
      <div className="container" id="comment-container">
        <div className="form-control">
          <h4 id="comment-title">comments</h4>
          <hr id="hr" />
          <form onSubmit={postComment}>
          <div class="input-group mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="enter comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </div>
          </form>

          {comments.slice(0).reverse().map((item) => {
            return (
              <div className="card">
                <div className="card-body">
                  <AccountCircleIcon/> {item.username}  <br></br> || comment : {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ModelDownload;
