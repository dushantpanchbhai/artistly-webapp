import React, {useEffect } from "react";
import YoutubeEmbeded from "./YoutubeEmbeded";
import "./Videos.css";
import Footer from '../Footer';
import { useStateValue } from "../../StateProvider";

function Videos() {
  const [{ videos }, dispatch] = useStateValue();
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/activities?part=contentDetails&channelId=UCW15y5uBetmTJIZcc7oTlbA&publishedAfter=2021-01-01T00%3A00%3A00.0Z&maxResults=20&key=${apiKey}`
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

  return (
    <div className="videos">
      <div className="container" id="videos_container">
        <div className="videos_title">
          <h2>Videos</h2>
        </div>
        <div className="videos_video">
          <YoutubeEmbeded embedId={videos} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Videos;
