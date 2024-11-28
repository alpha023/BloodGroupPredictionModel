// import React, { useEffect, useState } from 'react';
// import './watermark.css'; // Import the CSS file

// const bloodGroups = ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'];

// const Watermark = () => {
//   const [positions, setPositions] = useState([]);

//   // Generate random positions for the watermark
//   useEffect(() => {
//     const randomPositions = [];
//     const numberOfWatermarks = 30; // Increase the number to cover the whole page

//     // Loop to create random positions for each watermark
//     for (let i = 0; i < numberOfWatermarks; i++) {
//       const randomX = Math.random() * 100; // Percentage of X position
//       const randomY = Math.random() * 100; // Percentage of Y position
//       const randomGroup = bloodGroups[Math.floor(Math.random() * bloodGroups.length)];

//       randomPositions.push({
//         x: randomX,
//         y: randomY,
//         text: randomGroup,
//       });
//     }

//     setPositions(randomPositions);
//   }, []);

//   return (
//     <>
//       {positions.map((pos, index) => (
//         <div
//           key={index}
//           className="watermark" // Apply the watermark class for styling
//           style={{
//             left: `${pos.x}%`,
//             top: `${pos.y}%`,
//           }}
//         >
//           {pos.text}
//         </div>
//       ))}
//     </>
//   );
// };

// export default Watermark;


// *****************************************
import React, { useEffect, useState } from 'react';
import './watermark.css';

const bloodGroups = ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'];

const Watermark = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const generateWatermarks = () => {
      const watermarkPositions = [];
      const numberOfWatermarks = 20; // Number of watermarks to scatter across the app

      for (let i = 0; i < numberOfWatermarks; i++) {
        const randomX = Math.random() * 100; // Random percentage for X position
        const randomY = Math.random() * 100; // Random percentage for Y position
        const randomGroup = bloodGroups[Math.floor(Math.random() * bloodGroups.length)];

        watermarkPositions.push({
          x: randomX,
          y: randomY,
          text: randomGroup,
        });
      }

      setPositions(watermarkPositions);
    };

    generateWatermarks();
  }, []);

  return (
    <>
      {positions.map((pos, index) => (
        <div
          key={index}
          className="watermark"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
          }}
        >
          {pos.text}
        </div>
      ))}
    </>
  );
};

export default Watermark;
