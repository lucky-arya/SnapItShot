import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import WorkPage from './pages/Work/WorkPage';
import CollectionDetailPage from './pages/Collections/CollectionDetailPage';
import StoryDetailPage from './pages/Story/StoryDetailPage';
import AboutPage from './pages/About/AboutPage';
import InquiryPage from './pages/Inquiry/InquiryPage';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<StoryDetailPage />} />
        <Route path="/collections/:slug" element={<CollectionDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/inquire" element={<InquiryPage />} />
        <Route path="/contact" element={<InquiryPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
