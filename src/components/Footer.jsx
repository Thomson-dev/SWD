import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="  max-w-[1250px] font-nunito-regular py-5 mx-auto ">
      <div className="flex justify-between items-center h-[300px] text-white border-b border-gray-600 pb-8">
        <div>
          <h3 className="text-2xl  font-semibold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Quick links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Find services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing & plans
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                List your business
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Affiliate program
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">More from Dutiful</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Dutiful jobs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom part of the footer */}
      <div className="mt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        {/* Social Media Links */}
        <div className="flex items-center space-x-7 text-white">
          <a href="">
            <span>Follow us</span>
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin />
          </a>
        </div>

        {/* App store links */}
        <div className="flex text-white space-x-4">
          <span>Download the app</span>

          <a
            href="#"
            className="hover:text-gray-300 flex items-center space-x-2"
          >
            <FaApple />
          </a>
          <a
            href="#"
            className="hover:text-gray-300 flex items-center space-x-2"
          >
            <FaGooglePlay />
          </a>
        </div>
      </div>

      {/* Legal Links */}
      <div className="mt-8 flex space-x-10 text-sm text-gray-400 border-t border-gray-600 pt-4">
        <div className="">
          <p className="text-white ">© 2022 Dutiful®</p>
        </div>

        <div className="space-x-8">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <a href="#" className="hover:underline">
            Disclaimer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
