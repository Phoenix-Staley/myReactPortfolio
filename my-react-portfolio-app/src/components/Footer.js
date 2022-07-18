import React from "react";
import logo from "../assets/images/logo.png";

export default function Home() {
  return (
    <footer id="relative-footer">
        <h3>Developed by Phoenix Staley</h3>
        <h3>2022 ©</h3>
        <img src={logo} className="footer-logo" />
    </footer>
  );
}