// src/components/Footer.js
import React from "react";

const footerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
};

const copyrightStyle = {
  marginTop: "1rem",
  fontSize: "0.9rem",
  color: "rgba(255,255,255,0.7)",
};

const socialLinks = {
  display: "flex",
  gap: "1.5rem",
  marginTop: "1rem",
};

const socialIcon = {
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "rgba(255,255,255,0.1)",
  transition: "all 0.3s ease",
  color: "white",
  textDecoration: "none",
  fontSize: "1.2rem",
};

const Footer = () => (
  <div style={footerStyle}>
    <div>
      <h3>生化地下城主的博客</h3>
      <p>分享关于数学、物理、人工智能和生物混合机器人的一切</p>
    </div>

    <div style={copyrightStyle}>
      © {new Date().getFullYear()} 生化地下城主 版权所有
    </div>
  </div>
);

export default Footer;
