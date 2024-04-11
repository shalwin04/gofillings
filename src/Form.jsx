import React, { useState } from "react";
import logo1 from "./images/PNG.png";

const Form = () => {
  const [userType, setUserType] = useState("Individual");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
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
        <form className="mt-8 max-w-md mx-auto p-6 border border-gray-300 rounded-lg">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              Name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accountNumber" className="block text-gray-700 font-bold mb-2">
              Account Number
            </label>
            <input
              type="text"
              id="phNumber"
              name="phNumber"
              className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userType" className="block text-gray-700 font-bold mb-2">
              User Type*
            </label>
            <select
              id="userType"
              name="userType"
              className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <option value="Individual">Individual</option>
              <option value="Company">Company</option>
            </select>
          </div>
          {userType === "Company" && (
            <>
              <div className="mb-4">
                <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">
                  Company Name*
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Company Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="designation" className="block text-gray-700 font-bold mb-2">
                  Designation*
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Designation"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="bg-green-500 mt-5 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
