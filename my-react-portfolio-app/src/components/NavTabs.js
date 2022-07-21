import React from "react";
import resume from "../assets/phoenixDevResume.pdf";

// This function takes in an destructures the current page state and the function for handling a page change
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="static-header">
        <h2 className="header main-header">Phoenix Staley - Web Developer</h2>
        <h2 className="header short-header">Phoenix Staley - Developer</h2>
        <nav className="text-right navigation">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    // This ternary operator applies the "active" class only when the current page is Home
                    // The ternary operators for the following <li> elements do the same thing
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                    About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                    Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                    Contact
                    </a>
                </li>
                <li>
                    <a href={resume} download>Resume</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default NavTabs;