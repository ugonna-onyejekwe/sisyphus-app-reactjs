import "./style.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className={pathname === "/" ? "remove" : ""}>
      <div className="container">
        <div className="socails">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
          <FaInstagram className="icon" />
        </div>
        <a href="#">
          contact us: <span>08101330834</span>
        </a>
      </div>

      <h3>copyright &copy; 2024. Designed by Ugonna onyejekwe</h3>
    </footer>
  );
};
