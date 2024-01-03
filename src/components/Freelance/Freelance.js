import React from "react";
import "./Freelance.css";
import { Link } from "react-router-dom";
import FreelanceForm from "./FreelanceForm";

function Freelance() {
  return (
    <>
      <div className="freelance">
        <div className="container" id="freelance_container">
          {/* freelance front */}
          <div className="freelance_top">
            <div className="freelance_photo">
              <img
                src="./images/profile_pic.png"
                id="profile_image"
                alt="profile"
              ></img>
            </div>
            <div className="freelance_title">
              <h2>Hi, I'm</h2>
              <h1>Dushant Panchbhai</h1>

              <div className="freelance_skills">
                <ul>
                  <li>3D Artist</li>
                  <li>-</li>
                  <li>Video Editor</li>
                </ul>
              </div>

              <div className="social_handles">
                <ul>
                  <li>
                    <Link
                      to={{
                        pathname:
                          "https://www.facebook.com/dushant.panchbhai.9/",
                      }}
                      target="_blank"
                    >
                      <img src="./images/facebook.png" alt="facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{ pathname: "https://www.instagram.com/artistly_studio/" }}
                      target="_blank"
                    >
                      <img src="./images/instagram.png" alt="instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{ pathname: "https://twitter.com/dushant73" }}
                      target="_blank"
                    >
                      <img src="./images/twitter.png" alt="twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname:
                          "https://www.linkedin.com/in/dushant-panchbhai-b799081b7/",
                      }}
                      target="_blank"
                    >
                      <img src="./images/linkdien.png" alt="linkdien" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <div class="freelance_portfolio">
                <button type="button" class="btn btn-primary">
                  portfolio
                </button>
              </div> */}

              {/* mouse scroll */}
              <div class="mouse_scroll">
                <div class="mouse">
                  <div class="wheel"></div>
                </div>
                <div>
                  <span class="m_scroll_arrows unu"></span>
                  <span class="m_scroll_arrows doi"></span>
                  <span class="m_scroll_arrows trei"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* freelance form */}
      <FreelanceForm />
    </>
  );
}

export default Freelance;
