import React, { useState } from "react";
import AnalyticsAmico from "./images/Analytics-amico.png";
import Vaultrafiki from "./images/Vault-rafiki.png";
import YoungandHappy from "./images/Young and happy-bro.png";
import Segmentation from "./images/Segmentation-pana.png";
import Finance from "./images/Finance-amico.png";
import Filesearch from "./images/File searching-pana (1).png";
import Financepana from "./images/Finance-pana (1).png";
import Invoice from "./images/Invoice-pana (1).png";
import logo1 from "./images/PNG.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
return (
    <div className="min-h-screen flex flex-col justify-between">
<header className="flex items-center justify-between bg-gray-800 text-white p-2 sm:p-4 lg:p-3 xl:p-4 w-full">
  <div className="flex items-center">
    <img
      src={logo1}
      alt="Logo"
      className="w-16 h-16 mr-3 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
    />
  </div>
  <div className="flex items-center">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-4 lg:px-8"
      onClick={handleButtonClick}>
      Contact Us
    </button>
  </div>
</header>


    <main className="flex-grow mt-8">
    <section className="hero-3 pt-7 position-relative hero-with-shapes">
      <Container>
        <Row>
          <Col lg={6}>
    <div className="flex items-center justify-center mt-8">
          <div className="flex items-center w-full max-w-screen-lg mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="md:w-1/2">
                <h1 className="text-3xl font-bold text-green-500 text-center">
                  Are you working somewhere?
                </h1>
                <div className="mt-6">
                  <p className="text-4xl font-bold text-blue-500 text-center">
                    Have you filled your Income Tax Returns?
                  </p>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full"
                    onClick={handleButtonClick}
                  >
                    Click here
                  </button>
                </div>
              </div>
              <img
                src={AnalyticsAmico}
                alt="Logo"
                className="w-full md:w-1/2 ml-8"
                style={{ maxWidth: '400px' }}
              />
            </div>
          </div>
        </div>
        </Col>
        </Row>
      </Container>
      </section>

  <section className="flex items-center justify-center mt-16">
  <Container className="w-full max-w-screen-lg mx-auto">
    <Row className="flex items-center justify-between">
      <Col>
        <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-blue-800 text-center">
          GoFilings is a Cloud based Accounting platform through which we offer all accounting services like Filing Income Tax Returns, GST Returns etc., at users convenience.
        </h1>
        <div className="mt-6">
          <p className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-bold text-blue-500 ">
            Why <span className="text-green-500">Go</span>Filings?
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</section>
      <div className="flex items-center justify-center mt-16">
        <div className="flex flex-wrap justify-center w-full max-w-screen-lg mx-auto">
          <div className="flex flex-col items-center justify-center w-1/2 md:w-1/4">
            <img src={YoungandHappy} alt="Image 1" className="w-1/2" />
            <div className="text-center mt-4">
              <p className="text-lg">
                We have a young and energetic team, who are commited to
                their work
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 md:w-1/4">
            <img src={Vaultrafiki} alt="Image 2" className="w-1/2" />
            <div className="text-center mt-4">
              <p className="text-lg">
                We have you secured, all your details are safe with us.
                You're privacy and security
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 md:w-1/4">
            <img src={Segmentation} alt="Image 3" className="w-1/2" />
            <div className="text-center mt-4">
              <p className="text-lg">
                We ensure accurate tax filings, we assure complete and
                accurate filing.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 md:w-1/4">
            <img src={Finance} alt="Image 4" className="w-1/2" />
            <div className="text-center mt-4">
              <p className="text-lg">
                We make sure you get the maximum tax refund out of your tax
                filing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="hero-3 pt-7 position-relative hero-with-shapes">
      <Container>
        <Row>
          <Col lg={6}>
      <div className="flex items-center justify-center mt-6">
  <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto md:flex-row">
    <img
      src={Filesearch}
      alt="Logo"
      className="w-full md:w-1/2 mb-4 md:mb-0"
      style={{ maxWidth: '400px' }}
    />
    <div >
      <h1 className="text-4xl font-bold text-blue-500 text-center">
        Are you working somewhere?
      </h1>
      <div className="mt-4">
        <p className="text-center text-2xl">
          Have no time to file your Income tax returns.
        </p>
        <p className="text-2xl text-blue-500 text-center">
          Get your returns filed in a few simple steps.
        </p>
      </div>
      <div className="flex items-center justify-center mt-4 md:mt-6">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full" onClick={handleButtonClick}>
          Start filing
        </button>
      </div>
    </div>
  </div>
</div>
</Col>
        </Row>
      </Container>
      </section>

<section className="hero-3 pt-7 position-relative hero-with-shapes">
      <Container>
        <Row>
          <Col lg={6}>
 <div className="flex items-center justify-center mt-8">
  <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-screen-lg mx-auto">
    <div className="flex items-center justify-center w-full max-w-screen-lg mx-auto md:w-1/2 md:mr-8">
      <div>
        <h1 className="text-4xl font-bold text-blue-500 text-center">
          Are you a Business Owner?
        </h1>
        <div className="mt-4">
          <p className="text-center text-2xl">
            Have no time to file your Income tax returns.
          </p>
          <p className="text-2xl text-blue-500 text-center">
            Get your returns filed in a few simple steps.
          </p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full"
            onClick={handleButtonClick}
          >
            Start filing
          </button>
        </div>
      </div>
    </div>
    <img
      src={Financepana}
      alt="Logo"
      className="w-full md:w-1/2 mt-4 md:mt-0"
      style={{ maxWidth: '400px' }}
    />
  </div>
</div>
</Col>
        </Row>
      </Container>
      </section>

<section className="hero-3 pt-7 position-relative hero-with-shapes">
      <Container>
        <Row>
          <Col lg={6}>
<div className="flex items-center justify-center mt-6">
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg mx-auto">
    <img
      src={Invoice}
      alt="Logo"
      className="w-full md:w-1/2 mb-4 md:mb-0"
      style={{ maxWidth: '400px' }}
    />
    <div className="flex items-center justify-center w-full max-w-screen-lg mx-auto md:w-1/2 md:ml-8">
      <div>
        <h1 className="text-4xl text-blue-500 font-bold text-center">
          Looking for any other Accounting Services?
        </h1>
        <div className="mt-4">
          <p className="text-center text-2xl">
            Like filing your GST returns, Auditing etc.
          </p>
          <p className="text-2xl text-blue-500 text-center">
            Reach Out to Us.
          </p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full"
            onClick={handleButtonClick}
          >
            Start filing
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</Col>
        </Row>
      </Container>
      </section>

      <Routes>
        <Route path="/form" element={<Form />} />
        {/* Other routes */}
      </Routes>
    </main>
    <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="flex justify-between px-4">
          {/* Contact details */}
          <div className="flex flex-col">
            <p className="mb-1 text-center">Contact Details</p>
            <div className="flex items-center justify-center">
              <i className="fas fa-envelope mr-1"></i>
              <a
                href="mailto:info@gofilings.com"
                className="text-white hover:text-gray-400 mr-2 flex items-center"
              >
                <MdEmail className="mr-1" />
                info@gofilings.com
              </a>
            </div>
            {/* <div className="flex items-center justify-center">
              <i className="fas fa-phone mr-1"></i>
              <a
                href="tel:+1234567890"
                className="text-white hover:text-gray-400 flex items-center"
              >
                <FaPhone className="mr-1" />
                +123-456-7890
              </a>
            </div>*/}
          </div>
          {/* Center-aligned copyright */}
          <p className="text-sm flex-grow text-center">
            &copy; 2024 GoFilings. All rights reserved.
          </p>
          {/* Right-aligned social media icons */}
          <div className="flex flex-col items-center">
            <p className="mb-3 text-center">Follow us</p>
            <div className="flex justify-center">
              <a href="#" className="text-white hover:text-gray-400 mx-2">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-gray-400 mx-2">
                <FaXTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-400 mx-2">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    {showForm && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
    <div className="bg-white p-8 rounded-lg">
      <button className="absolute top-0 right-0 m-4 z-50" onClick={handleCloseForm}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <Form onClose={handleCloseForm} />
    </div>
  </div>
)}
  </div>
)
}

export default Home;