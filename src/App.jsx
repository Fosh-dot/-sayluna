import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Destinations from "./components/Destinations";
import Resorts from "./components/Resorts";
import Experiences from "./components/Experiences";
import Guides from "./components/Guides";
import Footer from "./components/Footer";

import ResortDetails from "./pages/ResortDetails";
import SearchResults from "./pages/SearchResults";
import GuideDetails from "./pages/GuideDetails";
import SEO from "./components/SEO";
import DestinationDetails from "./pages/DestinationDetails";

function ScrollToTop() {
  const { pathname, search } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

function HomePage() {
  return (
    <>
      <SEO
        title="SAYLUNA | Discover Beautiful Escapes in the Philippines"
        description="Discover beautiful Philippine islands, resorts, travel experiences, and inspiring guides with SAYLUNA."
      />
      <Navbar />

      <main>
        <Hero />

        <SearchBar />

        <Destinations />

        <Resorts />

        <Experiences />

        <Guides />
      </main>

      <Footer />
    </>
  );
}

function ResortPage() {
  return (
    <>
      <Navbar />

      <ResortDetails />

      <Footer />
    </>
  );
}

function SearchPage() {
  return (
    <>
      <Navbar />

      <SearchResults />

      <Footer />
    </>
  );
}

function GuidePage() {
  return (
    <>
      <Navbar />

      <GuideDetails />

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* HOME */}

        <Route path="/" element={<HomePage />} />

        {/* RESORT */}

        <Route path="/resorts/:slug" element={<ResortPage />} />

        {/* SEARCH */}

        <Route path="/search" element={<SearchPage />} />

        {/* JOURNAL */}

        <Route path="/guides/:slug" element={<GuidePage />} />

        <Route path="/destinations/:slug" element={<DestinationDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
