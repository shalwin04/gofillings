import logo from "./logo.svg";
import Vaultrafiki from "./images/Vault-rafiki.png";
import YoungandHappy from "./images/Young and happy-bro.png";
import Segmentation from "./images/Segmentation-pana.png";
import Finance from "./images/Finance-amico.png";
import Filesearch from "./images/File searching-pana (1).png";
import Financepana from "./images/Finance-pana (1).png";
import Invoice from "./images/Invoice-pana (1).png";
import logo1 from "./images/PNG.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <Router>
      <div>
        <header className="flex items-center justify-center bg-gray-800 text-white p-4">
          <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto">
            <div className="flex items-center">
              <img
                src={logo1}
                alt="Logo"
                className="w-16 h-16 mr-3" // Adjust the width and height here
              />
              <p className="text-3xl text-center font-bold text-blue-500 ">
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
        <main>
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center w-full max-w-screen-lg mx-auto">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h1 className="text-3xl font-bold text-green-500 ">
                    Are you working somewhere?
                  </h1>
                  <div className="mt-6">
                    <p className="text-5xl font-bold text-blue-500">
                      Have you filled your
                    </p>
                    <p className="text-5xl font-bold text-blue-500">
                      Income Tax Returns?
                    </p>
                  </div>
                  <button
                    className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleClick}
                  >
                    Click here
                  </button>
                </div>
                <img
                  src={Vaultrafiki}
                  alt="Logo"
                  className="w-full md:w-1/2 ml-8"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-16">
            <div className="flex items-center w-full max-w-screen-lg mx-auto">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h1 className="text-3xl text-blue-800">
                    GoFilings is a Cloud based Accounting platform through which
                    we offer all accounting services like Filing Income Tax
                    Returns, GST Returns etc., at users convenience.
                  </h1>
                  <div className="mt-6">
                    <p className="text-6xl text-center font-bold text-blue-500 ">
                      Why <span className="text-green-500">Go</span>Filings?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
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
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center w-full max-w-screen-lg mx-auto">
              <div className="flex items-center justify-between w-full">
                <img
                  src={Filesearch}
                  alt="Logo"
                  className="w-full md:w-1/2 ml-8"
                />
                <div className="flex items-center justify-center w-full max-w-screen-lg mx-auto">
                  <div>
                    <h1 className="text-3xl text-blue-500 font-bold text-center">
                      Are you working somewhere?
                    </h1>
                    <div className="mt-4">
                      <p className="text-center">
                        Have no time to file your Income tax returns.
                      </p>
                      <p className="text-xl text-blue-500 text-center">
                        Get your returns filed in a few simple steps.
                      </p>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                        Start filing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center w-full max-w-screen-lg mx-auto">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-center w-full max-w-screen-lg mx-auto">
                  <div>
                    <h1 className="text-3xl  font-bold text-blue-500 text-center">
                      Are you a Business Owner?
                    </h1>
                    <div className="mt-4">
                      <p className="text-center">
                        Have no time to file your Income tax returns.
                      </p>
                      <p className="text-xl text-blue-500 text-center">
                        Get your returns filed in a few simple steps.
                      </p>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                        Start filing
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  src={Financepana}
                  alt="Logo"
                  className="w-full md:w-1/2 ml-8"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center w-full max-w-screen-lg mx-auto">
              <div className="flex items-center justify-between w-full">
                <img
                  src={Invoice}
                  alt="Logo"
                  className="w-full md:w-1/2 ml-8"
                />
                <div className="flex items-center justify-center w-full max-w-screen-lg mx-auto">
                  <div>
                    <h1 className="text-3xl text-blue-500 font-bold text-center">
                      Looking for any other Accounting Services?
                    </h1>
                    <div className="mt-4">
                      <p className="text-center">
                        Like filing your GST returns, Auditing etc.
                      </p>
                      <p className="text-xl text-blue-500 text-center">
                        Reach Out to Us.
                      </p>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                        Start filing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Routes>
            <Route path="/form" element={<Form />} />
            {/* Other routes */}
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="flex items-center justify-center">
            <p className="text-sm">
              &copy; 2024 GoFilings. All rights reserved.
            </p>
          </div>
          <div className="flex items-center justify-center mt-2">
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
          <div className="flex items-center justify-center mt-2">
            <p className="text-sm mr-2">Contact us:</p>
            <a
              href="mailto:info@gofilings.com"
              className="text-white hover:text-gray-400 mr-2"
            >
              <i className="fas fa-envelope"></i> info@gofilings.com
            </a>
            <a
              href="tel:+1234567890"
              className="text-white hover:text-gray-400"
            >
              <i className="fas fa-phone"></i> +123-456-7890
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
