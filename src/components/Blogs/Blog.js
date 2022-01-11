import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
import BlogComponent from "./BlogComponent";

function Blog() {
  const [{ blog }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("blogs")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        dispatch({
          type: "UPDATE_BLOG",
          items: snapshot.docs.map((doc) => ({
            id: doc.id,
            blog: doc.data(),
          })),
        });
      });
  }, []);

  console.log("blogs are : ", blog);

  return (
    <div className="container">
      <div className="container" id="Blog_top">
        <div className="social_handles">
          <a href="#">
            <InstagramIcon id="instagram" className="materialIcon" />
          </a>
          <a href="#">
            <FacebookIcon id="facebook" className="materialIcon" />
          </a>
          <a href="#">
            <TwitterIcon id="twitter" className="materialIcon" />
          </a>
        </div>
        <div className="heading">
          <h2 className="Blog_heading">Blogs</h2>
        </div>

        <div className="social_handles2">
          <a href="#">
            <LinkedInIcon id="linkedin" className="materialIcon" />
          </a>
          <a href="#">
            <YouTubeIcon id="youtube" className="materialIcon" />
          </a>
        </div>
      </div>

      <hr />

      {blog.map((items) => {
        <BlogComponent
          key={items.id}
          title={items.blog.title}
          url={items.blog.url}
          image={items.blog.imageUrl}
          date = {items.blog.date}
        />;
      })}
    </div>
  );
}

export default Blog;
