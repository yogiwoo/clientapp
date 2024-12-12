// ContactFormPopup.js
import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";

const ContactFormPopup = ({ open, handleClose }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="contact-form-modal">
      <Box
        className="rounded-lg shadow-lg p-6 text-white"
        style={{
          backgroundColor: "rgb(7,30,46)",
          maxWidth: "500px",
          margin: "auto",
          marginTop: "10%",
          outline: "none",
        }}
      >
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-4 flex justify-center">Contact Form</h2>
            <form>
              <div className="mb-4">
                {/* <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label> */}
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                />
              </div>
              <div className="mb-4">
                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label> */}
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                />
                
              </div>
              <div className="mb-4">
                {/* <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label> */}
                <input
                type="text"
                  id="message"
                 
                  placeholder="Mobile (Optional)"
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                ></input>
              </div>

              <div className="mb-4">
                {/* <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label> */}
                <input
                type="text"
                  id="message"
                 
                  placeholder="Reason for contact"
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                ></input>
              </div>
            </form>
            <div className="flex justify-center">
            <Button
              onClick={handleNext}
              variant="contained"
              sx={{ backgroundColor: "#D9D9D9", color: "black", '&:hover': { backgroundColor: "#B3B3B3" } }}
              className="mt-4"
              
            >
              Next
            </Button>
            </div>
         
          </>
        )}
        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Second Step</h2>
            <p>This is the second step. You can add more content here.</p>
            <div className="flex justify-between mt-6">
              <Button onClick={handleBack} variant="contained"
              sx={{ backgroundColor: "#D9D9D9", color: "black", '&:hover': { backgroundColor: "#B3B3B3" } }}
              >
                Back
              </Button>
              <Button onClick={handleClose} variant="contained"
               sx={{ backgroundColor: "#D9D9D9", color: "black", '&:hover': { backgroundColor: "#B3B3B3" } }}
              >
                Proceed
              </Button>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ContactFormPopup;
