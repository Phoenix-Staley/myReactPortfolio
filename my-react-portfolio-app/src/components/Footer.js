import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";

export default function Home() {
  return (
    <footer id="relative-footer">
        <h3>Developed by Phoenix Staley</h3>
        <h3>2022 ©</h3>
        <img src={logo} className="footer-logo" />
        <div>
            <a href="https://www.github.com/Phoenix-Staley"><FontAwesomeIcon className="icon-link" icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/phoenix-staley-b17672211/"><FontAwesomeIcon className="icon-link" icon={faLinkedin} /></a>
            <a href="mailto:PhoenixStaley_Developer@outlook.com"><FontAwesomeIcon className="icon-link" icon={faEnvelope} /></a>
        </div>
    </footer>
  );
}