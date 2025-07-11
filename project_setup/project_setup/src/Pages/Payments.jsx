import React from "react";
import { LayoutDashboard, CalendarCheck, Heart,Star, MessageSquare, Wallet, CreditCard, Settings, } from "lucide-react"
import { Link } from "react-router-dom";


// Section 1
const paymentItems = [
    {name: <Link to="/userdashboard">Dashboard</Link>, icon: <LayoutDashboard size={20} />, },
    {name: <Link to="/mybookings">My Bookings</Link>, icon: <CalendarCheck size={20} />},
    {name: <Link to="/reviews">Reviews</Link>, icon: <Star size={20} />,},
    {name: <Link to="/wishlist">Wishlist</Link>, icon: <Heart size={20} />, },
    {name: <Link to="/messages">Messages</Link>, icon: <MessageSquare size={20} />, },
    {name: <Link to="/mywallet">My Wallet</Link>, icon: <Wallet size={20} />, },
    {name: <Link to="/payments">Payments</Link>, icon: <CreditCard size={20} />, active:true},
    {name: <Link to="/setting">Setting</Link>, icon: <Settings size={20} />},
];


// Section 2
const paymentsData = [
  {
    bookingId: "#1001",
    car: { name: "Ferrari 458 MM Speciale", type: "Delivery", image: "/cars/ferrari.png" },
    paidOn: "15 Sep 2023, 09:30 AM",
    amount: 300,
    mode: "Wallet",
    status: "Completed"
  },
  {
    bookingId: "#1002",
    car: { name: "Toyota Camry SE 350", type: "Self Pickup", image: "/cars/camry.png" },
    paidOn: "23 Oct 2023, 12:00 PM",
    amount: 500,
    mode: "Paypal",
    status: "Completed"
  },
  {
    bookingId: "#1003",
    car: { name: "Kia Soul 2016", type: "Delivery", image: "/cars/kia.png" },
    paidOn: "02 Nov 2023, 10:30 AM",
    amount: 600,
    mode: "Stripe",
    status: "Completed"
  },
  {
    bookingId: "#1004",
    car: { name: "Audi A3 2019 new", type: "Self Pickup", image: "/cars/audi.png" },
    paidOn: "18 Dec 2023, 02:30 PM",
    amount: 1500,
    mode: "Stripe",
    status: "Pending"
  },
  {
    bookingId: "#1005",
    car: { name: "2018 Chevrolet Camaro", type: "Delivery", image: "/cars/camaro.png" },
    paidOn: "05 Jan 2024, 08:00 AM",
    amount: 450,
    mode: "Wallet",
    status: "Failed"
  },
  {
    bookingId: "#1006",
    car: { name: "Acura Sport Version", type: "Self Pickup", image: "/cars/acura.png" },
    paidOn: "20 Feb 2024, 11:30 PM",
    amount: 250,
    mode: "Stripe",
    status: "Completed"
  },
  {
    bookingId: "#1007",
    car: { name: "Toyota Tacoma 4WD", type: "Delivery", image: "/cars/tacoma.png" },
    paidOn: "12 Mar 2024, 10:00 PM",
    amount: 1000,
    mode: "Paypal",
    status: "Pending"
  },
];

const Payments =()=>{
    return(
        <>
       <section>
            <div className="bg-white shadow-sm p-4 rounded--md flex flex-wrap gap-6 justify-start md:justify-between items-center">
               {paymentItems.map((item, idx)=>(
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
            <div className="mt-6">
  <h2 className="text-xl font-semibold mb-4">All Payments <span className="text-gray-500">({paymentsData.length})</span></h2>

  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200">
      <thead className="bg-gray-100">
        <tr className="text-sm text-gray-700">
          <th className="px-4 py-2 text-left">Booking ID</th>
          <th className="px-4 py-2 text-left">Car Name</th>
          <th className="px-4 py-2 text-left">Paid on</th>
          <th className="px-4 py-2 text-left">Total</th>
          <th className="px-4 py-2 text-left">Mode</th>
          <th className="px-4 py-2 text-left">Status</th>
          <th className="px-4 py-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {paymentsData.map((item) => (
          <tr key={item.bookingId} className="text-sm border-b hover:bg-gray-50">
            <td className="px-4 py-2">{item.bookingId}</td>
            <td className="px-4 py-2 flex items-center gap-3">
              <img src={item.car.image} alt={item.car.name} className="w-10 h-10 object-cover rounded-md" />
              <div>
                <div className="font-medium">{item.car.name}</div>
                <div className="text-gray-500 text-xs">{item.car.type}</div>
              </div>
            </td>
            <td className="px-4 py-2">{item.paidOn}</td>
            <td className="px-4 py-2">₹{(item.amount * 83).toLocaleString()}</td>
            <td className="px-4 py-2">
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{item.mode}</span>
            </td>
            <td className="px-4 py-2">
              <span
                className={`
                  text-xs font-medium px-2 py-1 rounded
                  ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : ''}
                  ${item.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : ''}
                  ${item.status === 'Failed' ? 'bg-red-100 text-red-700' : ''}
                `}
              >
                {item.status}
              </span>
            </td>
            <td className="px-4 py-2">
              <button className="text-gray-600 hover:text-black text-xl">⋯</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Pagination Static Footer */}
    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
      <p>Showing 1 to {paymentsData.length} of {paymentsData.length} entries</p>
      <div className="space-x-1">
        <button className="px-2 py-1 border rounded bg-gray-100">Prev</button>
        <button className="px-2 py-1 border rounded bg-blue-600 text-white">1</button>
        <button className="px-2 py-1 border rounded bg-gray-100">Next</button>
      </div>
    </div>
  </div>
</div>
         </section>

        </>
    )
}

export default Payments