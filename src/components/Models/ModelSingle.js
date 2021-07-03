import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./ModelSingle.css";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";

function ModelSingle(props) {
  const [{ user }] = useStateValue();
  const history = useHistory();

  const incrementDownload = (e, id) => {
    e.preventDefault();
    db.collection("posts")
      .doc(id)
      .get()
      .then((doc) => {
        var download = doc.data().downloads;
        if (!download) {
          download = 0;
        }

        console.log("download is", download);
        db.collection("posts")
          .doc(id)
          .update({
            downloads: download + 1,
          });
      });
    history.push(`models/download/${id}`);
  };

  return (
    <div className="col">
      <div className="card">
        <img
          className="card-img-top"
          id="Model-image"
          src={props.images}
          alt="unable to load"
        />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
          {user ? (
            <button
              className="btn btn-primary"
              onClick={(e) => incrementDownload(e, props.id)}
            >
              Download
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Download
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModelSingle;
