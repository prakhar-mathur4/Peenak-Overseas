import React from "react";
import ContactUs from "../Compoent/ContactUs";
import Hero from "../Compoent/Hero";
import ProductCousel from "../Compoent/ProductCousel";

const Home = () => {
  return (
    <>
      <Hero />
      <hr className="m-10" />
      <ProductCousel />
      <hr className="m-10" />
      <ContactUs />
    </>
  );
};

export default Home;
