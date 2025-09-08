import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import AssessmentPage from "./pages/AssessmentPage";
import CareersPage from "./pages/CareersPage";
import TherapyPage from "./components/TherapyPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background">
        {/* <Navbar /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/assessment" element={<AssessmentPage />} /> */}
            {/* <Route path="/career" element={<CareersPage />} /> */}
            {/* <Route path="/therapy/:type/:section" element={<TherapyPage />} /> */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
