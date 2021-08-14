import React, { useState } from "react";
import "./styles.css";
// import './App.css'
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const Loading = (props) => {
  return (
    <aside className="progress-background">
      <div className="loading-bar">
        <label htmlFor="image-loaded">
          Loading all your favorite images...
        </label>
        <progress
          id="image-loaded"
          max="100"
          value={props.calculatedWidth}
        ></progress>
      </div>
    </aside>
  );
};

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);
  // const handleClick = () => {
  //   if(currentImage < images.length - 1) {
  //     setCurrentImage(currentImage + 1);
  //   } else {
  //     setCurrentImage(0)
  //   }
  // }

  const handleClick = () => {
    setCurrentImage((currentImage) => {
      const length = images.length - 1;
      return currentImage < length ? currentImage + 1 : 0;

      // if(currentImage < length) {
      //   return currentImage + 1;
      // } else {
      //   return 0;
      // }
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => {
      return numLoaded + 1;
    });
  };

  return (
    <section className="App">
      <header className="title">
        <h1>Zesty</h1>
        <h2>
          Paragraph: A photography project <br />
          by Ella Fieldling
        </h2>
      </header>

      <figure className="container">
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}

        <div className="h3">
          {currentImage + 1} / {images.length}
        </div>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hidden"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
