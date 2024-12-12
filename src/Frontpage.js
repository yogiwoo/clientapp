import React from "react";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import chinaimg from "./../src/china.jpg";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Upcomming from "./components/upcomming";
import VideoCarouselWithControls from "./components/VideoCarousel";
import VideoCarousel from "./components/VideoCarousel";

const videos = [
  "https://www.youtube.com/embed/LXb3EKWsInQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video
  "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Add more video links here
];

export default function Frontpage() {
  return (
    <div className="front-page">
      <div
        className="intro text-white bg-cover bg-center relative"
        style={{ backgroundImage: `url(${chinaimg})`, height: "100vh" }}
      >
        <Navbar />
        <div className="contact flex flex-col justify-center items-center absolute inset-0">
          <h1 className="text-6xl mb-4">
            Book an appointment to talk with Niranjan.
          </h1>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Book Appointment
          </button>
        </div>
      </div>
      {/* <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700 w-1/2 mx-auto"/> */}
      <div className="contact my-10 p-8 flex justify-between gap-4">
        <div>
          <Upcomming />
        </div>
        <div className="mx-10">
          <ContactForm />
        </div>
      </div>
      {/* <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700 w-1/2 mx-auto"/> */}
      <div className="abt-me flex flex-col justify-center">
        <Aboutme />
      </div>
      <div className="videos flex justify-center p-20">
        <VideoCarousel slides={videos} />
      </div>
      <div className="footer">
        <Footer />
      </div>

      {/* <div className="caro">
      <VideoCarouselWithControls/>
     </div> */}
    </div>
  );
}
