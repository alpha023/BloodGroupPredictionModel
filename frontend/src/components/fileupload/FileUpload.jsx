import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState("");

  // Convert image to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePrediction = async () => {
    if (!selectedFile) return;

    try {
      const base64Image = await convertToBase64(selectedFile);
      const imageData = base64Image.split(",")[1]; // Remove base64 header

      const response = await axios.post("http://127.0.0.1:5000/predict", {
        image: imageData,
      });

      setResult(`Predicted Blood Group: ${response.data.blood_group}`);
    } catch (error) {
      console.error("Error predicting blood group:", error);
    }
  };

  return (
    <div>
      {/* <h2>Predict Blood Group from Fingerprint</h2> */}
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handlePrediction}>Predict</button>
      <p>{result}</p>
    </div>
  );
};

export default FileUpload;
