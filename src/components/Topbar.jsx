import React, { useState } from "react";
import "./Topbar.css";
import logo from "../assests/velaiLogo.svg";
import { GoHomeFill } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function Topbar() {
  const [flag, setFlag] = useState(false);
  const [menu, setMenu] = useState(false);

  const handlemenu = () => {
    setMenu(!menu);
  };

  const togglemenu = () => {
    setFlag(!flag);
  };
  return (
    <>
      <div className="mainTop">
        <div className="img-section1">
          <img src={logo} alt="Description of your SVG image" />
        </div>
        <div className="section2">
          <span>Job Seeker</span>
          <span>Job Provider</span>
          <span>Rental Seeker</span>
          <span>Rental Provider</span>
        </div>
        <div className="section3">
          <GoHomeFill size={30} className="icons" />
          <FaUserCircle size={30} className="icons" onClick={handlemenu} />
          <FaBars size={30} className="icons1" onClick={togglemenu} />
        </div>
      </div>
      {menu && (
        <div className="dragmenu">
          <RxCross2 size={30} className="crossicon" onClick={handlemenu} />
          <span>Edit Profile</span>
          <span>Saved Jobs</span>
          <span>Applied Jobs</span>
          <span>Privacy Policy</span>
          <span>Temrs & Conditions</span>
          <span>FAQ</span>
          <span>Help</span>
        </div>
      )}
      <div className={!flag ? "menu" : "menuvisible"}>
        <span>Home</span>
        <span>Job Seeker</span>
        <span>Job Provider</span>
        <span>Rental Seeker</span>
        <span>Edit Profile</span>
        <span>Saved Jobs</span>
        <span>Applied Jobs</span>
        <span>Privacy Policy</span>
        <span>Temrs & Conditions</span>
        <span>FAQ</span>
        <span>Help</span>
      </div>
    </>
  );
}
