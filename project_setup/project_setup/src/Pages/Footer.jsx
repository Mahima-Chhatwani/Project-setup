import React from "react";
import { Link } from "react-router-dom";
import applestoreImg from "@/images/applestore.png";

const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-800 text-white py-10 px-6 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-3xl font-bold mb-2">QUENT</h1>
              <p className="text-gray-600">
                We offer a diverse fleet of vehicles to suit every need,
                including compact cars, sedans, SUVs and luxury vehicles.
              </p>

              <div className="flex gap-4 mb-4">
                <img src={applestoreImg} />
                <img />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
