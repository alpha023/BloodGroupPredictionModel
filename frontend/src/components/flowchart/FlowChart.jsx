import React from "react";
import ReactFlow, { Background, Controls } from "react-flow-renderer";

const nodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Fingerprint Collection" },
    position: { x: 50, y: 50 },
    style: { background: "#FF6B6B", color: "#fff" },
  },
  {
    id: "2",
    data: { label: "Dataset" },
    position: { x: 50, y: 150 },
    style: { background: "#FFD93D" },
  },
  {
    id: "3",
    data: { label: "Image Preprocessing" },
    position: { x: 50, y: 250 },
    style: { background: "#FFD93D" },
  },
  {
    id: "4",
    data: { label: "Feature Extraction" },
    position: { x: 250, y: 150 },
    style: { background: "#FFD93D" },
  },
  {
    id: "5",
    data: { label: "Model Training" },
    position: { x: 50, y: 350 },
    style: { background: "#FFD93D" },
  },
  {
    id: "6",
    type: "default",
    data: { label: "Model Evaluation" },
    position: { x: 250, y: 350 },
    style: { background: "#FF6B6B", color: "#fff" },
  },
  {
    id: "7",
    data: { label: "Performance Tuning" },
    position: { x: 450, y: 250 },
    style: { background: "#FFD93D" },
  },
  {
    id: "8",
    data: { label: "Blood Group Prediction" },
    position: { x: 450, y: 450 },
    style: { background: "#000", color: "#fff" },
  },
  {
    id: "9",
    data: { label: "Web Application" },
    position: { x: 650, y: 450 },
    style: { background: "#FFD93D" },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-5", source: "3", target: "5", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e4-6", source: "4", target: "6", animated: true },
  { id: "e5-6", source: "5", target: "6", animated: true },
  { id: "e6-7", source: "6", target: "7", animated: true },
  { id: "e7-8", source: "7", target: "8", animated: true },
  { id: "e8-9", source: "8", target: "9", animated: true },
];

const FlowChart = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
