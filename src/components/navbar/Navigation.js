import React from "react";
import "./Navigation.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navi_title">
        <a href="/">Heungryellee</a>
      </div>

      <div className="navi_menu">
        <a href="/work">WORKS</a>
        <a href="/news">NEWS</a>
        <a href="/info">INFO</a>
        <a href="https://www.instagram.com/hgrol/">INSTAGRAM</a>
      </div>
    </div>
  );
};

export default Navigation;
