import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';  // Default header for public pages
import Footer from './components/Footer';
import AdminHeader from './components/AdminHeader'; // Import new Admin Header
import AdminPanel from './components/AdminPanel';
import NotFound from "./components/NotFound"; // Import Not Found Component
import { Amplify, Auth } from 'aws-amplify';
//import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


// Lazy Load Components
const Home = lazy(() => import('./components/Home'));
const Services = lazy(() => import('./components/Services'));
const Opportunities = lazy(() => import('./components/Opportunities'));
const Contact = lazy(() => import('./components/Contact'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Employers = lazy(() => import('./components/Employers'));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Conditional Header */}
      <Routes>
        <Route path="/admin/*" element={<AdminHeader />} />
        <Route path="/*" element={<Header />} />
      </Routes>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/jobs" element={<Opportunities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/admin/*" element={<AdminPanel />} />
          {/* Catch-all Route for Non-Existent Pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      
      <Footer />
    </Router>
  );
};

export default App;
