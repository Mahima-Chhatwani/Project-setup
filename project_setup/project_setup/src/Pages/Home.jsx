import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}

      <section className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-16 px-4 text-center">
        <div className="max-w-4xl max-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Find Your Perfect Ride
          </h1>

          <p className="text-lg md:text-xl mb-6">
            Rent Top-rated cars at affordable prices with 24x7 customer support.
          </p>
          <Link
            to="/listingdetails"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Explore Cars
          </Link>
        </div>
      </section>

      {/* Search Form */}

      <section className="py-10 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
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
              { label: "Sports Coupe", cars:14, img:"/images/categories/sports-coupe.png"},
              { label: "Sedan", cars:12, img: "/images/categories/sedan.png"},
              { label: "Sports Car", cars:35, img: "/images/categories/sports-car.png"},
              { label: "Pickup", cars:35, img: "/images/categories/pickup.png"},
              { label: "Family MPV", cars:35, img: "/images/categories/mpv.png"},
              { label: "Crossover", cars:30, img: "/images/categories/crossover.png"},
            ].map(({label, cars, img})=>(
              <div key={label} className="bg-white rounded-lg border shadow hover:shadow-md transition p-4 text-center">
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
            > View All </Link>
          </div>
        </div>
      </section>


      {/* Best Platform Section */}
       <section className="py-14 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

          {/* Car Image */}
          <div className="flex-1">
            <img src="/images/categories/mpv.png" alt="Car" className="rounded-lg shadow-lg"/>
          </div>
           
           {/* Features Text */}
           <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">✨Best Platform for Car Rental✨</h2>
            <p className="text-gray-700">Why do we choose relax rent bikes generally if we travel in a un known cities with a bike in our hand we feel which is like a home town
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold">✔ Best Deal</h4>
                <p className="text-gray-500">Quent offers a fleet of high-quality</p>
              </div>
              <div>
                <h4 className="font-semibold">✔ DoorStep Delivery</h4>
                <p className="text-gray-500">
                  Quent offers doorstep delivery services
                </p>
              </div>

              <div>
                <h4 className="font-semibold">✔ Low Security Deposit</h4>
                <p className="text-gray-500">
                 Quent Doesn't asks for Higher security deposit
                </p>
              </div>

              <div>
                <h4 className="font-semibold">✔ Latest Cars </h4>
                <p className="text-gray-500">
                  Quent provides latest cars on Rent
                </p>
              </div>

              <div>
                <h4 className="font-semibold">✔ Customer Support</h4>
                <p className="text-gray-500">
                 Quent provides 24x7 customer support for any query
                </p>
              </div>

              <div>
                <h4 className="font-semibold">✔ No Hidden Charges</h4>
                <p className="text-gray-500">
                There are no hidden charges in Quent. What you see you get😊
                </p>
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Audi_logo.svg",
        },
        {
          name: "Kia",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Kia_logo_2021.svg",
        },
        {
          name: "Chevrolet",
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Chevrolet_logo.svg",
        },
        {
          name: "BMW",
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
        },
        {
          name: "Mercedes",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
        },
        {
          name: "Hyundai",
          logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Hyundai_logo.svg",
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