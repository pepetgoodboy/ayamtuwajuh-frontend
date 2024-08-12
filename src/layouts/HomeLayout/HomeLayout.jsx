import React from "react";
import NavbarHome from "../../fragments/Navbar/NavbarHome";
import FooterHome from "../../fragments/Footer/FooterHome";

const HomeLayout = ({ children }) => {
  return (
    <>
      <NavbarHome />
      {children}
      <FooterHome />
    </>
  );
};

export default HomeLayout;
