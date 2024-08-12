import React, { useState } from "react";
import Header from "../../fragments/Header/Header";
import ExploreMenu from "../../fragments/ExploreMenu/ExploreMenu";
import MenuDisplay from "../../fragments/MenuDisplay/MenuDisplay";
import About from "../../fragments/About/About";
import Contact from "../../fragments/Contact/Contact";
import { Element } from "react-scroll";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <HomeLayout>
        <Element name="home">
          <Header />
        </Element>
        <Element name="menu">
          <ExploreMenu category={category} setCategory={setCategory} />
          <MenuDisplay category={category} />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </HomeLayout>
    </>
  );
};

export default Home;
