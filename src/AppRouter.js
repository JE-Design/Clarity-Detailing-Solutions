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
import { RouterPaths } from "utils"

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
        <Route path={RouterPaths.SERVICES}>
          <ServicesPage />
        </Route>
        <Route path={RouterPaths.TESTIMONIALS}>
          <TestimonialsPage />
        </Route>
        <Route path={RouterPaths.CONTACT}>
          <ContactPage />
        </Route>
        <Route path={RouterPaths.LANDING}>
          <LandingPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;
