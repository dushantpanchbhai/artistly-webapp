import React, { useEffect } from "react";
import "./HomeTop.css";

import { Helmet } from "react-helmet";

function HomeTop() {
  // useEffect(() => {
  //   const scriptTag = document.createElement("script");

  //   scriptTag.src = "https://use.typekit.net/foobar.js";
  //   scriptTag.async = true;

  //   document.body.appendChild(scriptTag);
  //   // return () => {
  //   //     document.body.removeChild(scriptTag);
  //   // }
  // }, []);
  return (
    <>
      <div className="homeTop">
        <div className="container" id="homeTop_title">
          <h1 className="brand" id="homeTop_brand">
            Artistly
          </h1>
          <p>Telling Stories through CGI.</p>
          
        </div>

        {/* <div className="advertisement">
          <iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=artistly-21&marketplace=amazon&amp;region=IN&placement=B0883JQQJQ&asins=B0883JQQJQ&linkId=7335dac38ffd6279991f594b0f012fce&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
          </iframe>
        </div> */}

        {/* scroll down animation classes */}

        <div class="mouse_scroll-1">
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
    </>
  );
}

export default HomeTop;
