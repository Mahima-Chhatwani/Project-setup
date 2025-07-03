import React from "react"
import {Star, StarHalf, MapPin, Eye, CalendarCheck} from "lucide-react"

const ListingDetails =({car}) =>{
    if (!car) {
    return <div className="text-center text-red-500">No car data provided.</div>;
  }

    const{
        type,
        year,
        rating,
        name,
        location,
        views, 
        listedDate,
        bookings,
    } = car;

    const renderStars=(rating) =>{
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >=0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return(
            <>
            {[...Array(fullStars)].map((_, i)=>(
                <Star key={i} size={16} fill="#fbbf24" stroke="none"/>
            ))}
            {halfStar && <StarHalf  size={16} fill="#fbbf24" stroke="none"/>}
            {[...Array(emptyStars)].map((_, i)=>(
                <Star key={i+fullStars} size={16} stroke="#d1d5db" />
            ))}
            </>
        )
    }

    return(
        <>
        <section className="bg-white rounded shadow p-4 mb-6 flex justify-between items-start flex-wrap gap-4 ">
            <div>
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                  <span className="font-medium">{type}</span>
                  <span className="bg-teal-600 text-white text-xs px-2 py-0.5 rounded">{year}</span>
                  <div>
                    {renderStars(rating)}
                    <span className="text-sm text-gray-700 ml-1">
                        ({rating})
                    </span>
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{name}</h1>
                <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        Location:{location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye  size={16}/>
                      Views: {views}
                    </span>
                    <span className="flex items-center gap-1">
                        <CalendarCheck size={16}/>
                        Listed on: {listedDate}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
                <button className="bg-teal-600 text-white text-sm px-4 py-2 rounded shadow hover:bg-teal-700 transition">
                    📝Total Booking:{bookings}
                </button>
                <button className="text-sm text-gray-600 border border-gray-300 px-3 py-2 rounded hover:bg-gray-100 transition">
                    🔗Compare
                </button>
            </div>
        </section>
        </>
    )
}

export default ListingDetails