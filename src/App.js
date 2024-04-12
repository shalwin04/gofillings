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
import Home from "./Home";
import AllRoutes from "./AllRoutes";

function App() {
 

  return (
    <Router>
      <AllRoutes/>
    </Router>
  );
}

export default App;
