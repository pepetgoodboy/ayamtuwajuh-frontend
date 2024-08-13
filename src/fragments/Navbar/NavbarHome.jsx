import React, { useContext, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Button from "../../components/Button/Button";
import { FaCartShopping } from "react-icons/fa6";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { StoreContext } from "../../context/StoreContext";

const NavbarHome = () => {
  const { token, cartItems } = useContext(StoreContext);

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav className="w-full h-20 sticky top-0 bg-white z-50">
        <div className="w-11/12 md:w-5/6 mx-auto py-5 px-5 lg:px-0">
          <div className="flex justify-between">
            <div className="flex items-center justify-center">
              <Link to="/">
                <h1 className="font-outfit font-bold text-2xl">
                  Ayam Tuwajuh.
                </h1>
              </Link>
            </div>
            <div className="items-center justify-center gap-8 text-gray-800 text-sm -ml-4 hidden lg:flex">
              <Link
                to="/"
                className="hover:text-orange-500 font-poppins cursor-pointer"
              >
                Home
              </Link>
              <ScrollLink
                activeClass="active"
                to="menu"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-orange-500 font-poppins cursor-pointer"
              >
                Menu
              </ScrollLink>
              {token && (
                <Link
                  to="/myorders"
                  className="hover:text-orange-500 font-poppins cursor-pointer"
                >
                  My Orders
                </Link>
              )}
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-orange-500 font-poppins cursor-pointer"
              >
                About
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-orange-500 font-poppins cursor-pointer"
              >
                Contact
              </ScrollLink>
            </div>
            <div className="flex items-center gap-3 md:gap-5 justify-center">
              <div className="relative">
                <Link to="/cart">
                  <FaCartShopping className="text-xl lg:text-2xl cursor-pointer" />
                  {cartItems && Object.keys(cartItems).length > 0 && (
                    <div className="absolute -top-2 -right-1 w-2 h-2 rounded-full bg-orange-400 text-white text-xs flex items-center justify-center"></div>
                  )}
                </Link>
              </div>
              {token ? (
                <Button
                  onClick={handleLogout}
                  text="Logout"
                  link="/login"
                  variant="hidden lg:block"
                />
              ) : (
                <>
                  <Button
                    text="Login"
                    link="/login"
                    variant="hidden lg:block"
                  />
                </>
              )}
              <CgMenuRightAlt
                onClick={toggleMenu}
                className="text-2xl lg:hidden cursor-pointer"
              />
            </div>
          </div>
        </div>
        {open && (
          <>
            <div className="fixed bg-black/20 w-full h-screen top-0 right-0 backdrop-blur-sm"></div>
            <div className="absolute top-1 right-4 md:right-14 w-56 h-64 bg-white rounded-lg px-6 py-5">
              <div className="flex flex-col gap-2 text-sm lg:text-base">
                <div className="flex justify-between ">
                  <Link
                    to="/"
                    onClick={toggleMenu}
                    className="flex justify-center items-center font-poppins font-medium text-gray-700 hover:text-orange-500"
                  >
                    Home
                  </Link>
                  <CgClose
                    onClick={toggleMenu}
                    className="text-2xl lg:text-3xl cursor-pointer"
                  />
                </div>
                <hr className="border-1 border-neutral-300 w-5/6" />
                <ScrollLink
                  activeClass="active"
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                  className="flex items-center font-poppins font-medium text-gray-700 hover:text-orange-500"
                >
                  Menu
                </ScrollLink>
                <hr className="border-1 border-neutral-300" />
                {token && (
                  <>
                    <Link
                      to="/myorders"
                      className="hover:text-orange-500 font-poppins cursor-pointer"
                    >
                      My Orders
                    </Link>
                    <hr className="border-1 border-neutral-300" />
                  </>
                )}
                <ScrollLink
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                  className="flex items-center font-poppins font-medium text-gray-700 hover:text-orange-500"
                >
                  About
                </ScrollLink>
                <hr className="border-1 border-neutral-300" />
                <ScrollLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                  className="flex items-center font-poppins font-medium text-gray-700 hover:text-orange-500"
                >
                  Contact
                </ScrollLink>
                <hr className="border-1 border-neutral-300" />
                {token ? (
                  <Button onClick={handleLogout} text="Logout" link="/login" />
                ) : (
                  <>
                    <Button text="Login" link="/login" />
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </nav>
      <div className="fixed bottom-8 right-2 lg:right-8">
        <ScrollLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <IoMdArrowDropupCircle className="text-4xl lg:text-5xl text-neutral-400 hover:text-neutral-500 cursor-pointer" />
        </ScrollLink>
      </div>
    </>
  );
};

export default NavbarHome;
