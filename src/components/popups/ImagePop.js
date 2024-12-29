// ContactFormPopup.js

import React, { useState, useEffect } from "react";
import { Modal, Box, Button } from "@mui/material";
const ContactFormPopup = ({ open, handleClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const url=process.env.REACT_APP_URL
//const url="http://localhost:8080"
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleNext = async () => {
    setStep((prev) => prev + 1);
  };
  const sendMail = async () => {
    // Send email when on Step 1
    try {
      const response = await fetch(`${url}/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.text();
      console.log(data);
      // alert("Email sent successfully.");
      setStep((prev) => prev + 1);
    } catch (error) {
      console.error(error);
      // alert("Failed to send email. Please try again later.");
    }
  };
  const handleBack = () => setStep((prev) => prev - 1);

  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load the Razorpay script
    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => setRazorpayLoaded(true); // Mark script as loaded
      document.body.appendChild(script);
    };

    // Check if Razorpay script is already loaded
    if (!window.Razorpay) {
      loadRazorpayScript();
    } else {
      setRazorpayLoaded(true);
    }

    return () => {
      const scriptTag = document.querySelector(
        "script[src='https://checkout.razorpay.com/v1/checkout.js']"
      );
      if (scriptTag) {
        scriptTag.remove();
      }
    };
  }, []);

  const handlePayment = async () => {
    const amount = 2500; // Replace with your dynamic amount

    const response = await fetch(`${url}/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency: "INR",
        receipt: "receipt#1",
        notes: {},
      }),
    });

    const order = await response.json();
    console.log("Order Data:", order);

    if (razorpayLoaded && window.Razorpay) {
      const options = {
        key: process.env.REACT_APP_RAZOR_KEY, // Your Razorpay key_id
        amount, // Amount in the smallest unit (e.g., paise for INR)
        currency: "INR",
        name: "Niranjan China",
        description: "Appointment Fees",
        order_id: order.id, // Order ID from your backend
        callback_url: `${url}/verify-payment`, // Success URL
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      console.error("Razorpay is not loaded");
    }
  };
 

  // const handlePayment = async () => {   
  //   const amount = 2500; // Replace with your dynamic amount
  
  //   const response = await fetch(`${url}/create-order`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       amount,
  //       currency: "INR",
  //       receipt: "receipt#1",
  //       notes: {},
  //     }),
  //   });
  
  //   const order = await response.json();
  //   console.log("Order Data:", order);
  
  //   if (razorpayLoaded && window.Razorpay) {
  //     const options = {
  //       key: "rzp_test_IQITvCg8KTKQE2", // Your Razorpay key_id
  //       amount, // Amount in the smallest unit (e.g., paise for INR)
  //       currency: "INR",
  //       name: "Niranjan China",
  //       description: "Appointment Fees",
  //       order_id: order.id, // Order ID from your backend
  //       callback_url: `${url}/verify-payment`, // Success URL
  //       prefill: {
  //         name: formData.name,
  //         email: formData.email,
  //         contact: formData.mobile,
  //       },
  //       theme: {
  //         color: "#F37254",
  //       },
  //     };
  
  //     const rzp = new window.Razorpay(options);
  
  //     // Open Razorpay payment form
  //     rzp.open();
  
  //     // Send formData to your backend after payment (in case Razorpay callback misses it)
  //     rzp.on('payment.failed', (response) => {
  //       // handle failed payment if needed
  //       console.log("Payment failed:", response.error);
  //     });
  
  //     rzp.on('payment.success', async (response) => {
  //       // Send formData and payment data to verify-payment endpoint
  //       await fetch(`${url}/verify-payment`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           razorpay_order_id: response.razorpay_order_id,
  //           razorpay_payment_id: response.razorpay_payment_id,
  //           razorpay_signature: response.razorpay_signature,
  //           formData: formData, // Send formData here
  //         }),
  //       });
  //     });
  //   } else {
  //     console.error("Razorpay is not loaded");
  //   }
  // };
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="contact-form-modal"
    >
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
            <h2 className="text-xl font-semibold mb-4 flex justify-center">
              Contact Form
            </h2>
            <form className="">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-800  text-gray-800 shadow-sm focus:ring-indigo-500 sm:text-sm p-3"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-800   text-gray-800 shadow-sm focus:ring-indigo-500 sm:text-sm p-3"
                ></input>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Email(Optional)"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-800  text-gray-800 shadow-sm  focus:ring-indigo-500 sm:text-sm p-3"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="message"
                  placeholder="Reason for contact"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-800   text-gray-800 shadow-sm focus:ring-indigo-500 sm:text-sm p-3"
                ></input>
              </div>
            </form>
            <div className="flex justify-center my-5">
              <Button
                onClick={handleNext}
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#1f2937",
                  "&:hover": {
                    backgroundColor: "#111827",
                  },
                  "&:focus": {
                    outline: "none",
                    ringColor: "#d1d5db",
                    ringWidth: 4,
                  },
                  fontWeight: 500,
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  padding: "10px 20px",
                  marginEnd: "0.5rem",
                  marginBottom: "0.5rem",
                  "@media (prefers-color-scheme: dark)": {
                    backgroundColor: "#1f2937",
                    "&:hover": {
                      backgroundColor: "#374151",
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
            <p className="text-black text-center text-xl">Proceed to pay to book your appointment.</p>
            <div className="flex justify-between mt-6">
              <Button
                onClick={handleBack}
                variant="contained"
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

              {/* proceed to payment component */}
              <Button
                onClick={() => {
                  handleClose();
                  handlePayment();
                  sendMail();
                }}
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
