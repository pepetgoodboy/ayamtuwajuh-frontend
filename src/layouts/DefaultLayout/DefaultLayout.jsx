import React from "react";
import Navbar from "../../fragments/Navbar/Navbar";
import Footer from "../../fragments/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
