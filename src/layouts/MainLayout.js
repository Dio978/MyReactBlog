// src/layouts/MainLayout.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

// 使用CSS模块化的方式添加样式
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // 确保容器至少为视口高度
    backgroundColor: "#f5f8fa",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  content: {
    flex: 1, // 关键：内容区域占据剩余空间
    padding: "2rem",
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  footerWrapper: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "1rem",
  },
  headerWrapper: {
    backgroundColor: "#3498db",
    color: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
};

const MainLayout = ({ children }) => (
  <div style={styles.container}>
    <div style={styles.headerWrapper}>
      <Header />
    </div>
    <main style={styles.content}>
      <Outlet />
    </main>
    <div style={styles.footerWrapper}>
      <Footer />
    </div>
  </div>
);

export default MainLayout;
