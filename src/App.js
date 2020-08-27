import React, { useState, useEffect } from "react";
import AppRouter from "./AppRouter";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { CircleLoader } from "react-spinners";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import * as assets from "assets/";
import "./App.scss";

//Initialize fontawesome with desired icons
library.add(
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faSnapchat,
  faEnvelope,
  faMapMarker,
  faPhone
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const cacheImages = (images) => {
    const promises = [];
    images.forEach((src) => {
      promises.push(
        new Promise(function (resolve, reject) {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            resolve();
          };
          img.onerror = () => {
            reject();
          };
        })
      );
    });

    Promise.all(promises).then((values) => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    const images = Object.values(assets);

    cacheImages(images);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loading-screen w-full h-screen flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h2 className="p-6">Clarity Detailing Solutions</h2>
            <CircleLoader className="m-auto" size={50} color="white" />
          </div>
        </div>
      ) : (
        <div className="App">
          <AppRouter />
          <ToastContainer
            className="z-30"
            transition={Slide}
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
          />
        </div>
      )}
    </>
  );
}

export default App;
