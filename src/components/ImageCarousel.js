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
      className="overflow-hidden relative bg-gray-200 rounded-lg"
      style={{ height: "288px", width: "275px" }}
    >
      {/* Slides */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: "275px",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={slide.props.src}
              alt={`Slide ${index + 1}`}
              className="object-contain rounded-md"
              style={{ maxHeight: "80%", maxWidth: "90%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;