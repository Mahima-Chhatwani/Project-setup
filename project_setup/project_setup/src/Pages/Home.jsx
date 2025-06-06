import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-4 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Explore our <span className="text-yellow-400">Verified</span> & <span className="text-orange-500">Professional</span> Cars
            </h1>
            <p className="text-gray-300">
              Modern design sports cruisers for those who crave adventure & grandeur Cars for relaxing with your loved ones.
            </p>
            {user ? (
              <div className="bg-white text-black p-4 rounded shadow mt-4">
                <h2 className="font-bold text-lg">User Details</h2>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
            ) : (
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => navigate("/login")}
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
                >
                  Rent a Car →
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Add Your Car
                </button>
              </div>
            )}
          </div>
          <div className="mt-8 md:mt-0">
            <img
              src="/images/featured-car.png"
              alt="car"
              className="w-full max-w-sm rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Location & Date Filters */}
      <section className="bg-gray-900 py-8 px-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
          {['Pickup Location', 'Drop Location', 'Pickup Date & Time', 'Drop Date & Time'].map((label, idx) => (
            <select
              key={idx}
              className="bg-white text-black p-2 rounded w-full"
              defaultValue=""
            >
              <option value="" disabled>{label}</option>
              <option value="Location 1">Location 1</option>
              <option value="Location 2">Location 2</option>
            </select>
          ))}
          <button className="bg-orange-500 px-4 py-2 rounded text-white font-bold">🔍</button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">⭐ Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {['Sports Coupe', 'Sedan', 'Sports Car', 'Pickup', 'Family MPV', 'Crossover'].map((type) => (
              <div
                key={type}
                className="bg-gray-100 rounded-lg shadow p-4 text-center font-medium"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Popular Cars */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">⭐ Explore Most Popular Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4">
                <img src="/images/car-placeholder.jpg" alt="car" className="rounded mb-4" />
                <h3 className="font-semibold text-lg">Car Model {i + 1}</h3>
                <p className="text-sm text-gray-600">$100 / day</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">⭐ Popular Cars On Recommendations</h2>
        <h3 className="text-5xl font-extrabold text-gray-800 mb-4">FORD MUSTANG</h3>
        <img src="/images/mustang-banner.png" alt="Mustang" className="mx-auto mb-6" />
        <div className="text-sm text-gray-600 flex flex-wrap justify-center gap-4 mb-4">
          <span>Auto</span><span>Power</span><span>30K</span><span>AC</span><span>Diesel</span><span>5 Persons</span>
        </div>
        <p className="font-bold text-blue-600 mb-4">Starts from $650/day</p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded">Rent Now</button>
      </section>

      {/* Insights Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">⭐ Insights and Innovations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-white p-4 rounded shadow">
                <img src={`/images/blog${num}.jpg`} alt="blog" className="rounded mb-4" />
                <span className="text-xs text-orange-500 font-semibold">Journey</span>
                <p className="text-sm text-gray-500">October {6 + num}, 2022</p>
                <h3 className="font-bold mt-2">The 2025 Ford F-150 Raptor – A First Look you need to know</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 px-6 bg-black text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">📱 Subscribe To Get User Friendly Mobile & Web App</h2>
        <p className="mb-6 text-gray-300">Stay updated with offers and new arrivals</p>
        <div className="max-w-xl mx-auto flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="w-full p-3 rounded-l text-black"
          />
          <button className="bg-orange-500 px-4 py-3 rounded-r text-white">→</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Qent Car Rental. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-400">
            {['SUV', 'Sedan', 'Hatchback', 'Crossover', 'Convertible', 'Pickup Truck'].map((cat, i) => (
              <span key={i}>{cat}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
