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
import { RouterPaths } from "utils"

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
