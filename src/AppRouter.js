import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LandingPage, ServicesPage, TestimonialsPage, ContactPage } from "pages";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/services">
                    <ServicesPage />
                </Route>
                <Route path="/testimonials">
                    <TestimonialsPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route path="/">
                    <LandingPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;