import React, { useState} from "react";
import "./AddModel.css";
import {storage,db} from "../../firebase";
import firebase from "firebase";

function AddModel() {
  const [url, setUrl] = useState("");
  const [driveUrl, setDriveUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${thumbnail.name}`).put(thumbnail);
    uploadTask.on(
      "state_change",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function ...
        alert(error);
      },
      () => {
        storage
          .ref("images")
          .child(thumbnail.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            
            //saving data in database
            db.collection("posts").add({
              imageUrl: url,
              title: title,
              description: description,
              driveUrl: driveUrl,
              downloads: 0,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
          });
        setTitle("");
        setDescription("");
        setUrl("");
        setThumbnail(null);
        setDriveUrl("");
        setProgress(0);
      }
    );
  };

  return (
    <div className="container">
      <div className="addModel_title">Add Model</div>
      <div className="addModel_form">
        <form className="container">
          <div className="form-group my-3">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter Model Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-group my-3">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter Model Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>

          <div className="form-group my-3">
            <label>Url</label>
            <input
              type="text"
              className="form-control"
              name="driveUrl"
              placeholder="enter url link"
              value={driveUrl}
              onChange={(e) => setDriveUrl(e.target.value)}
            ></input>
          </div>

          <div className="form-group my-3">
            <label>Select Thumbnail</label>
            <input
              type="file"
              className="form-control"
              name="thumbnail"
              placeholder="choose Thumbnail"
              onChange={(e) => setThumbnail(e.target.files[0])}
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Upload
          </button>
          <progress
            className="imageupload__progress"
            value={progress}
            max="100"
          />
        </form>
      </div>
    </div>
  );
}

export default AddModel;
