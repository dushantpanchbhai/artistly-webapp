import React, { useState, useEffect } from "react";
import YoutubeEmbeded from "./YoutubeEmbeded";
import "./HomeVideos.css";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";

function HomeVideos() {
  const [{ videos }, dispatch] = useStateValue();
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/activities?part=contentDetails&channelId=UCW15y5uBetmTJIZcc7oTlbA&maxResults=6&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const result = data.items.map((item) => {
          return { videoId: item.contentDetails.upload.videoId };
        });

        dispatch({
          type: 'UPDATE_VIDEOS',
          items: result
        })
      });
  }, [apiKey,dispatch]);

  const [desktop,setDesktop] = useState(true);

  useEffect(() => {
    setDesktop(window.innerWidth > 760);
  },[])

  
  //setting up video page
  return (
    <>
      <div id="homeVideos">
        <div className="container " id="videocontainer">
          <Link to="/videos" id="title2">
            <h2 id="videoTitle">Videos</h2>
          </Link>

          <div className="container my-1" id="videocontainer_component">
            {desktop?(
              <YoutubeEmbeded embedId={videos.slice(0, 6)}></YoutubeEmbeded>
            ) : (
              <YoutubeEmbeded embedId={videos.slice(0, 3)}></YoutubeEmbeded>
            )}
          </div>

          <div className="container my-5" id="videolink_container">
            <Link to="/videos" id="more1">
              more...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeVideos;
