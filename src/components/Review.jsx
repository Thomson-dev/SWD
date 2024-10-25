import React from "react";
import review from "../assets/Group 5018.svg";

const Review = () => {
  return (
    <div className="grid grid-cols-2 min-h-[640px] items-center  ">
      <div className="">
        <img src={review} />
      </div>
      <div className="">
        <h3 className="playfair-regular max-w-lg leading-normal text-4xl">
        Collect reviews and ratings from customers
        </h3>
        <p className="text-xl nunito-regular mt-5 max-w-xl">
        Accelerate your business reputation by 90% and gain social proof through reviews and ratings requested from customers.
        </p>
      </div>
    </div>
  );
};

export default Review;
