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
      <ContactPage />
      <LandingPage />
      <ServicesPage />
      <TestimonialsPage />
    </div>
  );
}

export default App;
