import React, { useState } from "react";
import Nanogram from "nanogram.js";
import "./Instafeed.scss";

const Instafeed = () => {
  const instagramParser = new Nanogram();
  const [URLs, setURLs] = useState([]);

  const getImageURLS = () => {
    instagramParser.getMediaByUsername("wacalac_art").then((media) => {
      // instagramParser.getMediaByTag("sunset").then((media) => {
      console.log(media);
      let images;
      try {
        images = media.profile.edge_owner_to_timeline_media.edges;
      } catch (e) {
        console.log(e);
        return [];
      }
      const imageURLs = images.map((image) => {
        return image.node.display_url;
      });
      setURLs(imageURLs.slice(0, 6));
    });
  };
  getImageURLS();

  return (
    <div className="instafeed flex flex-col">
      <h3 className="text-center">Showcase</h3>
      <div className="flex flex-center flex-wrap -m-3">
        {URLs.map((URL) => (
          <img key={URL} className="image w-1/3 p-3" src={URL} />
        ))}
      </div>
    </div>
  );
};

export default Instafeed;
