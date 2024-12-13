import React, { useState, useEffect } from "react";

function ImageCarousel({ children: slides }) {
  const [curr, setCurr] = useState(0);

  // Automatic slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, 3000); // Change slides every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides]);

  return (
    <div
      className="overflow-hidden relative bg-gray-200"
      style={{ height: "288px", width: "248px" ,borderRadius:"23px"}}
    >
      {/* Slides */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {/* {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: "288px",
              height: "270px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={slide.props.src}
              alt={`Slide ${index + 1}`}
              className="object-contain rounded-md"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>
        ))} */}
         {slides.map((slide, index) => (
    <div
      key={index}
      className="flex-shrink-0 flex items-center justify-center"
      style={{
        width: "248px",
        height: "288px",
        display: "flex",
      }}
    >
      <img
        src={slide.props.src}
        alt={`Slide ${index + 1}`}
        className="object-contain rounded-md"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />
    </div>
  ))}
      </div>
    </div>
  );
}

export default ImageCarousel;