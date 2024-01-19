import React from "react";
import Footer from "../Footer.js";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./HomeAbout.css";

function HomeAbout() {
  return (
    <div className="homeAbout">
      <div className="homeAbout_container">
        {/* About title */}
        <div className="homeAbout_title">
          <h2>About</h2>
        </div>

        <div className="homeAbout_logo">
          <img src={logo} alt="artistly_logo" />
        </div>

        {/* paragraph */}
        <div className="homeAbout_paragraph">
          <p>
            {/* Wondering what this website is about? Hey there, I am glad you visit
            my website. This is Dushant Panchbhai. I am a CGI Artist passionate about learning more about 3D Art and Visual
            Effects and sharing all the knowledge I have with others. This
            website is my small initiative to share all my model files and
            videos in one place. Check out my social handles to know more about
            me. Also do Subscribe to my YOUTUBE channel Artistly ;). Thank You! */}
            Welcome to my website! I'm Dushant Panchbhai, a CGI artist driven by a deep passion 
            for filmmaking and storytelling. I'm excited to have you here. This platform serves 
            as my small initiative to share all my model files and videos in one convenient space. 
            If you're interested in the fascinating world of CGI and want to join me on this 
            creative journey, don't forget to subscribe to my YouTube channel, Artistly. 
            Together, let's embark on the exciting adventure of "Telling Stories through CGI."
          </p>
        </div>

        {/* social handles */}
        <div className="homeAbout_social_handles">
          {/* instagram facebook youtube linkdein */}
          <h3>Follow me</h3>

          <div className="homeAbout_social_icons">
            <Link
              to={{ pathname: "https://www.instagram.com/artistly_studio/" }}
              target="_blank"
            >
              <img src="../images/instagram.png" class="individual_icon" alt="instagram"></img>
            </Link>

            {/* <Link
              to={{ pathname: "https://www.facebook.com/dushant.panchbhai.9/" }}
              target="_blank"
            >
              <img src="../images/facebook.png" class="individual_icon" alt="facebook"></img>
            </Link> */}

            <Link
              to={{ pathname: "https://www.youtube.com/c/Artistly" }}
              target="_blank"
            >
              <img src="../images/youtube.png" class="individual_icon" alt="youtube"></img>
            </Link>

            <Link to={{ pathname: "https://twitter.com/dushant73" }} target="_blank">
              <img src="../images/twitter.png" class="individual_icon" alt="twitter"></img>
            </Link>

            <Link
              to={{
                pathname:
                  "https://www.linkedin.com/in/dushant-panchbhai-b799081b7/",
              }}
              target="_blank"
            >
              <img src="../images/linkdien.png" class="individual_icon" alt="linkedin"></img>
            </Link>
          </div>
        </div>

        {/* hire me here */}
        {/* <div className="homeAbout_hiring_section">
          <p>
            Hire me <Link to="/freelance">here.</Link>
          </p>
        </div> */}
        <Footer/>
      </div>
    </div>
  );
}

export default HomeAbout;
