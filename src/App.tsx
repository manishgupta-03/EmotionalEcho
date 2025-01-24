// import React, { useState } from "react";
// import "./App.css";

// const App: React.FC = () => {
//   const [image, setImage] = useState<string | null>(null);

//   // Function to handle image upload from the file picker
//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Function to handle selfie capture using the device's camera
//   const handleSelfieCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="main-container text-center">
//       <div className="upload-photo-container">
//         {/* Image Preview */}
//         {image ? (
//           <img src={image} alt="Captured or Uploaded" className="photo-preview" />
//         ) : (
//           <div className="photo-placeholder"></div>
//         )}

//         {/* Upload Photo Button */}
//         <label className="upload-button">
//           Upload Photo
//           <input
//             type="file"
//             accept="image/*"
//             className="file-input"
//             onChange={handleImageUpload}
//           />
//         </label>

//         {/* Take Selfie Button */}
//         <label className="upload-button">
//           Take Selfie
//           <input
//             type="file"
//             accept="image/*"
//             capture="user" // Activates the front camera for selfies
//             className="file-input"
//             onChange={handleSelfieCapture}
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useRef } from "react";
// import Webcam from "react-webcam";
// import "./App.css";

// const App: React.FC = () => {
//   const [image, setImage] = useState<string | null>(null);
//   const [showWebcam, setShowWebcam] = useState(false);
//   const webcamRef = useRef<Webcam>(null);

//   // Function to capture a selfie
//   const captureSelfie = () => {
//     if (webcamRef.current) {
//       const capturedImage = webcamRef.current.getScreenshot();
//       setImage(capturedImage); // Save the captured image
//       setShowWebcam(false); // Close the webcam after capturing
//     }
//   };

//   // Function to handle image upload
//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="main-container text-center">
//       <div className="upload-photo-container">
//         {image ? (
//           <img src={image} alt="Captured or Uploaded" className="photo-preview" />
//         ) : (
//           <div className="photo-placeholder"></div>
//         )}

//         <label className="upload-button">
//           Upload Photo
//           <input
//             type="file"
//             accept="image/*"
//             className="file-input"
//             onChange={handleImageUpload}
//           />
//         </label>

//         <button className="upload-button" onClick={() => setShowWebcam(true)}>
//           Take Selfie
//         </button>
//       </div>

//       {/* Webcam Component */}
//       {showWebcam && (
//         <div className="webcam-container">
//           <Webcam
//             ref={webcamRef}
//             audio={false}
//             screenshotFormat="image/jpeg"
//             className="webcam"
//           />
//           <button className="capture-button" onClick={captureSelfie}>
//             Capture Photo
//           </button>
//           <button className="close-button" onClick={() => setShowWebcam(false)}>
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// import React, { useState, useRef } from "react";
// import Webcam from "react-webcam";
// import "./App.css";

// const App: React.FC = () => {
//   const [image, setImage] = useState<string | null>(null);
//   const [showWebcam, setShowWebcam] = useState(false);
//   const webcamRef = useRef<Webcam>(null);

//   // Function to capture a selfie
//   const captureSelfie = () => {
//     if (webcamRef.current) {
//       const capturedImage = webcamRef.current.getScreenshot();
//       setImage(capturedImage); // Save the captured image
//       setShowWebcam(false); // Close the webcam after capturing
//     }
//   };

//   // Function to handle image upload
//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="main-container text-center">
//       <div className="upload-photo-container">
//         {/* Image Preview */}
//         {image ? (
//           <img src={image} alt="Captured or Uploaded" className="photo-preview" />
//         ) : (
//           <div className="photo-placeholder"></div>
//         )}

//         {/* Upload Photo / Get Recommendations Button */}
//         <label className="upload-button">
//           {image ? "Get Recommendations" : "Upload Photo"}
//           <input
//             type="file"
//             accept="image/*"
//             className="file-input"
//             onChange={handleImageUpload}
//           />
//         </label>

//         <button
//           className="upload-button"
//           onClick={() => (showWebcam ? setShowWebcam(false) : setShowWebcam(true))}
//         >
//           {image && !showWebcam ? "Retake Selfie" : "Take Selfie"}
//         </button>
//       </div>

//       {/* Webcam Component */}
//       {showWebcam && (
//         <div className="webcam-container">
//           <Webcam
//             ref={webcamRef}
//             audio={false}
//             screenshotFormat="image/jpeg"
//             className="webcam"
//           />
//           <button className="capture-button" onClick={captureSelfie}>
//             Capture Photo
//           </button>
//           <button className="close-button" onClick={() => setShowWebcam(false)}>
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import React from "react";
import "./App.css";
import WelcomePage from "./WelcomePage";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const App: React.FC = () => {

  return (

<>
<Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/main" element={<Dashboard />} />
    </Routes>
</>

  );
};

export default App;
