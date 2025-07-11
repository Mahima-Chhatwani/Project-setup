import React from "react";
import { Star, MoreVertical } from "lucide-react";
import {DropdownMenu} from "@/components/ui/dropdown-menu";
import { LayoutDashboard, CalendarCheck, Heart, MessageSquare, Wallet, CreditCard, Settings, } from "lucide-react"
import sedanImg from "@/images/sedan.png"
import suzukiImg from "@/images/suzuki.png"
import vernaImg from "@/images/verna.png"
import pickupImg from "@/images/pickup.png"
import kiasoulImg from "@/images/kiasoul.png"
import audiImg from "@/images/audi.png"
import toyotaCamaryImg from "@/images/toyotaCamary.png";
import { Link } from "react-router-dom";


// Section 1
const reviewItems = [
    {name: <Link to="/userdashboard">Dashboard</Link>, icon: <LayoutDashboard size={20} />, },
    {name: <Link to="/mybookings">My Bookings</Link>, icon: <CalendarCheck size={20} />},
    {name: <Link to="/reviews">Reviews</Link>, icon: <Star size={20} />,active:true},
    {name: <Link to="/wishlist">Wishlist</Link>, icon: <Heart size={20} />},
    {name: <Link to="/messages">Messages</Link>, icon: <MessageSquare size={20} />},
    {name: <Link to="/mywallet">My Wallet</Link>, icon: <Wallet size={20} />},
    {name: <Link to="/payments">Payments</Link>, icon: <CreditCard size={20} />},
    {name: <Link to="/setting">Setting</Link>, icon: <Settings size={20} />},
]


// Section 2
const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Sedan",
      deliveryType: "Delivery",
      rentalType: "Hourly",
      comment: "The car arrived early & the rep was courteous and polite.",
      rating: 4.5,
      image: sedanImg,
    },
    {
      id: 2,
      name: "Suzuki",
      deliveryType: "Self Pickup",
      rentalType: "Day",
      comment: "The car was a lovely car to drive no problem with it all.",
      rating: 4.0,
      image: suzukiImg,
    },
    {
      id: 3,
      name: "Verna",
      deliveryType: "Delivery",
      rentalType: "Weekly",
      comment: "Experience was great travelling with Dreams Rental.",
      rating: 5.0,
      image: vernaImg,
    },
    {
      id: 4,
      name: "Pick Up",
      deliveryType: "Self Pickup",
      rentalType: "Monthly",
      comment: "Best service with good price, nice vehicle overall very good.",
      rating: 5.0,
      image: pickupImg,
    },
    {
      id: 5,
      name: "Kia Soul",
      deliveryType: "Delivery",
      rentalType: "Day",
      comment: "Smooth process, modern vehicle & fair price - great rental experience.",
      rating: 5.0,
      image: kiasoulImg,
    },
    {
      id: 6,
      name: "Audi",
      deliveryType: "Self Pickup",
      rentalType: "Hourly",
      comment: "Excellent service, clean car & smooth pickup & drop-off process.",
      rating: 5.0,
      image: audiImg,
    },
    {
      id: 7,
      name: "Toyota Camary",
      deliveryType: "Delivery",
      rentalType: "Monthly",
      comment: "Quick & easy rental and also fair price for what you get.",
      rating: 4.0,
      image: toyotaCamaryImg,
    },
  ];

  return (
  <>

  <section>
            <div className="bg-white shadow-sm p-4 rounded--md flex flex-wrap gap-6 justify-start md:justify-between items-center">
               {reviewItems.map((item, idx)=>(
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
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">All Reviews <span className="text-gray-500">({reviews.length})</span></h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-left font-medium">
            <tr>
              <th className="p-3">Car Name</th>
              <th className="p-3">Rental Type</th>
              <th className="p-3">Review</th>
              <th className="p-3">Ratings</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reviews.map((review) => (
              <tr key={review.id}>
                <td className="p-3 flex items-center gap-3">
                  <img src={review.image} alt={review.name} className="w-12 h-10 rounded object-cover" />
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.deliveryType}</p>
                  </div>
                </td>
                <td className="p-3">{review.rentalType}</td>
                <td className="p-3 max-w-md">{review.comment}</td>
                <td className="p-3 flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(review.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      fill={i < review.rating ? "currentColor" : "none"}
                    />
                  ))}
                  <span className="ml-1 text-gray-500 text-sm">({review.rating.toFixed(1)})</span>
                </td>
                <td className="p-3">
                  <DropdownMenu
                    onView={() => console.log("View", review.name)}
                    onEdit={() => console.log("Edit", review.name)}
                    onDelete={() => console.log("Delete", review.name)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-xs text-gray-500 mt-2">Showing 1 to {reviews.length} of {reviews.length} entries</div>
      </div>
    </div>
    </section>

    </>
  );
};

export default Review;