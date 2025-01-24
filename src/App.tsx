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
import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import "./App.css";
import CategoryCard from "./CategoryCard";

const App: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const categories = [
    {
      category: "Music",
      items: ["Happy - Pharrell Williams", "Katrina and the Waves"],
    },
    {
      category: "Movies",
      items: [ "The Dark Knight", "Interstellar"],
    },
    {
      category: "Novels",
      items: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"],
    },
    {
      category: "Quotes",
      items: [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Life is what happens when you're busy making other plans.",
      ],
    },
    {
      category: "Jokes",
      items: ["Why don't scientists trust atoms? Because they make up everything!"],
    },
    {
      category: "Books",
      items: ["Sapiens - Yuval Noah Harari", "Atomic Habits - James Clear"],
    },
  ];
  // Function to capture a selfie
  const captureSelfie = () => {
    if (webcamRef.current) {
      const capturedImage = webcamRef.current.getScreenshot();
      console.log(capturedImage);
      setImage(capturedImage); // Save the captured image
      setShowWebcam(false); // Close the webcam after capturing
    }
  };

  // Function to handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to get recommendations
  const handleGetRecommendations = () => {
    if (image) {
      console.log("Get recommendations for the image:", image);
      alert("Recommendations generated successfully!");
    }
  };

  return (
    <div className="main-container text-center">
      <h1 className="main-title mb-4">EmotionalEcho : Your Mood, Your World of Inspiration</h1>

      <div className="upload-photo-container">
        {/* Image Preview */}
        {image ? (
          <img src={image} alt="Captured or Uploaded" className="photo-preview" />
        ) : (
          <div className="photo-placeholder mt-2 mb-3">
            <img src="/src/assets/placeholder-img.avif" className="placeholder-img" alt="" />
          </div>
        )}
<div className="d-flex flex-column flex-sm-row justify-content-center">
   {/* Upload Photo Button */}
        {!image && (
          <label className="upload-button button-29">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              className="file-input"
              onChange={handleImageUpload}
            />
          </label>
        )}

        {/* Take Selfie Button */}
        <button
          className="upload-button button-29"
          onClick={() => setShowWebcam(true)}
        >
          {image ? "Retake Selfie" : "Take Selfie"}
        </button>  
        {/* Get Recommendations Button */}
        {image && (
          <button
            className="upload-button button-29"
            onClick={handleGetRecommendations}
          >
            Get Recommendations
          </button>
        
          
        )}
</div>
       

      
      </div>
        <p className="text-center mt-3 recommendations-txt">Recommendations for you</p>

        <div className="row mt-2 mb-3 recommendations-txt-container" style={{margin: "auto", maxWidth: "600px"}}>

        </div>
        <div className="row mt-2 mb-3" style={{margin: "auto", maxWidth: "800px"}}>
        {categories.map((data, index) => (
          <div key={index} className="col-md-4 mb-4 gap-3"> 
            <CategoryCard category={data.category} items={data.items} />
          </div>
        ))}
      </div>
      {/* Webcam Component */}
      {showWebcam && (
        <div className="webcam-container">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            className="webcam"
          />
          <button className="capture-button" onClick={captureSelfie}>
            Capture Photo
          </button>
          <button className="close-button" onClick={() => setShowWebcam(false)}>
            Close
          </button>
        </div>
      )}
      <p className="text-center mt-3  text-white">Made with ❤️ at KH.</p>

    </div>
  );
};

export default App;
