import React from "react";
import { LayoutDashboard, CalendarCheck, Star, Heart, MessageSquare, Wallet, CreditCard, Settings, MoreVertical, Eye, Pencil, Trash2,  } from "lucide-react";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import sedanImg from "@/images/sedan.png"
import crossoverImg from "@/images/crossover.png"
import mpvImg from "@/images/mpv.png"
import pickupImg from "@/images/pickup.png"
import sportscarImg from "@/images/sportscar.png"
import sportscoupeImg from "@/images/sportscoupe.png"
import rentstepscarImg from "@/images/rentstepscar.png"



// Section 1
const myBookingsItems = [
    {name: <Link to="userdashboard">Dashboard</Link>, icon: <LayoutDashboard size={20} />},
    {name: <Link to="/mybookings">"My Bookings"</Link>, icon: <CalendarCheck size={20} />,  active:true},
    {name: <Link to="/reviews">Reviews</Link>, icon: <Star size={20} />},
    {name: <Link to="/wishlist">Wishlist</Link>, icon: <Heart size={20} />},
    {name: <Link to="/messages">Messages</Link>, icon: <MessageSquare size={20} />},
    {name: <Link to="/mywallet">My Wallet</Link>, icon: <Wallet size={20} />},
    {name: <Link to="/payments">Payments</Link>, icon: <CreditCard size={20} />},
    {name: <Link to="/setting">Setting</Link>, icon: <Settings size={20} />},
]

// Section 2
const tabs = ["All Bookings", "Upcoming", "InProgress", "Completed", "Cancelled"];

const filters = ["This Week", "Sort By Relevance"];

const bookings = [
    {id: 1, image: sedanImg, name: "Sedan", method:"Delivery", type:"Hourly", pickup:"101 A Block, Shiv Nest, Indore", dropoff:"Indrapuri, 24, Indore", booked:"8 July 2025", total: "300", status:"Upcoming"},
    {id: 2, image: crossoverImg, name: "Cross Over", method:"Self Pickup", type:"Day", pickup:"101 A Block, Shiv Nest, Indore", dropoff:"Indrapuri, 24, Indore", booked:"8 July 2025", total: "150", status:"InProgress"},
    {id: 3, image: mpvImg, name: "MPV", method:"Delivery", type:"Hourly", pickup:"101 A Block, Shiv Nest, Indore", dropoff:"Indrapuri, 24, Indore", booked:"8 July 2025", total: "200", status:"Completed"},
    {id: 4, image: pickupImg, name: "Pick Up", method:"Self Pickup", type:"Day", pickup:"101 A Block, Shiv Nest, Indore", dropoff:"Indrapuri, 24, Indore", booked:"8 July 2025", total: "350", status:"Cancelled"},
    {id: 5, image: sportscarImg, name: "Sports Car", method:"Delivery", type:"Hourly", pickup:"101 A Block, Shiv Nest, Indore", dropoff:"Indrapuri, 24, Indore", booked:"8 July 2025", total: "300", status:"Upcoming"},
    {id: 6, image: sportscoupeImg, name: "Sports Coupe", method:"Self Pickup", type:"Day", pickup:"101 A Block, Shiv Nest, Indore", dropoff:"Indrapuri, 24, Indore", booked:"8 July 2025", total: "200", status:"InProgress"},
    {id: 7, image: rentstepscarImg, name: "Rent Steps", method:"Delivery", type:"Hourly", pickup:"101 A Block, Shiv Nest, Indore", dropoff:"Indrapuri, 24, Indore", booked:"8 July 2025", total: "250", status:"Completed"},
];

const MyBookings = ()=>{
   

    // Section 2
    const[selectedTab, setSelectedTab]= useState("All Bookings")

    const getStatusColor = (status) =>{
        switch (status.toLowerCase()){
            case "upcoming": return "bg-blue-100 text-blue-600";
            case "inprogress": return "bg-orange-100 text-orange-600";
            case "completed": return "bg-green-100 text-green-600";
            case "cancelled": return "bg-red-100 text-red-600";
            default: return  "bg-gray-100 text-gray-600"
        }
    };

     const filtered = selectedTab === "All Bookings" ? bookings : bookings.filter(b =>b.status.toLowerCase() === selectedTab.toLowerCase());

    return(
        <>
        <section>
            <div className="bg-white shadow-sm p-4 rounded--md flex flex-wrap gap-6 justify-start md:justify-between items-center">
               {myBookingsItems.map((item, idx)=>(
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
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">My Bookings</h2>
                <button variant="default">
                    Add Booking
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(tab => (
          <Button
            key={tab}
            variant={selectedTab === tab ? "default" : "outline"}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          {filters.map(label => (
            <DropdownMenu key={label}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{label}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>{label}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-xs uppercase">
            <tr>
              <th className="p-2">Booking ID</th>
              <th className="p-2">Car Name</th>
              <th className="p-2">Rental Type</th>
              <th className="p-2">Pickup / Delivery</th>
              <th className="p-2">Dropoff</th>
              <th className="p-2">Booked On</th>
              <th className="p-2">Total</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(b => (
              <tr key={b.id} className="border-t">
                <td className="p-2 font-medium">#{b.id}</td>
                <td className="p-2 flex items-center gap-2">
                  <img src={b.image} alt={b.name} className="w-10 h-8 rounded object-cover" />
                  <div>
                    <p>{b.name}</p>
                    <p className="text-xs text-muted-foreground">{b.method}</p>
                  </div>
                </td>
                <td className="p-2">{b.type}</td>
                <td className="p-2">{b.pickup}</td>
                <td className="p-2">{b.dropoff}</td>
                <td className="p-2">{b.booked}</td>
                <td className="p-2 font-semibold">${b.total}</td>
                <td className="p-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(b.status)}`}>{b.status}</span>
                </td>
                <td className="p-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreVertical className="w-4 h-4 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem><Eye className="w-4 h-4 mr-2" /> View</DropdownMenuItem>
                      <DropdownMenuItem><Pencil className="w-4 h-4 mr-2" /> Edit</DropdownMenuItem>
                      <DropdownMenuItem><Trash2 className="w-4 h-4 mr-2" /> Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-4 text-sm">
          <p>Showing 1 to {filtered.length} of {filtered.length} entries</p>
          <div className="flex gap-1">
            <Button size="sm" variant="outline">Prev</Button>
            <Button size="sm" variant="default">1</Button>
            <Button size="sm" variant="outline">Next</Button>
          </div>
        </div>
      </div>
          </div>
         </section>
        </>
    )
}
export default MyBookings