import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function VideoCarousel({ slides }) {
  const [curr, setCurr] = useState(0);

  // Navigate to the previous slide
  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  // Navigate to the next slide
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div
      className="overflow-hidden relative bg-gray-200 rounded-lg"
      style={{ height: "500px", width: "150vh" }}
    >
      {/* Slides */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {slides.map((videoUrl, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: "150vh",
              height: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <iframe
              width="1080"
              height="480"
              src={videoUrl}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default VideoCarousel;
