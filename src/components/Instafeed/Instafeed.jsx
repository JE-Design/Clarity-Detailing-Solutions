import React from "react";
import "./Instafeed.scss";

const Instafeed = () => {
  function testURLs() {
    var i,
      e,
      d = document,
      s = "script";
    i = d.createElement("script");
    i.async = 1;
    i.src = "curator url here";
    e = d.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(i, e);
  }

  return (
    <div className="instafeed flex flex-col">
      <h3 className="text-center">Showcase</h3>
      {/* <div className="flex flex-center flex-wrap -m-3"> */}
      <div id="curator-feed-claritydetailsolutions-layout">
        <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">
          Powered by Curator.io
        </a>
      </div>
      {testURLs()}
    </div>
  );
};

export default Instafeed;
