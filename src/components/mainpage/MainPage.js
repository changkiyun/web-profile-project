import React, { useEffect } from "react";
import "./MainPage.css";

const images = [

  {
    src: "/images/image4.jpg",
    alt: "Image 1",
    description: "Test description \nTest description",
  },
  {
    src: "/images/image5.jpg",
    alt: "Image 2",
    description: "Test description",
  },
  {
    src: "/images/image6.jpg",
    alt: "Image 3",
    description: "Test description",
  },  
  {
    src: "/images/image7.jpg",
    alt: "Image 3",
    description: "Test description",
  },      
  {
    src: "/images/image4.jpg",
    alt: "Image 1",
    description: "Test description \nTest description",
  },
  {
    src: "/images/image5.jpg",
    alt: "Image 2",
    description: "Test description",
  },
  {
    src: "/images/image6.jpg",
    alt: "Image 3",
    description: "Test description",
  },  
  {
    src: "/images/image7.jpg",
    alt: "Image 3",
    description: "Test description",
  },      
  {
    src: "/images/image4.jpg",
    alt: "Image 1",
    description: "Test description \nTest description",
  },
  {
    src: "/images/image5.jpg",
    alt: "Image 2",
    description: "Test description",
  },
  {
    src: "/images/image6.jpg",
    alt: "Image 3",
    description: "Test description",
  },  
  {
    src: "/images/image7.jpg",
    alt: "Image 3",
    description: "Test description",
  },

];

const MainPage = () => {
  return (
    <div className="mainpage">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <div className="image-wrapper">
            <img src={image.src} alt={image.alt} />
          </div>
          <p className="image-description">
            {image.description.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
