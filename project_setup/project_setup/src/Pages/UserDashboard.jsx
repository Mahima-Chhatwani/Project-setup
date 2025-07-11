import React from "react";
import { LayoutDashboard, CalendarCheck, Star, Heart, MessageSquare, Wallet, CreditCard, Settings, Layers, CalendarDays, WalletCards, BadgeCheck, XCircle, Clock, Car } from "lucide-react"
import {Link} from "react-router-dom";
import sedanImg from "@/images/sedan.png"
import suzukiImg from "@/images/suzuki.png"
import vernaImg from "@/images/verna.png"
import pickupImg from "@/images/pickup.png"
import kiasoulImg from "@/images/kiasoul.png"
import audiImg from "@/images/audi.png"


// Section 1
const dashboardItems = [
    {name: <Link to="/userdashboard">Dashboard</Link>, icon: <LayoutDashboard size={20} />, active:true},
    {name: <Link to="/mybookings">My Bookings</Link>, icon: <CalendarCheck size={20} />},
    {name: <Link to="/reviews">Reviews</Link>, icon: <Star size={20} />},
    {name: <Link to="/wishlist">Wishlist</Link>, icon: <Heart size={20} />},
    {name: <Link to="/messages">Messages</Link>, icon: <MessageSquare size={20} />},
    {name: <Link to="/mywallet">My Wallet</Link>, icon: <Wallet size={20} />},
    {name: <Link to="/payments">Payments</Link>, icon: <CreditCard size={20} />},
    {name: <Link to="/setting">Setting</Link>, icon: <Settings size={20} />},
]

// Section 2
const alerts =[
    {id:1 , type: "success", icon: <CalendarCheck className="w-4 h-4 mr-2" />, message: "Your Booking has been Approved by admin", action: <a href="#" className="ml-auto underline">View Details</a>},
    {id:2 , type: "success", icon: <Wallet className="w-4 h-4 mr-2" />, message: "Your Refund request has been approved by admin & your payment will be updated in 3 days.", action: <button className="ml-auto text-xl font-semibold" >&times;</button>},
    {id:3 , type: "error", icon: <Wallet className="w-4 h-4 mr-2"/>, message: "Your Refund request has been rejected by admin.", action:( <> 
    <a href="#" className="ml-2 underline">View Reason</a>
    <button className="ml-auto text-xl font-semibold">&times;</button>
    </>
    )},];

    // Section 3
    const summaryItems = [
        {title:"My Bookings", value: 450, icon: <CalendarDays className="w-6 h-6 text-white" />, color:"bg-teal-700", linkText: "View all Bookings➡", linkTo:"/dashboard/bookings"},
        {title:"Wallet Balance", value: 24665, icon: <WalletCards className="w-6 h-6 text-white"/>, color:"bg-orange-600", linkText: "View Balance➡", linkTo:"/dashboard/wallet"},
        {title:"Total Transactions", value: 15210, icon: <CreditCard className="w-6 h-6 text-white"/>, color:"bg-green-600", linkText: "View all Transactions➡", linkTo:"/dashboard/transactions"},
        {title:"Wishlist Cars", value: 24, icon: <Heart  className="w-6 h-6 text-white"/>, color:"bg-red-600", linkText: "Go To Wishlist➡", linkTo:"/dashboard/wishlist"},
    ];

    // Section 4
    const bookings = [
        {id: 1, name: "Sedan", rentType: "Hourly", start: "15 Sep 2023, 11:30 PM", end: "15 Sep 2023, 1:30 PM", price: "17,000", status: "Upcoming", statusColor:"bg-blue-100 text-blue-700", image:sedanImg ,},
        {id: 2, name: "Suzuki", rentType: "Day", start: "10 Oct 2023, 10:30 AM", end: "16 Oct 2023, 10:30 AM", price: "64,000",status:"In Progress",  statusColor:"bg-yellow-100 text-yellow-800", image:suzukiImg ,},
        {id: 3, name: "Verna", rentType: "Monthly", start: "01 Dec 2023, 08:15 AM", end: "01 Jan 2024, 08:15 AM", price: "85,000", status:"Completed", statusColor:"bg-green-100 text-green-700", image:vernaImg ,},
        {id:4 , name: "Pickup", rentType: "Monthly", start: "01 Dec 2023, 08:15 AM", end: "01 Jan 2024, 08:15 AM", price: "85,000",status:"Upcoming",  statusColor:"bg-blue-100 text-blue-700", image: pickupImg,},
        {id: 5, name: "KiaSoul", rentType: "Day", start: "10 Oct 2023, 10:30 AM", end: "16 Oct 2023, 10:30 AM", price: "64,000",status:"In Progress", statusColor:"bg-yellow-100 text-yellow-800", image: kiasoulImg,},
        {id:6 , name: "Audi", rentType: "Hourly", start: "15 Sep 2023, 11:30 PM", end: "15 Sep 2023, 1:30 PM", price: "85,000", status:"Completed", statusColor:"bg-green-100 text-green-700", image:audiImg ,},
    ];
    const transactions= [
        {name: "Kia Soul", rentType: "Day", status:"Completed", date: "10 Oct", statusColor:"bg-green-100 text-green-700", icon:<BadgeCheck className="text-green-600" /> ,},
        {name: "Sedan", rentType: "Hourly", status:"Cancelled", date: "15 Sep", statusColor:"bg-red-100 text-red-700", icon:<XCircle className="text-red-600"  /> ,},
        {name: "Verna", rentType: "Monthly", status:"Refund Started", date: "Yet To Receive", statusColor:"bg-orange-100 text-orange-700", icon:<Clock className="text-orange-600"  /> ,},
        {name: "Audi", rentType: "Hourly", status:"Completed", date: "20 Nov", statusColor:"bg-green-100 text-green-700", icon:<BadgeCheck className="text-green-600"/> ,},
    ]

const UserDashboard = ()=>{
    return(
        <>
         <section>
            <div className="bg-white shadow-sm p-4 rounded--md flex flex-wrap gap-6 justify-start md:justify-between items-center">
               {dashboardItems.map((item, idx)=>(
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
          <div className="space-y-2">
           {alerts.map((alert)=>(
            <div key={alert.id} className={`flex items-center px-4 py-2 rounded-md text-sm &{
            alert.type === "success" ? "bg-green-300 text-green-800" : "bg-red-200 text-red-800"
            }`}>
               {alert.icon}
               <span >{alert.message}</span>
               <div className="ml-auto flex items-center space-x-2">{alert.action}</div>
             </div>
           ))}
          </div>
         </section>

         <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4">
      {summaryItems.map((item, index) => (
        <div key={index} className="p-4 bg-white rounded-lg shadow flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-sm font-medium text-gray-600">{item.title}</h4>
              <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
            </div>
            <div className={`p-2 rounded-full ${item.color}`}>
              {item.icon}
            </div>
          </div>
          <Link
            to={item.linkTo}
            className="text-sm text-blue-600 hover:underline mt-1">
            {item.linkText}
          </Link>
        </div>
      ))}
    </div>
         </section>

         <section>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left - Last Bookings */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Last 5 Bookings</h3>
          <Link to="/dashboard/bookings" className="text-sm text-blue-600">View all Bookings</Link>
        </div>
        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b.id} className="flex items-center justify-between gap-3 p-3 bg-white shadow rounded-md">
              <img src={b.image} alt={b.name} className="w-14 h-14 rounded object-cover" />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{b.name}</h4>
                <p className="text-xs text-gray-500">Rent Type: {b.rentType}</p>
                <p className="text-xs text-gray-500">Start: {b.start}</p>
                <p className="text-xs text-gray-500">End: {b.end}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{b.price}</p>
                <span className={`text-xs px-2 py-1 rounded ${b.statusColor}`}>{b.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Transactions */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Recent Transaction</h3>
          <select className="border px-2 py-1 rounded text-sm">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>All Time</option>
          </select>
        </div>
        <div className="space-y-4">
          {transactions.map((t, i) => (
            <div key={i} className="flex items-start justify-between p-3 bg-white shadow rounded-md">
              <div className="flex items-center gap-3">
                <Car className="w-10 h-10 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-gray-500">Rent Type: {t.rentType}</p>
                  <p className="text-xs text-gray-500">Status: {t.date}</p>
                </div>
              </div>
              <div className={`text-xs font-medium px-2 py-1 rounded ${t.statusColor}`}>
                {t.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
         </section>
        </>
    )
}
export default UserDashboard