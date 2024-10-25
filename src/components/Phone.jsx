import React from "react";
import phone from "../assets/Listingmockup1.png";

const Phone = () => {
  return (
    <div className="flex relative flex-row gap-5 items-center  ">
      <div className="bg-[#532F82] w-[600px] h-[400px] relative rounded-2xl flex">
        <div className="absolute bottom-6 ">
          <img
            src={phone}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="flex space-y-6   flex-col">
        <div className=" p-5 w-fit bg-white shadow-md rounded-lg">
          <h3 className="playfair-regular font-bold leading-normal text-xl">
            Get Discovered
          </h3>
          <p className="text-base nunito-regular  mt-5 max-w-md">
            Dutiful is more than just a business directory; it also enhances
            your web profile. The platform makes use of SEO techniques to boost
            each listing’s performance in the SERPs, providing any business the
            chance to rank, regardless of how strong their current online
            presence is.
          </p>
        </div>

        <div className=" p-5 w-fit relative right-20 bg-white z-30 shadow-md rounded-lg">
          <h3 className="playfair-regular font-bold leading-normal text-xl">
            Instant Chat
          </h3>
          <p className="text-base nunito-regular  mt-5 max-w-md">
            You’ll be able to chat and send voice recordings with potential and
            existing customers, including managing your captured leads anytime,
            anywhere via the platform
          </p>
        </div>

        <div className=" p-5 w-fit bg-white shadow-md rounded-lg">
          <h3 className="playfair-regular font-bold leading-normal text-xl">
            Quotations
          </h3>
          <p className="text-base nunito-regular  mt-5 max-w-md">
            In addition to providing customers with access to information,
            offering customer quotations is very advantageous to the way you
            conduct your business. On Dutiful, you’ll be able to send and
            receive quotation from customers - an important step in lead
            management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Phone;
