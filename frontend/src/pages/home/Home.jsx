import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import bloodDropImage from "../blood.png";

const Home = () => {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen"); // For showing file name
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    setAnimateTitle(true);
  }, []);
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // const handleFileChange = (e) => {
  //   const uploadedFile = e.target.files[0];
  //   if (uploadedFile) {
  //     setFile(uploadedFile);
  //     setFileName(uploadedFile.name); // Update the file name display
  //   } else {
  //     setFileName("No file chosen");
  //   }
  // };

  // const handlePredict = async () => {
  //   if (!file) {
  //     alert("Please upload a fingerprint image before predicting.");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     const response = await axios.post(
  //       "http://localhost:5000/predict",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     setPrediction(`Predicted Blood Group: ${response.data.prediction}`);
  //   } catch (error) {
  //     console.error("Error fetching prediction:", error);
  //     alert("Failed to fetch prediction. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setSelectedFile(uploadedFile);
      setFileName(uploadedFile.name); // Update the file name display
    } else {
      setFileName("No file chosen");
    }
    // setSelectedFile(event.target.files[0]);
    setFileName(uploadedFile.name);
  };

  const handlePrediction = async () => {
    if (!selectedFile) return;
        setLoading(true);
    try {
      const base64Image = await convertToBase64(selectedFile);
      const imageData = base64Image.split(",")[1]; // Remove base64 header

      const response = await axios.post("http://127.0.0.1:5000/predict", {
        image: imageData,
      });

      setResult(`Predicted Blood Group: ${response.data.blood_group}`);
    } catch (error) {
      console.error("Error predicting blood group:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-section">
        <div className="home-content gradient-animate-background-home top-faded-border bottom-faded-border left-faded-border right-faded-border">
          <h1 className={animateTitle ? "animate-text" : ""}>
            Welcome to Blood Group Prediction
          </h1>
          <img
            src={bloodDropImage}
            alt="Blood Drop"
            className="blood-drop-image"
          />
          <p>Upload your fingerprint to get started.</p>

          {/* File Upload Section */}
          <div className="file-upload">
            <label className="upload-label">
              Upload Fingerprint
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
              />
            </label>
            <span className="file-name">{fileName}</span>
          </div>

          {/* Predict Button */}
          <button
            className="btn predict-btn"
            onClick={handlePrediction}
            disabled={loading}
          >
            {loading ? <div className="spinner"></div> : "Predict"}
          </button>

          {/* Prediction Result */}
          {result && <p className="prediction-result">{result}</p>}
        </div>
      </div>
    </section>
  );
};

export default Home;
