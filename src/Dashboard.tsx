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
import { generateContent, getRecommendation } from "./GetRecommendations.crud";


const Dashboard: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const [showRecommendations, setShowRecommendations] = useState(false); // New state to toggle recommendations
  const response = {
    quotes: [
      "Happiness is not a destination, it's a way of traveling.",
      "The best way to cheer yourself is to try to cheer somebody else up.",
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      "Happiness is a warm puppy.",
      "The only thing that will make you happy is being happy with who you are.",
    ],
    movies: [
      { title: "Singin' in the Rain", genre: "Musical, Romance, Comedy" },
      { title: "Chef", genre: "Comedy, Drama" },
      { title: "Paddington 2", genre: "Family, Comedy, Adventure" },
      { title: "The Princess Bride", genre: "Adventure, Family, Fantasy" },
      { title: "Little Miss Sunshine", genre: "Comedy, Drama, Road Trip" },
    ],
    music: [
      { artist: "Lizzo", song: "Good as Hell", genre: "Pop" },
      { artist: "Pharrell Williams", song: "Happy", genre: "Pop" },
      { artist: "Earth, Wind & Fire", song: "September", genre: "Funk, Soul" },
      { artist: "The Beach Boys", song: "Good Vibrations", genre: "Pop, Rock" },
      { artist: "Bill Withers", song: "Lovely Day", genre: "Soul" },
    ],
    books: [
      {
        title: "The House in the Cerulean Sea",
        author: "T.J. Klune",
        genre: "Fantasy",
      },
      {
        title: "A Psalm for the Wild-Built",
        author: "Becky Chambers",
        genre: "Science Fiction",
      },
      {
        title: "The Rosie Project",
        author: "Graeme Simsion",
        genre: "Romance",
      },
      {
        title: "Anne of Green Gables",
        author: "L.M. Montgomery",
        genre: "Classic",
      },
      {
        title: "Eleanor Oliphant Is Completely Fine",
        author: "Gail Honeyman",
        genre: "Contemporary Fiction",
      },
    ],
    jokes: [
      "Why don't scientists trust atoms? Because they make up everything!",
      "What do you call a lazy kangaroo? Pouch potato.",
      "What do you call a fish with no eyes? Fsh.",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    ],
    helplines: ["Bharat-helpline.com"],
    major_recommendations:
      "Don't feel alone we are there for your help, just sit with calm mind.",
  };
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
//   const handleGetRecommendations = () => {
//     if (image) {
//         setShowRecommendations(true);
//       console.log("Get recommendations for the image:", image);
//       alert("Recommendations generated successfully!");
//     }
//   };
const handleGetRecommendations = async () => {
    if (image) {
      try {
        const base64Data = image.split(",")[1]; 

        // const response = await getRecommendation({ base64: base64Data });
        const response = await generateContent("Happy");
        console.log("API Response:", response.data);
        const jsonMatch = response.data.candidates[0].contents.parts[0].text.match(/```json([\s\S]*?)```/);

            if (jsonMatch) {
            const jsonString = jsonMatch[1].trim(); // Extract and trim the JSON part
            try {
                const parsedJson = JSON.parse(jsonString); // Parse JSON string into an object
                console.log("Extracted JSON:", parsedJson);
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
            } else {
            console.log("No JSON found in the input text.");
            }
        // setRecommendations(response.data); 
        // setShowRecommendations(true); 
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        alert("Failed to fetch recommendations. Please try again.");
      }
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
    
    {showRecommendations && (
    <div>
                <p className="text-center mt-3 recommendations-txt">Recommendations for you</p>

        <div className="row mt-2 mb-3 recommendations-txt-container" style={{margin: "auto", maxWidth: "600px"}}>
        <p className="m-auto">{response.major_recommendations}</p>
        </div>
        {/* <div className="row mt-2 mb-3" style={{margin: "auto", maxWidth: "800px"}}>
        {categories.map((data, index) => (
          <div key={index} className="col-md-4 mb-4 gap-3"> 
            <CategoryCard category={data.category} items={data.items} />
          </div>
        ))}
      </div> */}
      <div className="row mt-2 mb-3" style={{ margin: "auto", maxWidth: "800px" }}>
        {Object.keys(response).map((key, index) => {
          if (key === "major_recommendations" || key === "helplines") return null;
          const categoryName =
            key.charAt(0).toUpperCase() + key.slice(1); // Capitalize category name
          const items =
            key === "movies"
              ? response[key].map((movie: any) => `${movie.title} (${movie.genre})`)
              : key === "music"
              ? response[key].map(
                  (track: any) =>
                    `${track.artist} - ${track.song} (${track.genre})`
                )
              : key === "books"
              ? response[key].map(
                  (book: any) =>
                    `${book.title} by ${book.author} (${book.genre})`
                )
              : response[key];
          return (
            <div key={index} className="col-md-4 mb-4 gap-3">
              <CategoryCard category={categoryName} items={items} />
            </div>
          );
        })}
      </div>
       </div>)}
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
      <div className="text-center   text-white">Made with ❤️ at KH.</div>

    </div>

  );
};

export default Dashboard;
