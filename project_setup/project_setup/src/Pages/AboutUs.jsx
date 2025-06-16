import React from "react";
import ourcompanyImg from "@/images/ourcompany.png";
import { MapPin, CalendarCheck2, Car } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-yellow-300 py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-2xl mb-2">
              We are commited to deliver exceptional car rental experience.
            </p>
          </div>
        </section>

        {/* About our company */}

        <section className="py-16 bg-white px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left part */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={ourcompanyImg}
                alt="Car Available"
                className="w-full object-cover h-full"
              />
              <div className="absolute left-0 top-0 h-full w-10 bg-yellow-500 flex items-center justify-center">
                <p className="rotate-90 text-white font-semibold text-sm whitespace-nowrap">
                  10 years of Experience
                </p>
              </div>
            </div>
            {/* Right part */}
            <div className="text-left ">
              <p className="text-2xl text-cyan-600 font-medium uppercase mb-2 ">
                About Our Company
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                Best solutions for Modern Car Rentals
              </h2>
              <p className="text-gray-600 mb-4">
                Quent offers a top-tier fleet of vehicles for every need,
                whether it's a quick ride or long-term travel. Our platform
                ensures seamless booking, reliable vehicles and peace of mind.
              </p>
              <p className="text-gray-600 mb-4">
                With Real-time availability, roadside support, and flexible
                plans, We make your Rental experience efficient and affordable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">
                    Doorstep Delivery and Return
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">
                    Real-time booking system
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">Zero Hidden charges</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">
                    Real-Time booking system
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">
                    Available 24*7 with support
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">Low security charges</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}

        <section className="py-16 px-4 bg-gray-50 ">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">✨Our Mission✨</h2>
            <p className="text-gray-700 text-lg font-semibold">
              At Quent, our mission is to provide seamless and affordable car
              rental services that cater to the modern traveler's needs. Whether
              it's a business trip , a weekend gateway, or your daily comute,
              we're here to you moving.
            </p>
          </div>
        </section>

        {/* Team vision */}
        <section className="PY-16 PX-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-yellow-100 shadow rounded-lg hover:bg-gray-300">
              <h3 className="text-2xl font-semibold text-yellow-600">10k+</h3>
              <p className="text-gray-600 font-semibold">Happy Customers</p>
            </div>
            <div className="p-6 bg-yellow-100 shadow rounded-lg hover:bg-gray-300">
              <h3 className="text-2xl font-semibold text-yellow-600">100+</h3>
              <p className="text-gray-600 font-semibold">Cars Available</p>
            </div>
            <div className="p-6 bg-yellow-100 shadow rounded-lg hover:bg-gray-300">
              <h3 className="text-2xl font-semibold text-yellow-600">24*7</h3>
              <p className="text-gray-600 font-semibold">Support</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-gray-100 text-gray-900  ">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">How it Works</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Transforming ordinary drives into extraordinary memories.
            </p>
            <div className="grid md:grid-cols-3 gap-15 text-center">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="rounded-full border-2 border-dashed border-blue-600 p-6 mb-4 hover:bg-blue-300">
                  <MapPin className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">1. Choose Locations</h3>
                <p className="text-gray-600 text-sm max-w-xs border-b-2 border-black pb-4 inline-block">
                  Determine the date & location for your car rental. Consider
                  factors such as your travel itinerary, pickup/drop-off
                  locations.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className=" rounded-full border-2 border-dashed border-yellow-500 p-6 mb-4 hover:bg-yellow-100">
                  <CalendarCheck2 className="w-10 h-10 text-yellow-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">2. Pickup Location</h3>
                <p className="text-gray-600 text-sm max-w-xs border-b-2 border-black pb-4 inline-block">
                  Check the availability of your desired vehicle type for your
                  chosen dates and location. Ensure that the rental rates,
                  taxes, fees, and any additional charges.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="rounded-full border-2 border-dashed border-black p-6 mb-4 hover:bg-gray-400">
                  <Car className="w-10 h-10 text-black" />
                </div>
                <h3 className="font-bold text-lg mb-2">3. Book Your Car</h3>
                <p className="text-gray-600 text-sm max-w-xs border-b-2 border-black pb-4 inline-block">
                  Determine the date & location for your car rental. Consider
                  factors such as your travel itinerary, pickup/drop-off
                  locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facts by the Numbers */}
        <section className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Facts by the Numbers</h2>
          <p className="text-gray-300 mb-10">
          Trusted by thousands, driven across millions of kilometers — here's what drives Quent forward.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="bg-white text-black p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">❤️</div>
                <h3 className="text-2xl font-bold">16k+</h3>
                <p className="text-sm text-gray-500 font-semibold">
                 Happy Customers
                </p>
            </div>
            {/* Item 2 */}
            <div className="bg-white text-black p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🚗</div>
              <h3 className="text-2xl font-bold">
                2547+
              </h3>
              <p className="text-sm text-gray-500 font-semibold">
                Count of Cars
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white text-black p-6 rounded-lg shadow text-center"> 
              <div className="text-3xl mb-2">🔐</div>
              <h3 className="text-2xl font-bold">625k+</h3>
              <p className="text-sm text-gray-500 font-semibold">Car center Solutions</p>
            </div>

            {/* Item 4 */}
            <div className="bg-white text-black p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">⏱️</div>
              <h3 className="text-2xl font-bold">
               200k+
              </h3>
              <p className="text-sm text-gray-500 font-semibold">
               Total Kilometer
              </p>
            </div>
          </div>
        </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
