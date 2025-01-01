import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black py-8 lg:py-14 font-outfit">
        <h1 className="text-white font-medium text-2xl hidden md:block md:px-24 lg:px-32 mb-4">
          Ayam Tuwajuh.
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between gap-14 md:px-24 lg:px-32">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            <div className="flex flex-col md:justify-normal justify-center items-center md:items-start text-white gap-4">
              <h2 className="font-medium">Direct Link</h2>
              <div className="flex md:flex-col justify-center md:justify-normal items-center md:items-start gap-14 md:gap-1 text-white text-xs md:text-sm">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
                <Link to="/" className="hover:underline">
                  Menu
                </Link>
                <Link to="/myorders" className="hover:underline">
                  My Orders
                </Link>
                <Link to="/" className="hover:underline">
                  About
                </Link>
                <Link to="/" className="hover:underline">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:justify-normal justify-center items-center md:items-start text-white gap-4">
              <h2 className="font-medium">Kontak kami</h2>
              <div className="flex md:flex-col justify-center md:justify-normal items-center md:items-start gap-14 md:gap-1 text-white text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <FaEnvelope className="w-5 md:w-6 h-5 md:h-6  text-white" />
                  <p>info@ayamtuwajuh.com</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaPhoneVolume className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  <p>0858-6040-8156</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:gap-3 gap-5">
            <FaFacebook className="w-6 md:w-7 h-6 md:h-7 text-white" />
            <FiInstagram className="w-6 md:w-7 h-6 md:h-7 text-white" />
            <FaTwitter className="w-6 md:w-7 h-6 md:h-7 text-white" />
          </div>
        </div>
        <div className="px-8 md:px-24 lg:px-32 py-2 mt-6 md:mt-20">
          <p className="text-sm text-neutral-200 text-center md:text-start">
            &copy; Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
