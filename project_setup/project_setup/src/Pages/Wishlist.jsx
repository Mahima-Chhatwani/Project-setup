import React from "react";
import { LayoutDashboard, CalendarCheck, Heart,Star, MessageSquare, Wallet, CreditCard, Settings, } from "lucide-react"
import { Link } from "react-router-dom";
import vernaImg from "@/images/verna.png"
import pickupImg from "@/images/pickup.png"
import kiasoulImg from "@/images/kiasoul.png"
import audiImg from "@/images/audi.png"
import toyotaCamaryImg from "@/images/toyotaCamary.png";


// Section 1
const wishlistItems = [
    {name: <Link to="/userdashboard">Dashboard</Link>, icon: <LayoutDashboard size={20} />, },
    {name: <Link to="/mybookings">My Bookings</Link>, icon: <CalendarCheck size={20} />},
    {name: <Link to="/reviews">Reviews</Link>, icon: <Star size={20} />,},
    {name: <Link to="/wishlist">Wishlist</Link>, icon: <Heart size={20} />, active:true},
    {name: <Link to="/messages">Messages</Link>, icon: <MessageSquare size={20} />},
    {name: <Link to="/mywallet">My Wallet</Link>, icon: <Wallet size={20} />},
    {name: <Link to="/payments">Payments</Link>, icon: <CreditCard size={20} />},
    {name: <Link to="/setting">Setting</Link>, icon: <Settings size={20} />},
];

// Section 2
const wishlistData = [
  {
    id: 1,
    name: "Verna",
    category: "Verna",
    transmission: "Manual",
    mileage: "4600 KM",
    fuel: "Petrol",
    type: "Normal",
    year: 2021,
    seats: "6 Persons",
    location: "Pattaya, Thailand",
    price: 6000,
    rating: 5.0,
    image: vernaImg,
  },
  {
    id: 2,
    name: "PickUp",
    category: "Chevrolet",
    transmission: "Auto",
    mileage: "10 KM",
    fuel: "Petrol",
    type: "Power",
    year: 2018,
    seats: "5 Persons",
    location: "Newyork, USA",
    price: 10000,
    rating: 5.0,
    image: pickupImg,
  },
  {
    id: 3,
    name: "Kia Soul",
    category: "Kia",
    transmission: "Auto",
    mileage: "2500 KM",
    fuel: "Petrol",
    type: "Power",
    year: 2019,
    seats: "4 Persons",
    location: "Lasvegas, USA",
    price: 4000,
    rating: 5.0,
    image: kiasoulImg,
  },
  {
    id: 4,
    name: "Audi A3 2019 new",
    category: "Audi",
    transmission: "Manual",
    mileage: "1700 KM",
    fuel: "Petrol",
    type: "Power",
    year: 2019,
    seats: "4 Persons",
    location: "Newyork, USA",
    price: 45000,
    rating: 5.0,
    image: audiImg,
  },
  {
    id: 5,
    name: "Toyota Camary",
    category: "Toyota",
    transmission: "Manual",
    mileage: "1200 KM",
    fuel: "Diesel",
    type: "Power",
    year: 2018,
    seats: "4 Persons",
    location: "Lasvegas, USA",
    price: 3600,
    rating: 5.0,
    image: toyotaCamaryImg,
  },
];

const Wishlist = ()=>{
    return (
        <>
    <section>
            <div className="bg-white shadow-sm p-4 rounded--md flex flex-wrap gap-6 justify-start md:justify-between items-center">
               {wishlistItems.map((item, idx)=>(
                <button key={idx} className={`flex flex-col items-center text-sm font-medium transition ${
                item.active
                ? "text-white bg-orange-500 px-4 py-2 rounded"
                : "text-gray-600 hover:text-orange-500"
                }`}>
            <div className="mb-1">{item.icon}</div>
            {item.name}
                </button>
               ))}
            </div>
         </section>

         <section>
            <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Wishlist</h2>

      <div className="space-y-6">
        {wishlistData.map((car) => (
          <div key={car.id} className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
            <img src={car.image} alt={car.name} className="w-full md:w-72 h-56 object-cover" />

            <div className="flex-1 p-4 md:p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{car.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">Category : {car.category}</p>
                </div>
                <button className="text-red-500 text-xl">🤍</button>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-gray-600 my-3">
                <span>🚗 {car.transmission}</span>
                <span>🧭 {car.mileage}</span>
                <span>⛽ {car.fuel}</span>
                <span>⚙ {car.type}</span>
                <span>🗓 {car.year}</span>
                <span>👥 {car.seats}</span>
              </div>

              <p className="text-sm text-gray-500 mb-3">📍 {car.location}</p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(car.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      fill={i < car.rating ? "currentColor" : "none"}
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-500">({car.rating})</span>
                </div>

                <div className="text-lg font-semibold text-gray-700">
                  ₹{car.price} <span className="text-sm text-gray-400">/ Day</span>
                </div>
              </div>

              <Link
                to="/listinggrid"
                className="inline-flex items-center px-4 py-2 mt-4 bg-black text-white text-sm rounded hover:bg-gray-800"
              >
                📅 Rent Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
         </section>
    </>
    )
}

export default Wishlist