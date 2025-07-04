import React from "react"
import {Star, StarHalf, MapPin, Eye, CalendarCheck} from "lucide-react"
import acuraSportImg from "@/images/acuraSport.png"
import audiImg from "@/images/audi.png"
import chevroletCamaroImg from "@/images/chevroletCamaro.png"
import crossoverImg from "@/images/crossover.png"
import ferrariSpecialeImg from "@/images/ferrariSpeciale.png"
import fordMustangImg from "@/images/fordMustang.png"


const recommendedCars = [
    {
        id: 1,
        name:"Acura Sports",
        location: "India",
        price: 160,
        image:acuraSportImg,
        rating: 5.0,
        review: 120,
        transmission: "Auto" ,
        mileage: "10km",
        fuel: "Petrol",
        seats:"5 Persons",
        year: 2018,
        topRated: "true",
    },

    {
        id: 2,
        name:"Audi",
        location: "India",
        price:180 ,
        image:audiImg,
        rating:5.0 ,
        review: 100,
        transmission:"Manual" ,
        mileage: "15km",
        fuel: "Petrol",
        seats: "4 Persons",
        year: 2016,
        featured: "true",
    },

    {
        id: 3,
        name:"Chevrolet Camaro",
        location: "India",
        price: 80,
        image:chevroletCamaroImg,
        rating: 4.0,
        review: 58,
        transmission: "Manual",
        mileage: "20km" ,
        fuel: "Diesel" ,
        seats:"5 Persons",
        year: 2012,
        featured: "true",
    },

    {
        id: 4,
        name:"Cross Over",
        location: "India",
        price: 36 ,
        image:crossoverImg,
        rating: 3.5,
        review: 200,
        transmission: "Äuto" ,
        mileage: "18km" ,
        fuel: "Petrol",
        seats: "5 Persons",
        year: 2015,
        featured: "true" ,
    },

    {
        id: 5,
        name:"Ferrari Speciale",
        location: "India",
        price: 200,
        image:ferrariSpecialeImg,
        rating: 5.0,
        review: 80,
        transmission: "Äuto" ,
        mileage: "12km",
        fuel: "Petrol" ,
        seats:"Petrol",
        year:2019,
        topRated:"true" ,
    },

    {
        id: 5,
        name:"Ford Mustang",
        location: "India",
        price: 150,
        image:fordMustangImg,
        rating: 4.5,
        review: 90,
        transmission: "Auto",
        mileage:"15km" ,
        fuel: "Petrol",
        seats:"4 Persons",
        year: 2018,
        topRated: "true",
    },
]

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


        <section className="py-10">
         <h2 className="text-2xl font-bold mb-6 text-gray-800">
           You May be Interested in
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {recommendedCars.map((car)=>(
            <div key={car.id} className="border rounded-lg p-4 shadow-md bg-white relative">
                {car.featured && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"> 
                        Featured
                        </div>
                )}
                     {car.topRated &&(
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                             Top Rated
                            </div>
                     )}
                     <img 
                     src={car.image}
                     alt={car.name}
                     className="w-full h-48 object-cover rounded"
                     />
                     <h3 className="font-bold text-lg mt-3 text-gray-900">{car.name}</h3>
                     <p className="text-sm text-gray-600">
                        ⭐{car.rating} ({car.review} Review )
                     </p>
                     <div className="text-sm text-gray-500 mt-2 space-y-1"> 
                        <p>⚙️{car.transmission} | {car.mileage} | {car.fuel}</p>
                        <p>👥{car.seats} | 📅{car.year}</p>
                        <p>📍 {car.location}</p>
                        </div>
                        <p className="text-red-500 text-xl font-semibold mt-2">
                            ${car.price}<span className="text-sm font-normal">/Day</span>
                        </p>
                        <button>
                            📅 Rent Now
                        </button>
                 </div>
           ))}
         </div>
        </section>
        </>
    )
}


export default ListingDetails