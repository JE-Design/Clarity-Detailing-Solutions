import React from "react";
import "./App.css";
import {
  ContactPage,
  LandingPage,
  ServicesPage,
  TestimonialsPage,
} from "pages/";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <ContactPage />
      <ServicesPage />
      <TestimonialsPage />
    </div>
  );
}

export default App;
