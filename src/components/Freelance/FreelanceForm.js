import React, { useState, useEffect } from "react";
import "./FreelanceForm.css";
import Footer from "../Footer";
import { db, storage } from "../../firebase";
import { useStateValue } from "../../StateProvider";
function FreelanceForm() {
  const [{ user }] = useStateValue();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [work, setWork] = useState("");
  const [refImage, setRefImage] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [refImageUrl, setRefImageUrl] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (user) {
      if (user.displayName) {
        setName(user.displayName);
      }
      setEmail(user.email);
    }
  }, [user]);

  const handleClick = (e) => {
    e.preventDefault();
    if (refImage) {
      const uploadTask = storage
        .ref(`/UserImages/${refImage.name}`)
        .put(refImage);

      uploadTask.on(
        "state_change",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("UserImages")
            .child(refImage.name)
            .getDownloadURL()
            .then((refImageUrl) => {
              setRefImageUrl(refImageUrl);
              console.log("url is: ", refImageUrl);
              console.log("tyep of", typeof refImageUrl);

              //saving data in database
              db.collection("FreelanceOrder").add({
                refImage: refImageUrl,
                name: name,
                email: email,
                work: work,
                refVideoUrl: videoUrl,
              });

              alert(
                "Thank You! Info submitted succesfully. I will contact you soon"
              );
            });
          setName("");
          setEmail("");
          setWork("");
          setVideoUrl("");
          setProgress(0);
        }
      );
    } else {
      if (work === "") {
        alert("please fill the work Details");
      } else {
        db.collection("FreelanceOrder").add({
          refImage: refImageUrl,
          name: name,
          email: email,
          work: work,
          refVideoUrl: videoUrl,
        });

        alert(
          "Thank You! Your Info submitted succesfully, I will contact you soon"
        );

        setName("");
        setEmail("");
        setWork("");
        setVideoUrl("");
      }
    }
    //alert("Thank You! Your information submitted succesfully. I will contact you soon");
  };

  return (
    <div className="freelance-form">
      <div className="container" id="freelance-container">
        {/* heading */}
        <div className="form-heading">
          <h1>Want to Hire me for your Project?</h1>
          <h3>
            connect on my social handles
            <br />
            or
            <br />
            leave your info and work below and i will contact you soon
          </h3>
        </div>
        <form>
          {/* name */}
          <div className="form-group my-3">
            <label>Name</label>
            <input
              type="username"
              className="form-control"
              id="form-email"
              placeholder="enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* email */}
          <div className="form-group my-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="form-email"
              placeholder="enter your email address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* work Details */}
          <div className="form-group my-3">
            <label>Work Details</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={work}
              required
              onChange={(e) => setWork(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group my-3">
            <label>Any reference image (optional)</label>
            <input
              type="file"
              className="form-control"
              id="form-email"
              placeholder="(optional)"
              onChange={(e) => setRefImage(e.target.files[0])}
            />
          </div>

          <div className="form-group my-3">
            <label>Any reference video URL</label>
            <input
              type="url"
              className="form-control"
              id="form-email"
              placeholder="(optional)"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-3"
            id="submit-button"
            onClick={handleClick}
          >
            Submit
          </button>

          {progress === 0 ? (
            ""
          ) : (
            <progress
              className="imageupload__progress"
              value={progress}
              max="100"
            />
          )}
        </form>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default FreelanceForm;
