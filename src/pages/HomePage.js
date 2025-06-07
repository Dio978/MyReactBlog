import React from "react";
import "./HomePage.css";
import backgroundImage from "./HomeBackround.jpg"; // 导入当前目录下的背景图
export default function HomePage() {
  return (
    <div
      className="dungeon-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // 新增关键属性
        backgroundRepeat: "no-repeat", // 新增关键属性
        backgroundPosition: "center", // 新增关键属性
      }}
    >
      <div className="background-overlay"></div>
      <h1 className="dungeon-title">欢迎来到我的地下城</h1>
    </div>
  );
}
