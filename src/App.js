import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";
=======
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
>>>>>>> master
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
import { Navbar } from "components";

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
        <Router>
            <div className="App">
                <Navbar />
                <AppRouter />
                <Footer />
            </div>
        </Router>
    );
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
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
  );
}

export default App;
