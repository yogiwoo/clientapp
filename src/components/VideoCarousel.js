import React from "react";
import Slider from "react-slick";
import "./vid.css"

const VideoCarousel = () => {
  const videos = [
    "https://www.youtube.com/embed/Lm6G3x7AKV0",
    "https://www.youtube.com/embed/WeUg054JWlY" ,
    
  ];

  const settings = {
    dots: true, // Show dots below the carousel
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: false, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay every 3 seconds
    arrows: true, // Show next/previous arrows
    responsive: [
      {
        breakpoint: 1024, // Tablet and desktop
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          arrows: false, // Disable arrows on mobile for better UX
        },
      },
    ],
  };

  return (
    <div className="flex justify-center bg-[#071E2E] p-10 " style={{borderRadius:"23px"}}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} style={{ position: "relative", padding: "10px" }}>
            <iframe
              width="100%"
              height="400"
              src={video}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default VideoCarousel;
