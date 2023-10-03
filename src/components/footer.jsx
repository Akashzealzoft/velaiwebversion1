import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="footerdiv1">
        <h1>VELAI APP</h1>
        <ul>
          <li>Home</li>
          <li>Job Seeker</li>
          <li>Job Provider</li>
          <li>Rental Seeker</li>
          <li>Rental Provider</li>
        </ul>
      </div>
      <div className="footerdiv2">
        <h1>Legal</h1>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>FAQ</li>
        </ul>
        <h1>Support</h1>
        <ul>
          <li>support@velaiapp.com</li>
          <li>help@velaiapp.com</li>
        </ul>

        <div className="PhoneNumber">
          <div className="icon"></div>
        </div>
      </div>
      <div className="footerdiv3"></div>
    </div>
  );
}
