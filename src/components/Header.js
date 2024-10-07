import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Your Company Logo</div>
      <nav className="nav">
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
