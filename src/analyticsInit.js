import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider

const trackingId = process.env.REACT_APP_GANALYTICS_KEY; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
})