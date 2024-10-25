import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto w-[95%]">
        <Navbar />
      </div>
      <div className="bg-[#532F82] w-full">
        <Hero />
      </div>
      <Contact />
      <div className="bg-[#532F82] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
