// import React from "react"
// import {Star, StarHalf, MapPin, CalendarDays, Wifi, Baby, Fuel, ShieldCheck, Radio, Timer,CarFront, Gauge, Settings, AirVent, SteeringWheel, BadgeCheck, DoorOpen, MoveRight, ThermometerSnowflake, Music, Bluetooth, Smartphone, KeyRound, Seat, Cpu, Radar, Wind, Window, } from "lucide-react"
// import acuraSportImg from "@/images/acuraSport.png"
// import audiImg from "@/images/audi.png"
// import chevroletCamaroImg from "@/images/chevroletCamaro.png"
// import crossoverImg from "@/images/crossover.png"
// import ferrariSpecialeImg from "@/images/ferrariSpeciale.png";
// import fordMustangImg from "@/images/fordMustang.png"
// import { ChevronLeft, ChevronRight, MousePointerClick } from "lucide-react"
// import { useState } from "react"
// import { preview } from "vite"


// // Specifications and Features
// const specifications =[
//   {label: "Body" , value:"Sedan", icon:<CarFront size={18} />},
//   {label: "Make" , value:"Nissan", icon:<BadgeCheck size={18}/>},
//   {label: "Transmission" , value:"Automatic", icon:<Settings size={18}/>},
//   {label: "Fuel Type" , value:"Diesel", icon:<Fuel size={18}/>},
//   {label: "Mileage" , value:"16km", icon:<Gauge size={18}/>},
//   {label: "Drivetrain" , value:"Front Wheel", icon:<SteeringWheel size={18}/>},
//   {label: "Year" , value:"2018", icon:<CalendarDays size={18}/>},
//   {label: "AC" , value:"Air Condition", icon:<AirVent size={18}/>},
//   {label: "VIN" , value:"12345678", icon:<CarFront size={18}/>},
//   {label: "Door" , value:"4 Doors", icon:<DoorOpen size={18}/>},
//   {label: "Break" , value:"ABS", icon:<MoveRight size={18}/>},
//   {label: "Engine (HP)" , value:"3,000", icon:<Cpu size={18}/>},
// ]

// const carFeatures =[
//       "Multi-Zone A/C",
//       "Heated Front Seats",
//       "Android Auto",
//       "Navigation System",
//       "Premium Sound System",
//       "Bluetooth",
//       "Keyless Start",
//       "Memory Seat",
//       "6 Cylinders",
//       "Adaptive Cruise Control",
//       "Intermittent Wipers",
//       "4 Power Windows",
// ];


// const services = [
//     {label:"GPS Navigation Systems", icon:<MapPin size={18} />},
//     {label:"Wi-Fi Hotspot", icon:<Wifi size={18} />},
//     {label:"Child Safety Seats", icon:<Baby size={18} />},
//     {label:"Fuel Options", icon:<Fuel size={18} />},
//     {label:"RoadSide Assistance", icon:<ShieldCheck size={18} />},
//     {label:"Satellite Radio", icon:<Radio size={18} />},
//     {label:"Additional Accessories", icon:<Tool size={18} />},
//     {label:"Express check-in/out", icon:<Timer size={18} />},
// ];

// const descriptionText = 
// `🚗 Welcome to SwiftDrive – Your Trusted Car Rental Partner
// At SwiftDrive, we make car rentals effortless, reliable, and affordable. Whether you're traveling for business, planning a road trip, or need a comfortable ride for daily errands, we offer a wide range of well-maintained vehicles to meet your needs — from economical hatchbacks to luxurious sedans and rugged SUVs.

// With an easy-to-use booking system, 24/7 customer support, and flexible rental plans, we ensure your journey is smooth from start to finish.

// Why Choose Us?
// ✅ Verified and clean cars
// ✅ Instant booking & doorstep delivery
// ✅ No hidden charges
// ✅ Flexible return options

// Drive on your terms — reserve your ride in just a few clicks and hit the road with confidence.`;

// const recommendedCars = [
//     {
//         id: 1,
//         name:"Acura Sports",
//         location: "India",
//         price: 160,
//         image:acuraSportImg,
//         rating: 5.0,
//         review: 120,
//         transmission: "Auto" ,
//         mileage: "10km",
//         fuel: "Petrol",
//         seats:"5 Persons",
//         year: 2018,
//         topRated: "true",
//     },

//     {
//         id: 2,
//         name:"Audi",
//         location: "India",
//         price:180 ,
//         image:audiImg,
//         rating:5.0 ,
//         review: 100,
//         transmission:"Manual" ,
//         mileage: "15km",
//         fuel: "Petrol",
//         seats: "4 Persons",
//         year: 2016,
//         featured: "true",
//     },

//     {
//         id: 3,
//         name:"Chevrolet Camaro",
//         location: "India",
//         price: 80,
//         image:chevroletCamaroImg,
//         rating: 4.0,
//         review: 58,
//         transmission: "Manual",
//         mileage: "20km" ,
//         fuel: "Diesel" ,
//         seats:"5 Persons",
//         year: 2012,
//         featured: "true",
//     },

//     {
//         id: 4,
//         name:"Cross Over",
//         location: "India",
//         price: 36 ,
//         image:crossoverImg,
//         rating: 3.5,
//         review: 200,
//         transmission: "Äuto" ,
//         mileage: "18km" ,
//         fuel: "Petrol",
//         seats: "5 Persons",
//         year: 2015,
//         featured: "true" ,
//     },

//     {
//         id: 5,
//         name:"Ferrari Speciale",
//         location: "India",
//         price: 200,
//         image:ferrariSpecialeImg,
//         rating: 5.0,
//         review: 80,
//         transmission: "Auto" ,
//         mileage: "12km",
//         fuel: "Petrol" ,
//         seats:"2 Person",
//         year:2019,
//         topRated:"true" ,
//     },

//     {
//         id: 6,
//         name:"Ford Mustang",
//         location: "India",
//         price: 150,
//         image:fordMustangImg,
//         rating: 4.5,
//         review: 90,
//         transmission: "Auto",
//         mileage:"15km" ,
//         fuel: "Petrol",
//         seats:"4 Persons",
//         year: 2018,
//         topRated: "true",
//     },
// ];

// // Tarrif Section
// const tarrifs = [
//   {name:"4 to 5 days", price:"12,750", baseKm: 25, extraKmPrice:"2,380"},
//   {name:"5 to 8 days", price:"21,250", baseKm: 90 , extraKmPrice:"3,825"},
//   {name:"8 to 15 days", price:"32,300", baseKm: 120, extraKmPrice:"5,100"},
//   {name:"16 to 25 days", price:"42,500", baseKm: 500, extraKmPrice:"6,800"},
// ]

// const ListingDetails =({car, images}) =>{

//     const [expanded, setExpanded] = useState(false);
    
//     const [currentIndex , setCurrentIndex] = useState(0);

//     const goToPrevious = () =>{
//         setCurrentIndex((prevIndex)=> prevIndex === 0 ? images.length - 1 : prevIndex -1
//     )
//     } ;

//     const goToNext = () =>{
//         setCurrentIndex((prevIndex)=> prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         )
//     };

//     const selectImage =(index) =>{
//         setCurrentIndex(index)
//     }

// const testCar= {
//     name: "Chevrolet Camaro",
//     category: "Sedan",
//     year :2023,
//     rating: 5.0,
//     location: "India",
//     views:250,
//     listedDate: "01 Jan 2024",
//     bookings: 300,
// }

// const carImages = [
//     "/images/kiaSoul.png",
//     "/images/mpv.png",
//     "/images/sedan.png",
//     "/images/sportscar.png",
//     "images/suzuki.png",
//     "images/verna.png",
// ]

//     const renderStars=(rating) =>{
//         const fullStars = Math.floor(rating);
//         const halfStar = rating % 1 >=0.5;
//         const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//         return(
//             <>
//             {[...Array(fullStars)].map((_, i)=>(
//                 <Star key={i} size={16} fill="#fbbf24" stroke="none"/>
//             ))}
//             {halfStar && <StarHalf  size={16} fill="#fbbf24" stroke="none"/>}
//             {[...Array(emptyStars)].map((_, i)=>(
//                 <Star key={i+fullStars} size={16} stroke="#d1d5db" />
//             ))}
//             </>
//         )
//     }

//     return(
//         <>
//         <section className="bg-white rounded-lg shadow px-6 py-4 mb-6">
//       <div className="flex flex-wrap justify-between items-center gap-y-4">
//         {/* Left: Car info */}
//         <div className="space-y-2">
//           <div className="flex items-center gap-3 text-sm text-gray-600">
//             <span className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">
//               🚗 {car?.category || "Sedan"}
//             </span>
//             <span className="flex items-center gap-1 px-2 py-0.5 bg-teal-600 text-white rounded-full font-medium">
//               {car?.year || "2023"}
//             </span>
//             <div className="flex items-center text-yellow-500 text-sm ml-2">
//               {Array.from({ length: 5 }).map((_, idx) => (
//                 <span key={idx}>
//                   {idx < Math.round(car?.rating || 5) ? "★" : "☆"}
//                 </span>
//               ))}
//               <span className="ml-2 text-gray-600">({car?.rating?.toFixed(1) || "5.0"})</span>
//             </div>
//           </div>

//                 <h2 className="text-2xl font-bold text-gray-900">
//             {car?.name || "Chevrolet Camaro"}
//           </h2>

//           <div className="text-sm text-gray-600 flex flex-wrap gap-4">
//             <span>📍 Location : {car?.location || "Miami St, Destin, FL 32550, USA"}</span>
//             <span>🚘 Views : {car?.views || 250}</span>
//             <span>📅 Listed on: {car?.listedDate || "01 Jan, 2024"}</span>
//           </div>
//         </div>

//         {/* Right: Action buttons */}
//         <div className="flex gap-3">
//           <button className="bg-teal-600 text-white font-semibold px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition">
//             📋 Total Booking : {car?.bookings || 300}
//           </button>
//           <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition">
//             🔁 Compare
//           </button>
//         </div>
//       </div>
//     </section>


//       <section>
//         <div className="w-full space-y-4">
//             {/* Top Info */}

//             <div className="flex justify-between items-center px-2">
//                 <span className="text-xs text-muted-foreground pl-2">🚶 4.2 km Away</span>
//                 <div className="flex gap-2 text-sm">
//                       <span className="text-orange-500 font-medium">✔️ Airport Delivery</span>
//                       <span className="text-sky-600 font-medium">✔️ Home <span className="text-blue-900 font-semibold">Delivery</span></span>
//                 </div>
//             </div>
//             {/* Main Image */}
//             <div>
//                 <img
//                 src={carImages[currentIndex]}
//                 alt="car"
//                 className="w-full h-full object-cover rounded-xl transition duration-300"
//                 />

//                 {/* Left Arrow */}
//                 <button onClick={goToPrevious} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow">
//                   <ChevronLeft  size={20}/>
//                 </button>

//                 {/* Right Arrow */}
//                 <button onClick={goToNext} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow">
//                     <ChevronRight size={20} />
//                 </button>
//                 {/* Orange Click item */}
//                 <div className="absolute right-3 top-3 bg-orange-500 rounded-full p-2 shadow">
//                   <MousePointerClick size={16} className="text-white" />
//                 </div>
//             </div>

//             {/* Thumbnails */}
//              <div className="flex items-center justify-center gap-2 px-2">
//                 {images.map((img, idx)=>(
//                     <img 
//                     key={idx}
//                     src={img}
//                     alt={`car ${idx}`}
//                     className={`w-24 h-16 object-cover rounded-md cursor-pointer border ${ currentIndex === idx ? "border-black scale-105" : "border-transparent"} transition-all duration-200 hover:scale-105`}
//                     onClick={()=>selectImage(idx)}
//                     />
//                 ))}

//              </div>
//         </div>
//       </section>

//       <section>
//         <div className="space-y-6 mt-6 px-4">
         
//          {/* Extra Services */}
//          <div>
//             <h3 className="text-lg font-semibold mb-2">Extra Services</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//              {services.map((service, idx)=>(
//                 <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 border rounded-lg text-sm text-gray-700">
//                     <span className="text-primary">{service.icon}</span>
//                     <span>{service.label}</span>
//                      </div>
//              ))}
//             </div>
//          </div>

//          {/* Description */}

//          <div>
//             <h3 className="text-lg font-semibold mb-2">Description of Listing</h3>
//             <div className="space-y-2 text-sm text-gray-700">
//              {expanded ? (
//                 <p className="whitespace-pre-line">{descriptionText}</p>
//              ) : (
//                 <p className="whitespace-pre-line line-clamp-5">{descriptionText}</p>
//              )}
//              <button onClick={()=>setExpanded(!expanded)} className="text-sm text-blue-600 font-medium hover:underline">
//                 {expanded ? "_Show Less" : "+ Show More"}
//              </button>
//             </div>
//          </div>
//         </div>
//       </section>

//       <section>
//         <div className="space-y-6 px-4 mt-6">
//           {/* Specifications */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Specifications</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {specifications.map((spec, index)=>(
//                 <div key={index} className="flex items-start gap-3 bg-gray-50 border rounded-md p-3 text-sm">
//                   <div className="text-primary pt-0.5">{spec.icon}</div>
//                   <div>
//                     <div className="font-medium">{spec.label}</div>
//                     <div className="text-gray-700">{spec.value}</div>
//                     </div>
//                  </div>
//               ))}
//             </div>
//           </div>

//           {/* Car Features */}

//           <div>
//             <h3 className="text-lg font-semibold mb-3">Car Features</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 text-sm text-gray-800">
//              {carFeatures.map((feature, index)=>(
//               <div className="flex items-center gap-2" key={index}>
//                 <span className="text-green-600">✔️</span>
//                 <span>{feature}</span>
//              </div>
//              ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white p-6 rounded-md shadow-md mt-8">
//         <h2 className="text-xl font-semibold mb-4 border-b pb-2">
//           Tarrif
//         </h2>
//         <div className="overflow-x-auto">
//         <table className="min-w-full text-left text-sm">
//           <thead className="bg-gray-800 text-white">
//            <tr>
//             <th className="px-4 py-2 font-medium">Name</th>
//             <th className="px-4 py-2 font-medium">Daily Price</th>
//             <th className="px-4 py-2 font-medium">Base Kilometres</th>
//             <th className="px-4 py-2 font-medium">Kilometres Extra Price</th>
//            </tr>
//           </thead>
//           <tbody>
//             {tarrifs.map((item, index)=>(
//               <tr key={index} className="border-b hover:bg-gray-50 transition-all">
//                 <td className="px-4 py-3">{item.name}</td>
//                 <td className="px-4 py-3">{item.price}</td>
//                 <td className="px-4 py-3">{item.baseKm}</td>
//                 <td className="px-4 py-3">{item.extraKmPrice}</td>
//               </tr>
//             ))}
//           </tbody>
//           </table>           
//         </div>
//       </section>



//         <section className="py-10">
//          <h2 className="text-2xl font-bold mb-6 text-gray-800">
//            You May be Interested in
//          </h2>
//          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//            {recommendedCars.map((car)=>(
//             <div key={car.id} className="border rounded-lg p-4 shadow-md bg-white relative">
//                 {car.featured && (
//                     <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"> 
//                         Featured
//                         </div>
//                 )}
//                      {car.topRated &&(
//                         <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                              Top Rated
//                             </div>
//                      )}
//                      <img 
//                      src={car.image}
//                      alt={car.name}
//                      className="w-full h-60 object-cover rounded"
//                      />
//                      <h3 className="font-bold text-lg mt-3 text-gray-900">{car.name}</h3>
//                      <p className="text-sm text-gray-600">
//                         ⭐{car.rating} ({car.review} Review )
//                      </p>
//                      <div className="text-sm text-gray-500 mt-2 space-y-1"> 
//                         <p>⚙️{car.transmission} | {car.mileage} | {car.fuel}</p>
//                         <p>👥{car.seats} | 📅{car.year}</p>
//                         <p>📍 {car.location}</p>
//                         </div>
//                         <p className="text-red-500 text-xl font-semibold mt-2">
//                             ${car.price}<span className="text-sm font-normal">/Day</span>
//                         </p>
//                         <button className="mt-3 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
//                             📅 Rent Now
//                         </button>
//                  </div>
//            ))}
//          </div>
//         </section>
//         </>
//     )
// }


// export default ListingDetails