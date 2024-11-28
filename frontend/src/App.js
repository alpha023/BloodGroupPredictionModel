// src/App.js
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/Home";
import Accuracy from "./pages/accuracy/Accuracy";
import Methodology from "./pages/methodology/Methodology";
import Contact from "./pages/contact/Contact";
import Others from "./pages/others/Others";
import ModelArchitecture from "./pages/model-architecture/ModelArchitecture";
import Footer from "./pages/footer/Footer";
import CodeBox from "./components/codebox/CodeBox";
import Shimmer from "./components/shimmer/Shimmer"; // Import the shimmer effect
import { PythonCode } from "./constants/Code";
import "./App.css";
import Watermark from "./components/watermark/Watermark";
import FlowChart from "./components/flowchart/FlowChart";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <Watermark /> {/* Add the Watermark component */}
      <div className="main-content">
        <section id="home">{loading ? <Shimmer /> : <Home />}</section>
        <section id="model-architecture">
          {loading ? <Shimmer /> : <ModelArchitecture />}
        </section>
        <section id="accuracy">{loading ? <Shimmer /> : <Accuracy />}</section>
        <section id="methodology">
          {loading ? <Shimmer /> : <Methodology />}
        </section>
        <section id="codebox">
          {loading ? <Shimmer /> : <CodeBox code={PythonCode} />}
        </section>
        <section id="contact">{loading ? <Shimmer /> : <Contact />}</section>
        <section id="others">{loading ? <Shimmer /> : <Others />}</section>
        <section id="flowchart">
          {loading ? <Shimmer /> : <FlowChart />}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
