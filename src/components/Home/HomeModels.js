import React from "react";
import { Link } from "react-router-dom";

import "./HomeModels.css";
import ModelFile from "./ModelFile";

function HomeModels() {
  return (
    <>
      <div className="homeModels">
        <div className="container" id="homeModels_container">
          <h2 id="homeModels_title">
            <Link to="/models" id="homeModel_title_link">
              Models
            </Link>
          </h2>

          <div className="Models">
            <ModelFile></ModelFile>
          </div>

          <div className="homeModels_more">
              <Link to="/models">More....</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeModels;
