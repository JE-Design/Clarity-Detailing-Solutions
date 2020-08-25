import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar, Footer } from "components/";
import {
  LandingPage,
  ServicesPage,
  TestimonialsPage,
  ContactPage,
} from "pages";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
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
      <Footer />
    </Router>
  );
}

export default AppRouter;
