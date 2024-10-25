import React from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Review from "../components/Review";
import Booked from "../components/Booked";
import Footer from "../components/Footer";
import Phone from "../components/Phone";

const Business = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto w-[95%]">
        <Navbar />
        <CTA />
        <Review />
        <Phone />
        <Booked />
      </div>
      <div className="bg-[#532F82] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Business;
