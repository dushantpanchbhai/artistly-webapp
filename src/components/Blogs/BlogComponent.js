import React from "react";

function BlogComponent(props) {
  return (
    <div>
      <div className="Blogs_main">
        <div className="blog_box alert-primary">
          <img
            src={props.image}
            alt="no image found"
          />
          <div className="blog_text">
            <h6>publish data : {props.date} </h6>
            <h2>{props.BlogComponenttitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;
