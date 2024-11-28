import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-scroll"; // Ensure you're using react-scroll here
import "./Sidebar.css";
import HeartImage from "../assets/heart_final.jpg"
const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`sidebar ${theme}`}>
      <img src={HeartImage} alt="" className="heart-logo"/>
      <h2>AlphaPrint</h2>
      <nav>
        <Link to="home" smooth={true} className="links" duration={500} >Home</Link>
        <Link to="model-architecture" smooth={true} className="links" duration={500} >Architecture</Link>
        <Link to="accuracy" smooth={true} duration={500} className="links">Accuracy</Link>
        <Link to="methodology" smooth={true} duration={500} className="links">Methodology</Link>
        <Link to="codebox" smooth={true} duration={500} className="links">Code</Link>
        <Link to="contact" smooth={true} duration={500} className="links">Contact</Link>
        <Link to="others" smooth={true} duration={500} className="links">Others</Link>
      </nav>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Sidebar;
