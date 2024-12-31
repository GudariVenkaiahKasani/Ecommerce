import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-black text-white p-7">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-blue-600">WHAT WE DO</span>
          <span>Environmental Education</span>
          <span>Stewardship</span>
          <span>Landscape Connectivity</span>
          <span>Climate & Science</span>
          <span>Watershed Sentinal Site</span>
          <span>Citizen Science</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-blue-600">GET INVOLVED</span>
          <span>Donate</span>
          <span>Explore Pepperwood</span>
          <span>Learning LAndscape</span>
          <span>Classes & Events</span>
          <span>Volunteer</span>
          <span>Stay Connected</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-blue-600">RESOURCES</span>
          <span>Field Notes Blog</span>
          <span>For Parents</span>
          <span>For Teachers</span>
          <span>Newsletters</span>
          <span>Annula Impact Reports & Financials</span>
          <span>Stategic Plan 2020-25</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-blue-600">ABPOUT US</span>
          <span>Our Impact</span>
          <span>Board OF Directers</span>
          <span>PepperWood Staff</span>
          <span>Native Council</span>
          <span>TBC3</span>
          <span>Contact Us</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-blue-600">REACH US</span>
          <div className="flex gap-2">
            <FaFacebook />
            <span>Facebook</span>
          </div>
          <div className="flex gap-2">
            <FaInstagramSquare />
            <span>Instagram</span>
          </div>
          <div className="flex gap-2">
            <FaLinkedin />
            <span>LinkedIn</span>
          </div>
          <div className="flex gap-2">
            <FaTwitter />
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
