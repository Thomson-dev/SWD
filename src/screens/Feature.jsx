import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const PricingTable = () => {
  return (
    <div className=" p-8">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto   ">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left"></th>
                <th className="px-4 py-2 text-left">Basic</th>
                <th className="px-4 py-2 text-left">Standard</th>
                <th className="px-4 py-2 text-left">Premium</th>
              </tr>
            </thead>
            <tbody>
              {/* Header Row for Buttons */}
              <tr>
                <td></td>
                <td className="text-center py-4">
                  <button className="bg-purple-800 text-white py-2 w-[80%] rounded-md">
                    Get started
                  </button>
                </td>
                <td className="text-center py-4">
                  <button className="bg-purple-800 text-white py-2 w-[80%] rounded-md">
                    Get started
                  </button>
                </td>
                <td className="text-center py-4">
                  <button className="bg-purple-800 text-white py-2 w-[80%] rounded-md">
                    Get started
                  </button>
                </td>
              </tr>

              {/* Features Rows */}
              <tr className="">
                <td className="px-4 py-2">Access to dashboard</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2 nunito-regular font-bold">No. of business listings</td>
                <td className="text-center nunito-regular font-bold ">2 businesses</td>
                <td className="text-center nunito-regular font-bold">6 businesses</td>
                <td className="text-center nunito-regular font-bold">10 businesses</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">No. of products/services</td>
                <td className="text-center">2</td>
                <td className="text-center">6</td>
                <td className="text-center">10</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">No. of Images</td>
                <td className="text-center">2</td>
                <td className="text-center">4</td>
                <td className="text-center">6</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Keywords</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Display service hours & prices</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Display address, email & contact</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Instant chat</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Reviews & ratings</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Profile visibility</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Instant notifications</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Display website & social network</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Quotes</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Bookmarks</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Profile views</td>
                <td className="text-center">✘</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Verified badge</td>
                <td className="text-center">✘</td>
                <td className="text-center">Purple</td>
                <td className="text-center">Gold</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Latest offers</td>
                <td className="text-center">✘</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">Accept & sell appointment</td>
                <td className="text-center">✘</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>

              <tr className="">
                <td className="px-4 py-2">24/7 support</td>
                <td className="text-center">✘</td>
                <td className="text-center">✘</td>
                <td className="text-center">✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto w-[95%]">
        <Navbar />
        <div className="flex flex-col my-10 items-center">
          <h1 className="text-center playfair-regular text-4xl">
            Plans to Suit Your Business Budget
          </h1>
          <p className="text-center  nunito-regular mt-5 text-[#656565] max-w-[44rem]">
            Our fully organized plans deliver valuable content that showcases
            your services and skills, drives Lead, covers all features, and
            gives customers a clear idea to be able to choose your services.
          </p>
        </div>
        <div className="">
          <PricingTable />
        </div>
      </div>
      <div className="bg-[#532F82] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Feature;
