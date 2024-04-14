import React, { useState, useRef } from "react";
import logo1 from "./images/PNG.png";
import axios from "axios";
import emailjs from '@emailjs/browser';


const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("Individual");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const form = useRef();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Create a data object with form values
  //   const formData = {
  //     name,
  //     email,
  //     phoneNumber,
  //     userType,
  //     companyName: userType === "Company" ? companyName : "",
  //     designation: userType === "Company" ? designation : "",
  //   };

  //   // Send form data to the backend
  //   try {
  //     const response = await axios.post("http://localhost:4000/api/form-submit", {
  //       // method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     // const response = await axios.post("http://localhost:4000/api/form-submit", formData);

  //     if (response.ok) {
  //       console.log("Form submitted successfully!");
  //       alert("Submitted Sucessfully");
  //       // Optionally, reset form state here
  //     } else {
  //       console.error("Failed to submit form");
  //       alert("failed to submit");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o8wpxse', 'template_zvcnroz', form.current, {
        publicKey: 'cLn7W-9LdheIYsOUR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Submitted Sucessfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to submit");
        },
      );
  };

  return (
    <div>
      <header className="flex items-center justify-center bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto">
          <div className="flex items-center">
            <img src={logo1} alt="Logo" className="w-16 h-16 mr-3" />
            <p className="text-3xl text-center font-bold text-blue-500">
              <span className="text-green-500">Go</span>Filings
            </p>
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center w-full max-w-screen-lg mx-auto">
        <form
          onSubmit={sendEmail}
          ref={form}
          className="mt-8 max-w-md mx-auto p-6 border border-gray-300 rounded-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold mb-2"
            >
              Name*
            </label>
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
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address*
            </label>
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
            <label
              htmlFor="phNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phNumber"
              name="phNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="userType"
              className="block text-gray-700 font-bold mb-2"
            >
              User Type*
            </label>
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
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Name*
                </label>
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
                <label
                  htmlFor="designation"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Designation*
                </label>
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
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
