import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import BlogInsights from './pages/blog-insights';
import ClientSuccessStories from './pages/client-success-stories';
import ContactConsultation from './pages/contact-consultation';
import ServicesOverview from './pages/services-overview';
import AboutUs from './pages/about-us';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/blog-insights" element={<BlogInsights />} />
        <Route path="/client-success-stories" element={<ClientSuccessStories />} />
        <Route path="/contact-consultation" element={<ContactConsultation />} />
        <Route path="/services-overview" element={<ServicesOverview />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
