import React from "react";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import chinaimg from "./../src/china.jpg";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import CarouselDefault from "./components/VideoCarousel"
export default function Frontpage() {
  return (
    <div className="front-page">
      <Navbar />
      <div
        className="intro text-white bg-cover bg-center relative"
        style={{ backgroundImage: `url(${chinaimg})`, height: "100vh" }}
      >
        <div className="contact flex flex-col justify-center items-center absolute inset-0">
          <h1 className="text-4xl mb-4">
            Book an appointment to talk with Niranjan.
          </h1>
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Book Appointment</button>
        </div>
      </div>
    <div className="contact my-10 p-10 flex justify-center gap-10">
      <ContactForm />
      <ContactForm />
    </div>
    <div className="abt-me flex flex-col justify-center">
      {/* <Car/> */}
      <Aboutme/>
    </div>
    <div className="carosal"> 

    </div>
    <div className="gellary">

    </div>
     <div className="footer">
      <Footer/>
     </div>

     {/* <div className="caro">
      <CarouselDefault/>
     </div> */}
      
    </div>
  );
}
