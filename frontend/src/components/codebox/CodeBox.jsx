// src/components/CodeBox.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // Theme for syntax highlighting
import "./code-box.css"; // Custom styles for the component

const CodeBox = ({ code }) => {
  return (
    <section className="code-box-container">
      <h2 className="heading">Code Block</h2>
      <div className="code-box">
        <SyntaxHighlighter
            className='code-text'
          language="python"
          style={materialDark}
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};

export default CodeBox;
