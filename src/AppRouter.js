import React, { useEffect } from "react";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
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

const history = createBrowserHistory();


// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


function AppRouter() {
  return (
    <Router history={history}>
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
