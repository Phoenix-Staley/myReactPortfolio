import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import About from "../pages/About";
import Projects from "../pages/Projects";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Projects />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="main-page">
      {/* This passes the currentPage property and the handlePageChange function to the NavTabs component */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* This calls the renderPage function that loads the appropriate component */}
      {renderPage()}
      <Footer />
    </div>
  );
}
