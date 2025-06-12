import React from "react";
import { Link } from "react-router-dom";
import sedanImg from "@/images/sedan.png"
import crossoverImg from "@/images/crossover.png"
import mpvImg from "@/images/mpv.png"
import pickupImg from "@/images/pickup.png"
import sportscarImg from "@/images/sportscar.png"
import sportscoupeImg from "@/images/sportscoupe.png"
import audilogo from "@/images/audilogo.png"
import kialogo from "@/images/kialogo.png"
import chevroletlogo from "@/images/chevroletlogo.png"
import bmwlogo from "@/images/bmwlogo.png"
import mercedeslogo from "@/images/mercedeslogo.png"
import hyundailogo from "@/images/hyundailogo.png"
import rentstepscarImg from "@/images/rentstepscar.png"
import suzukiImg from "@/images/suzuki.png"


const Home = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
<section className="bg-gradient-to-r from-gray-800 to-yellow-300 py-16 px-4">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
    {/* Left Content */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-500">
        Find Your Perfect Ride
      </h1>
      <p className="text-lg md:text-xl mb-6 text-gray-900">
        Rent top-rated cars at affordable prices with 24x7 customer support.
      </p>
      <Link
        to="/listing-grid"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Explore Cars
      </Link>
    </div>

    {/* Right Image */}
    <div className="flex justify-center ">
      <img
        src= {suzukiImg}
        alt="Grey Breeza Car"
        className="w-full max-w-md md:max-w-lg drop-shadow-xl"
      />
      
    </div>
    
  </div>
</section>


      {/* Search Form */}

      <section className="py-10 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-4 rounded-4xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Search Rental Cars</h2>
          <div className="grid md:grid-cols-5 gap-5">
            <input
              type="text"
              placeholder="Pickup Location"
              className="border px-4 py-2 rounded w-full"
            />

            <input
              type="text"
              placeholder="Drop Location"
              className="border px-4 py-2 rounded w-full"
            />

            <input
              type="date"
              placeholder="pickup Date"
              className="border px-4 py-2 rounded w-full"
            />

            <input
              type="date"
              placeholder="Drop Date"
              className="border px-4 py-2 rounded w-full"
            />

            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400  hover:bg-yellow-500 font-semibold text-black">
              <Link to="/listingdetails"> Search</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}

      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">⭐ Featured Categories ⭐</h2>
          <p className="text-gray-600 mb-8">
            Know what you’re looking for? Browse our extensive selection of cars
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              {
                label: "sportscoupe",
                cars: 14,
                img: sportscoupeImg,
              },

              { label: "Sedan", 
                cars: 12,
                img: sedanImg,
               },

              {
                label: "SportsCar",
                cars: 35,
                img: sportscarImg,
              },

              {
                label: "Pickup",
                cars: 35,
                img: pickupImg,
              },

              {
                label: "Family MPV",
                cars: 35,
                img: mpvImg,
              },

              {
                label: "Crossover",
                cars: 30,
                img: crossoverImg,
              },

            ].map(({ label, cars, img }) => (
              <div
                key={label}
                className="bg-white rounded-lg border shadow hover:shadow-md transition p-4 text-center"
              >
                <img src={img} alt={label} className="h-20 mx-auto mb-4" />
                <h3 className="font-semibold text-lg">{label}</h3>
                <p className="text-sm text-gray-500">{cars}Cars</p>
              </div>
            ))}
          </div>
          <div className="mt-6 ">
            <Link
              to="/listingdetails"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              {" "}
              View All{" "}
            </Link>
          </div>
        </div>
      </section>

      {/* Best Platform Section */}
      <section className="py-14 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Car Image */}
          <div className="flex-1">
            <img
              src={sedanImg}
              alt="Best Platform Selection"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Features Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">
              ✨Best Platform for Car Rental✨
            </h2>
            <p className="text-gray-700">
              Why do we choose relax rent bikes generally if we travel in a un
              known cities with a bike in our hand we feel which is like a home
              town
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big-icon mt-1"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <div>
                  <h4 className="font-semibold">Best Deal</h4>
                  <p className="text-gray-500">
                    Quent offers a fleet of high-quality
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send-to-back-icon mt-1"
                >
                  <rect x="14" y="14" width="8" height="8" rx="2" />
                  <rect x="2" y="2" width="8" height="8" rx="2" />
                  <path d="M7 14v1a2 2 0 0 0 2 2h1" />
                  <path d="M14 7h1a2 2 0 0 1 2 2v1" />
                </svg>
                <div>
                  <h4 className="font-semibold">DoorStep Delivery</h4>
                  <p className="text-gray-500">
                    Quent offers doorstep delivery services
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield-minus-icon mt-1"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="M9 12h6" />
                </svg>
                <div>
                  <h4 className="font-semibold">Low Security Deposit</h4>
                  <p className="text-gray-500">
                    Quent doesn't ask for a higher security deposit
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star-icon mt-1"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
                <div>
                  <h4 className="font-semibold">Latest Cars</h4>
                  <p className="text-gray-500">
                    Quent provides latest cars on Rent
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-headphones-icon mt-1"
                >
                  <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                </svg>
                <div>
                  <h4 className="font-semibold">Customer Support</h4>
                  <p className="text-gray-500">
                    Quent provides 24x7 customer support for any query
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-pound-sterling-icon mt-1"
                >
                  <path d="M10 16V9.5a1 1 0 0 1 5 0" />
                  <path d="M8 12h4" />
                  <path d="M8 16h7" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <div>
                  <h4 className="font-semibold">No Hidden Charges</h4>
                  <p className="text-gray-500">
                    There are no hidden charges in Quent. What you see you get
                    😊
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rent By Brands Section*/}
      <section className="bg-black text-white py-14 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">🌟 Rent by Brands 🌟</h2>
          <p className="text-gray-400 mb-10">
            Here's a list of some of the most popular cars globally
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
            {[
              {
                name: "Audi",
                logo: audilogo,
              },
              {
                name: "Kia",
                logo: kialogo,
              },
              {
                name: "Chevrolet",
                logo: chevroletlogo,
              },
              {
                name: "BMW",
                logo: bmwlogo,
              },
              {
                name: "Mercedes",
                logo: mercedeslogo,
              },
              {
                name: "Hyundai",
                logo: hyundailogo,
              },
            ].map(({ name, logo }) => (
              <div key={name} className="flex flex-col items-center">
                <img src={logo} alt={name} className="h-10 mb-2" />
                <span className="text-sm text-gray-300">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rent in 3 steps */}
       <section className="py-14 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src={rentstepscarImg} 
          alt="Car Rental Steps"
          className="w-full max-w-lg mx-auto md:mx-0"
          />
          {/* Steps */}
          <div>
            <h2 className="text-3xl font-bold mb-2">
             Rent Our Cars in 3 Steps
            </h2>
            <p className="text-gray-500 mb-6">
             Check how it Works to Rent Cars in Quent
            </p>

            <div className="space-y-6">
              {/* Step1 */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 rounded-full p-2">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                  >
                    <rect x="3" y="4" width="18" height="18" rx= "2" ry="2"/>
                    <line x1= "16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Choose Date & Locations
                  </h4>
                  <p className="text-gray-500">
                    Determine the date & location for your car rental.
                    Consider factors such as your travel itinerary, pickup/drop-off locations
                  </p>
                </div>
              </div>
               
               {/* Step 2 */}
               <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  width="24" height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" 
                   className="lucide lucide-map-pin-house-icon lucide-map-pin-house">
                    <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"/>
                    <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"/>
                    <path d="M18 22v-3"/>
                    <circle cx="10" cy="10" r="3"/>
                    </svg>
                </div>
                <div>
                  <h4 className="font-semibold">
                 Select Pick-Up & Drop Locations
                </h4>
                <p className="text-gray-500">
                  Check the availability of your desired vehicle type for your chosen dates and location. 
                  Ensure that the rental rates, taxes, fees, and any additional charges.
                </p>
                </div>
               </div>
            </div>
            

              {/* Step 3 */}

              <div className="flex items-start gap-4">
                <div className="bg-gray-600 rounded-full p-2">
               <svg xmlns="http://www.w3.org/2000/svg" 
               width="24" height="24" 
               viewBox="0 0 24 24" 
               fill="none"
                stroke="currentColor" stroke-width="2" 
                stroke-linecap="round" stroke-linejoin="round" 
                class="lucide lucide-waypoints-icon lucide-waypoints">
                  <circle cx="12" cy="4.5" r="2.5"/>
                  <path d="m10.2 6.3-3.9 3.9"/>
                  <circle cx="4.5" cy="12" r="2.5"/>
                  <path d="M7 12h10"/>
                  <circle cx="19.5" cy="12" r="2.5"/>
                  <path d="m13.8 17.7 3.9-3.9"/>
                  <circle cx="12" cy="19.5" r="2.5"/>
                  </svg>
                  </div>
                  <div >
                   <h4 className="font-semibold">Book Your Car</h4>
                   <p className="text-gray-500">Determine the date & location for your car rental. 
                    Consider factors such as your travel itinerary, pickup/drop-off locations</p>
                  </div>
              </div>
          </div>

        </div>
       </section>

      {/* Features */}

      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Quent?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Wide Range of Cars</h3>

              <p>
                Choose from economy to luxury cars as per your Trip and Budget
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Easy Bookings</h3>
              <p>
                Book your Rides easily in just a click with real-time
                availability
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">24x7 support</h3>
              <p>
                Our support team is here round-the-clock to assist you anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-black text-white py-14 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready for your next adventure
          </h2>
          <p className="mb-6">Book a car with quent and travel worry-free</p>
          <Link
            to="/listinggrid"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
