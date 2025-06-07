// src/components/Header.js
import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

const navLinks = {
  display: "flex",
  gap: "2rem",
};

const logoStyle = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  textDecoration: "none",
  color: "white",
};

const linkStyle = {
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  textDecoration: "none",
  color: "rgba(255,255,255,0.9)",
  transition: "all 0.3s ease",
};

const activeLinkStyle = {
  ...linkStyle,
  backgroundColor: "rgba(255,255,255,0.2)",
};

const Header = () => (
  <header>
    <nav style={navStyle}>
      <NavLink to="/" style={logoStyle}>
        生化地下城主的博客
      </NavLink>
      <div style={navLinks}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
          end
        >
          首页
        </NavLink>
        <NavLink
          to="/blog"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          博客
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          关于
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
