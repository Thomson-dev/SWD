import React from "react";

const Contact = () => {
  return (
    <div className="flex mt-[8rem] max-w-[600px]  mx-auto justify-center py-8 min-h-screen ">
      <div className="flex space-y-7  w-full  flex-col">
        <div className="flex-col flex">
          <span className="text-lg text-[#603F8B]"> Full name</span>
          <input className="h-[64px] mt-2 bg-[#F8FAFD] outline-none rounded-md px-2  border border-[#E7EAF1]" type="text" />
        </div>

        

        <div className="flex-col flex">
          <span className="text-lg text-[#603F8B]"> Email</span>
          <input className="h-[64px] mt-2 bg-[#F8FAFD] outline-none rounded-md px-2  border border-[#E7EAF1]" type="text" />
        </div>

        <div className="flex-col flex">
          <span className="text-lg text-[#603F8B]"> Business type (Optional)</span>
          <input className="h-[64px] mt-2 bg-[#F8FAFD] outline-none rounded-md px-2  border border-[#E7EAF1]" type="text" />
        </div>

        <div className="flex-col flex">
          <span className="text-lg text-[#603F8B]"> Subject</span>
          <input className="h-[64px] mt-2 bg-[#F8FAFD] outline-none rounded-md px-2  border border-[#E7EAF1] " type="text" />
        </div>

        <div className="flex-col flex">
          <span className="text-lg text-[#603F8B]"> Write your message</span>
         <textarea rows={6} className=" mt-2 bg-[#F8FAFD] outline-none rounded-md px-2  border border-[#E7EAF1]"/>
        </div>

        <button className="bg-[#532F82]  text-lg rounded-md h-[78px] text-white">
            Send message
        </button>
      </div>
    </div>
  );
};

export default Contact;
