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
        className="rounded-lg shadow-lg p-10 text-white"
        style={{
          backgroundColor: "rgb(255,255,255)", //background color of popup
          maxWidth: "500px",
          margin: "auto",
          marginTop: "10%",
          outline: "none",
        }}
      >
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-4 flex justify-center">Contact Form</h2>
            <form className="bg-[#071e2e] rounded-lg p-20 ">
              <div className="mb-4">

                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                />
              </div>
              <div className="mb-4">

                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                />

              </div>
              <div className="mb-4">

                <input
                  type="text"
                  id="message"

                  placeholder="Mobile (Optional)"
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                ></input>
              </div>

              <div className="mb-4">

                <input
                  type="text"
                  id="message"

                  placeholder="Reason for contact"
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                ></input>
              </div>
            </form>
            <div className="flex justify-center my-5">
              <Button
                onClick={handleNext}
                variant="contained"
                // sx={{ backgroundColor: "#D9D9D9", color: "black", '&:hover': { backgroundColor: "#B3B3B3" } }}
                sx={{
                  color: "white", // text-white
                  backgroundColor: "#1f2937", // bg-gray-800
                  "&:hover": {
                    backgroundColor: "#111827", // hover:bg-gray-900
                  },
                  "&:focus": {
                    outline: "none", // focus:outline-none
                    ringColor: "#d1d5db", // focus:ring-4 focus:ring-gray-300
                    ringWidth: 4, // Not directly supported in CSS, MUI doesn't handle focus rings like Tailwind
                  },
                  fontWeight: 500, // font-medium
                  borderRadius: "9999px", // rounded-full
                  fontSize: "0.875rem", // text-sm (14px)
                  padding: "10px 20px", // px-5 py-2.5
                  marginEnd: "0.5rem", // me-2 (for RTL support, otherwise use `marginRight`)
                  marginBottom: "0.5rem", // mb-2
                  "@media (prefers-color-scheme: dark)": {
                    backgroundColor: "#1f2937", // dark:bg-gray-800
                    "&:hover": {
                      backgroundColor: "#374151", // dark:hover:bg-gray-700
                    },
                    "&:focus": {
                      ringColor: "#374151", // dark:focus:ring-gray-700
                    },
                    borderColor: "#374151", // dark:border-gray-700
                  },
                }}
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
                //sx={{ backgroundColor: "#D9D9D9", color: "black", '&:hover': { backgroundColor: "#B3B3B3" } }}
                sx={{
                  color: "white", // text-white
                  backgroundColor: "#1f2937", // bg-gray-800
                  "&:hover": {
                    backgroundColor: "#111827", // hover:bg-gray-900
                  },
                  "&:focus": {
                    outline: "none", // focus:outline-none
                    ringColor: "#d1d5db", // focus:ring-4 focus:ring-gray-300
                    ringWidth: 4, // Not directly supported in CSS, MUI doesn't handle focus rings like Tailwind
                  },
                  fontWeight: 500, // font-medium
                  borderRadius: "9999px", // rounded-full
                  fontSize: "0.875rem", // text-sm (14px)
                  padding: "10px 20px", // px-5 py-2.5
                  marginEnd: "0.5rem", // me-2 (for RTL support, otherwise use `marginRight`)
                  marginBottom: "0.5rem", // mb-2
                  "@media (prefers-color-scheme: dark)": {
                    backgroundColor: "#1f2937", // dark:bg-gray-800
                    "&:hover": {
                      backgroundColor: "#374151", // dark:hover:bg-gray-700
                    },
                    "&:focus": {
                      ringColor: "#374151", // dark:focus:ring-gray-700
                    },
                    borderColor: "#374151", // dark:border-gray-700
                  },
                }}
              >
                Back
              </Button>
              <Button onClick={handleClose} variant="contained"
                // sx={{ backgroundColor: "#D9D9D9", color: "black", '&:hover': { backgroundColor: "#B3B3B3" } }}
                sx={{
                  color: "white", // text-white
                  backgroundColor: "#1f2937", // bg-gray-800
                  "&:hover": {
                    backgroundColor: "#111827", // hover:bg-gray-900
                  },
                  "&:focus": {
                    outline: "none", // focus:outline-none
                    ringColor: "#d1d5db", // focus:ring-4 focus:ring-gray-300
                    ringWidth: 4, // Not directly supported in CSS, MUI doesn't handle focus rings like Tailwind
                  },
                  fontWeight: 500, // font-medium
                  borderRadius: "9999px", // rounded-full
                  fontSize: "0.875rem", // text-sm (14px)
                  padding: "10px 20px", // px-5 py-2.5
                  marginEnd: "0.5rem", // me-2 (for RTL support, otherwise use `marginRight`)
                  marginBottom: "0.5rem", // mb-2
                  "@media (prefers-color-scheme: dark)": {
                    backgroundColor: "#1f2937", // dark:bg-gray-800
                    "&:hover": {
                      backgroundColor: "#374151", // dark:hover:bg-gray-700
                    },
                    "&:focus": {
                      ringColor: "#374151", // dark:focus:ring-gray-700
                    },
                    borderColor: "#374151", // dark:border-gray-700
                  },
                }}
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
