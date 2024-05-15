import React, { useState, useRef, useEffect } from "react";
import logo1 from "./images/PNG.png";
import emailjs from '@emailjs/browser';

const Form = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("Individual");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const formRef = useRef();

  const validateForm = () => {
    // Check if all required fields are filled
    const isNameValid = name.trim() !== "";
    const isEmailValid = email.trim() !== "";
    const isPhoneNumberValid = phoneNumber.trim() !== "" && phoneNumber.length === 10; // Assuming phone number is required and must be 10 digits
  
    // Update form validation state based on field validity
    setIsFormValid(isNameValid && isEmailValid && isPhoneNumberValid);
  };

  useEffect(() => {
    validateForm();
  }, [name, email, phoneNumber]);
  

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o8wpxse', 'template_zvcnroz', form.current, {
        publicKey: 'cLn7W-9LdheIYsOUR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
          setShowThanks(true);
          setTimeout(() => {
            setShowThanks(false);
            onClose(); // Close the form popup
          }, 2000)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (submitted) {
      setShowThanks(true);
      setTimeout(() => setShowThanks(false), 5000); // 5 seconds
    }
  }, [submitted]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose(); // Close the form if click is outside the form container
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  
  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      <img src={logo1} alt="Logo" className="w-16 h-16 mb-8" />
      {!submitted && (
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="mt-8 max-w-md mx-auto p-6 border border-gray-300 rounded-lg relative"
        >
            <button className="absolute top-0 right-0 m-4 z-50" onClick={handleClose}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">Name*</label>
            <input
              type="text"
              id="firstName"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
            <input
              type="tel" // Change to tel type for better mobile support
              id="phNumber"
              name="phNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))} // Limit to 10 digits
              className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userType" className="block text-gray-700 font-bold mb-2">User Type*</label>
            <select
              id="userType"
              name="userType"
              value={userType}
              onChange={handleUserTypeChange}
              className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="Individual">Individual</option>
              <option value="Company">Company</option>
            </select>
          </div>
          {userType === "Company" && (
            <>
              <div className="mb-4">
                <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">Company Name*</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Company Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="designation" className="block text-gray-700 font-bold mb-2">Designation*</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Designation"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="bg-green-500 mt-6 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full"
            disabled={!isFormValid}
          >
            Submit


          </button>
        </form>
      )}
      {submitted && (
        <div className="text-center p-4">
          <div className={`${showThanks ? "block" : "hidden"}`}>
            <p className="text-xl font-bold text-green-500">Thank you for your response!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
