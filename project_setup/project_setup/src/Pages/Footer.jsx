import React from "react";
import { Link } from "react-router-dom";
import applestoreImg from "@/images/applestore.png";
import googleplayImg from "@/images/googleplay.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding and Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-car-front text-white"
            >
              <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
              <path d="M7 14h.01" /> <path d="M17 14h.01" />
              <rect width="18" height="8" x="3" y="10" rx="2" />
              <path d="M5 18v2" /> <path d="M19 18v2" />
            </svg>
            <span className="text-xl font-bold text-yellow-500">Quent</span>
          </div>
          <p className="text-gray-400 mb-4">
            We offer a diverse fleet of vehicles to suit every need, including
            compact cars, sedans, SUVs and luxury vehicles.
          </p>

          <div className="flex gap-2 mb-4">
            <img src={applestoreImg} alt="App Store" className="h-8 " />
            <img src={googleplayImg} alt="Google Play" className="h-8" />
          </div>

          <div className="flex gap-4 text-xl">
            <i className=" hover:text-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </i>
            <i className="hover:text-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </i>
            <i className="hover:text-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-twitter-icon lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </i>
            <i className="hover:text-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </i>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 hover:text-gray-300">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white">My Account</li>
            <li className="hover:text-white">Campaigns</li>
            <li className="hover:text-white">Dreams Rent Dealers</li>
            <li className="hover:text-white">Deals and Incentive</li>
            <li className="hover:text-white">Financial Services</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-lg font-semibold mb-3 hover:text-gray-300">
            Pages
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/contact">Become a Partner</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/faq">FAQ's</Link>
            </li>
            <li className="hover:text-white">
              {" "}
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col  items-center  text-sm text-gray-400 ">
        <p className="hover:text-white">
          Copyright © 2025 Quent. All Rights Reserved.
        </p>
        <div className="flex gap-3 mt-4 md:mt-0">
          <Link to="/privacypolicy" className="hover:text-white">
            Privacy Policy
          </Link>
          <span>/</span>
          <Link to="/termsconditions" className="hover:text-white">
            Terms & Condition
          </Link>
          <span>/</span>
          <Link to="/refundpolicy" className="hover:text-white">
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
