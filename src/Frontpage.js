import React from "react";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import chinaimg from "./../src/china.jpg";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import VideoCarousel from "./components/VideoCarousel";
import ImagePop from "./components/popups/ImagePop";
import { useState } from "react";
import { Modal, Box } from "@mui/material";
import up from "./up.jpg"
const videos = [
  "https://www.youtube.com/embed/LXb3EKWsInQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
];

export default function Frontpage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  }
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const [isPopupOpenx, setIsPopupOpenx] = useState(false);
  const handleOpenPopupx = () => {
    setIsPopupOpenx(true);
  }
  const handleClosePopupx = () => {
    setIsPopupOpenx(false);
  };
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
          <div>
            <button
              type="button"
              onClick={handleOpenPopup}
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Book An Appointment
            </button>
            <ImagePop open={isPopupOpen} handleClose={handleClosePopup} />
          </div>
          <div>
          </div>
        </div>
      </div>
      {/* <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700 w-1/2 mx-auto"/> */}
      <div className="contact my-10 p-8 flex flex-col gap-4">
        {/* <div>
          <Upcomming />
        </div>
        <div className="mx-10">
          <ContactForm />
        </div> */}
        <h1 className="flex justify-center text-5xl">Upcomming Events</h1>
        <p className="text-2xl flex justify-center">Explore upcoming business trips, opportunities, and events  {" "}
          <span
            onClick={handleOpenPopupx}
            className="text-blue-500 cursor-pointer underline ml-2"
          >
            See More
          </span>
        </p>
        <Modal open={isPopupOpenx} onClose={handleClosePopupx}>
          <Box
            className="rounded-lg shadow-lg p-4"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              width: "90%",
              maxWidth: "650px",
            }}
          >
            <h2 className="text-xl font-semibold mb-4">More Information</h2>
            <img
              src={up}
              alt="Upcoming Event"
              className="w-full h-auto rounded-lg"
            />
          </Box>
        </Modal>
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
