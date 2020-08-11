import React from "react";
import "./App.css";
import {
  ContactPage,
  LandingPage,
  ServicesPage,
  TestimonialsPage,
} from "pages/";
import { Navbar } from "components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <ContactPage />
      <ServicesPage />
      <TestimonialsPage />
    </div>
  );
}

export default App;
