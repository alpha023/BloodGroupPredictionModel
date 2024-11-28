// src/components/FingerprintCapture.js
import React, { useState,useRef } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const FingerprintCapture = ({ onCapture }) => {
    const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = (webcamRef) => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    if (onCapture) {
      onCapture(imageSrc); // Pass captured image to parent component
    }
  };

  return (
    <div className="capture-container">
      <h2>Capture Fingerprint</h2>
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        width="100%"
        videoConstraints={{
          facingMode: 'environment', // Use back camera (mobile)
        }}
        ref={webcamRef}
      />
      <button onClick={() => handleCapture(webcamRef)}>Capture</button>
      {capturedImage && (
        <div>
          <h3>Captured Fingerprint:</h3>
          <img src={capturedImage} alt="Captured Fingerprint" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default FingerprintCapture;
