import React from "react";
import AppRouter from "./AppRouter"
import Footer from "./components/Footer"
import { library } from "@fortawesome/fontawesome-svg-core";
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
import "./App.css";

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
  return (
    <div className="App">
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
