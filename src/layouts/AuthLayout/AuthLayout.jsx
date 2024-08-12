import React from "react";
import BGAuth from "/login.jpg";
import Button from "../../components/Button/Button";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";

const AuthLayout = ({ title, description, link, children }) => {
  return (
    <div className="w-full mx-auto font-jakarta bg-neutral-50">
      <div className="w-11/12 md:w-5/6 lg:w-8/12 mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="flex border-[1px] border-neutral-200 rounded-xl shadow-2xl mx-auto">
            <div className="hidden lg:flex w-full lg:w-[40%] rounded-l-xl">
              <img
                src={BGAuth}
                className="w-full rounded-l-xl object-cover h-full"
              />
            </div>
            <div className="w-full lg:w-[60%] bg-white rounded-l-xl md:rounded-l-none rounded-r-xl flex justify-center items-center">
              <div className="flex flex-col gap-10 px-8 md:px-12 py-10 md:py-12 lg:px-12">
                <h2 className="hidden lg:block text-2xl lg:text-4xl font-outfit text-center font-semibold text-gray-700">
                  Ayam Tuwajuh.
                </h2>
                <div className="flex flex-col gap-2 md:gap-3">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-orange-500">
                    {title}
                  </h2>
                  <p className="text-gray-700 text-sm lg:text-base">
                    {description}
                    <Link to={link}>
                      <span className="text-orange-500"> disini</span>
                    </Link>
                  </p>
                </div>
                {children}
                <div className="flex gap-4 justify-center">
                  <FaFacebook className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer hover:scale-110 transition-all duration-300 text-blue-700" />
                  <FaTwitter className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer hover:scale-110 transition-all duration-300 text-blue-400" />
                  <FaInstagram className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer hover:scale-110 transition-all duration-300 text-pink-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
