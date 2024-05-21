import "./style.css";
import logo from "../../assets/logo.svg";
import userimg from "../../assets/profile-img.png";

import { MdChevronRight } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [open_menu, setOpen_menu] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className={pathname === "/" ? "remove" : ""}>
      <div className="container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo_image" />
          </a>
        </div>

        <div className="wrapper">
          <div
            className={
              open_menu ? "navigators_container active" : "navigators_container"
            }
          >
            <div className="menu_btn close" onClick={() => setOpen_menu(false)}>
              <IoCloseSharp className="icon" />
            </div>
            <div className="search_bar">
              <input type="search" placeholder="Search..." />
            </div>

            <div className="links">
              <a href="#">dashboard</a>
              <a href="#">markets</a>
              <a href="#">wallet</a>
            </div>
          </div>

          <div className="profile_section">
            <a href="#" target="_blank" className="github_url">
              <FaGithub className="icon" />
            </a>
            <div className="profile_container">
              <img
                src={userimg}
                alt="profile_image"
                className="profile_image"
              />
              <div className="txt">
                <p className="user_name">ugonn</p>
                <MdChevronRight className="icon" />
              </div>
            </div>
          </div>

          <div className="menu_btn open" onClick={() => setOpen_menu(true)}>
            <RiMenu3Line />
          </div>
        </div>
      </div>
    </nav>
  );
};
