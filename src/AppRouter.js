import React from "react";
import {
    Switch,
    Route
  } from "react-router-dom";
import { LandingPage, ServicesPage, TestimonialsPage, ContactPage } from "pages";

function AppRouter() {
    return (
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
    );
}

export default AppRouter;