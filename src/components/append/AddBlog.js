import React, { useState } from "react";
import { storage,db } from "../../firebase";
import firebase from "firebase";

function AddBlog() {
  //setting up the date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var today = yyyy + "-" + mm + "-" + dd;

  //use states
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [publishDate, setPublishDate] = useState(today);
  const [image, setImage] = useState(null);
  const [imageUrl,setImageUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const submitData = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const uploadTask = storage.ref(`/BlogImages/${image.name}`).put(image);
    uploadTask.on(
      "state_change",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        storage
          .ref("BlogImages")
          .child(image.name)
          .getDownloadURL()
          .then((imageUrl) => {
            setImageUrl(imageUrl);
            db.collection("blogs").add({
                imageUrl : imageUrl,
                title : title,
                publishDate : publishDate,
                url : url,
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                visits : 0,
            });
          });
          setTitle("");
          setUrl("");
          setImage(null);
          setImageUrl("");
          setProgress(0);
          
          alert("done submission");
      }
      
    );
  };

  return (
    <div className="container my-5">
      <h2 className="my-3">ADDING BLOGS</h2>

      <form>
        <div className="form-group my-2">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            id="form_title"
            placeholder="Enter Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group my-2">
          <label>Publish date</label>
          <input
            type="date"
            className="form-control"
            id="form_publish_date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
          />
        </div>

        <div className="form-group my-2">
          <label>Url</label>
          <input
            type="text"
            className="form-control"
            id="exampleCheck1"
            placeholder="Enter Blog Source Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="form-group my-2">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            id="exampleCheck1"
            placeholder="Choose Thumbnail"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary my-2"
          onClick={submitData}
        >
          Submit
        </button>

        <progress
          className="imageupload__progress"
          value={progress}
          max="100"
        />
      </form>
    </div>
  );
}

export default AddBlog;
