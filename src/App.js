import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";
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
}

export default App;
